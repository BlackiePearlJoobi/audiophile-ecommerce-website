import type { Metadata, Viewport } from "next";
import "./globals.css";
import { CartProvider } from "./CartContext";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Audiophile E-commerce Website",
  description: "",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <div className="w-full flex flex-col">
          <CartProvider>
            <Header></Header>
            <div className="max-w-[1400px] flex flex-col mx-auto">
              {children}
            </div>
            <Footer></Footer>
          </CartProvider>
        </div>
      </body>
    </html>
  );
}
