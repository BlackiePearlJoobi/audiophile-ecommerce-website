import { render, screen, within } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import Checkout from "../checkout/page";
import { CartProvider } from "../CartContext";

jest.mock("next/navigation", () => ({
  useRouter: () => ({
    back: jest.fn(),
    push: jest.fn(),
    forward: jest.fn(),
    replace: jest.fn(),
    prefetch: jest.fn(),
  }),
}));

jest.mock("../CartContext", () => ({
  useCart: () => ({
    cartItems: {
      1: { id: 1, name: "YX1 Wireless Earphones", price: 599, amount: 1 },
    },
    activeCartItems: [
      { id: 1, name: "YX1 Wireless Earphones", price: 599, amount: 1 },
    ],
    cartTotal: {
      totalAmount: 1,
      totalPrice: 599,
      SHIPPING: 50,
      VAT: Math.floor(599 * 0.2),
      grandTotal: 599 + 50 + Math.floor(599 * 0.2),
    },
    updateCart: jest.fn(),
    clearCart: jest.fn(),
  }),
  CartProvider: ({ children }: { children: React.ReactNode }) => children,
}));

const renderCheckout = () =>
  render(
    <CartProvider>
      <Checkout />
    </CartProvider>,
  );

describe("Email validation", () => {
  let emailInput: HTMLElement;
  let emailField: HTMLElement;
  let payButton: HTMLElement;

  beforeEach(() => {
    renderCheckout();
    emailInput = screen.getByLabelText(/email address/i);
    emailField = emailInput.closest("li")!;
    payButton = screen.getByRole("button", { name: /continue & pay/i });
  });

  it("shows validation error when email is empty", async () => {
    await userEvent.click(payButton);
    expect(
      within(emailField!).getByText(/this is required/i),
    ).toBeInTheDocument();
  });

  test.each([
    ["bademail@", true],
    ["example@mail.c", true],
    ["user.com", true],
    ["test@example.com", false],
  ])("email '%s' should %s trigger error", async (input, shouldError) => {
    await userEvent.type(emailInput, input);
    await userEvent.click(payButton);
    const error = within(emailField).queryByText(/wrong format/i);
    expect(!!error).toBe(shouldError);
  });
});

describe("Phone number validation", () => {
  let phoneInput: HTMLElement;
  let phoneField: HTMLElement;
  let payButton: HTMLElement;

  beforeEach(() => {
    renderCheckout();
    phoneInput = screen.getByLabelText(/phone number/i);
    phoneField = phoneInput.closest("li")!;
    payButton = screen.getByRole("button", { name: /continue & pay/i });
  });

  it("shows validation error when phone number is empty", async () => {
    await userEvent.click(payButton);
    expect(
      within(phoneField).getByText(/this is required/i),
    ).toBeInTheDocument();
  });

  test.each([
    ["1", true],
    ["12345", true],
    ["123456789", true],
    ["1234567890", false],
  ])(
    "phone number '%s' should %s trigger error",
    async (input, shouldError) => {
      await userEvent.type(phoneInput, input);
      await userEvent.click(payButton);
      const error = within(phoneField).queryByText(/wrong format/i);
      expect(!!error).toBe(shouldError);
    },
  );
});

describe("Payment method validation", () => {
  let paymentField: HTMLElement;
  let payButton: HTMLElement;

  beforeEach(() => {
    renderCheckout();
    paymentField = screen.getByText(/payment method/i).closest("fieldset")!;
    payButton = screen.getByRole("button", { name: /continue & pay/i });
  });

  it("shows error when no payment method is selected", async () => {
    await userEvent.click(payButton);
    expect(
      within(paymentField!).getByText(/please select one of these options/i),
    ).toBeInTheDocument();
  });
});

it("confirms order when all fields are valid", async () => {
  renderCheckout();

  await userEvent.type(screen.getByLabelText(/name/i), "Alexei Ward");
  await userEvent.type(
    screen.getByLabelText(/email address/i),
    "test@example.com",
  );
  await userEvent.type(screen.getByLabelText(/phone number/i), "1234567890");
  await userEvent.type(
    screen.getByLabelText(/your address/i),
    "1137 Williams Avenue",
  );
  await userEvent.type(screen.getByLabelText(/city/i), "New York");
  await userEvent.selectOptions(
    screen.getByLabelText(/state \/ province/i),
    "NY",
  );
  await userEvent.type(screen.getByLabelText(/zip code/i), "10001");

  // Select payment method
  await userEvent.click(screen.getByLabelText(/e-money/i));
  await userEvent.type(screen.getByLabelText(/e-money number/i), "123456789");
  await userEvent.type(screen.getByLabelText(/e-money pin/i), "1234");

  // Submit
  await userEvent.click(
    screen.getByRole("button", { name: /continue & pay/i }),
  );

  // Expect confirmation modal to appear
  expect(
    await screen.findByRole("heading", { name: /thank you/i }),
  ).toBeInTheDocument();
});
