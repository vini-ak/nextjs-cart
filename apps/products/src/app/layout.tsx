"use client"
import { Inter } from "next/font/google";
import { Components } from "packages";
import "./globals.css";
import { CartProvider } from "@/states/providers";
import { useCart } from "@/states/hooks/useCart";

const inter = Inter({ subsets: ["latin"] });

const _Navbar = () => {
  const { totalItems } = useCart();

  return <Components.Navbar totalItems={totalItems} />
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <_Navbar />
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
