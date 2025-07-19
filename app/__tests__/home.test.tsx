import { render, screen } from "@testing-library/react";
import Home from "../page";

it("renders homepage", () => {
  render(<Home></Home>);
  expect(screen.getByText(/audiophile/i)).toBeInTheDocument();
});
