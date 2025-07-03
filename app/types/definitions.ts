import type { Prisma } from "../generated/prisma";

export type Product = Prisma.ProductGetPayload<{
  include: {
    category: true;
    image: true;
    gallery: {
      include: {
        first: true;
        second: true;
        third: true;
      };
    };
    includes: {
      select: {
        quantity: true;
        item: true;
      };
    };
    others: {
      select: {
        slug: true;
        category: true;
        name: true;
        mobile: true;
        tablet: true;
        desktop: true;
      };
    };
  };
}>;

export type CartItem = {
  id: number;
  slug: string;
  name: string;
  price: number;
  amount: number;
};

export type CartTotal = {
  totalAmount: number;
  totalPrice: number;
  SHIPPING: number;
  VAT: number;
  grandTotal: number;
};

export type FormValues = {
  name: string;
  email: string;
  phone_number: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  payment_method: string;
  e_money_number: string;
  e_money_PIN: string;
};
