import useCart from "@/states/hooks/useCart";
import { withLazy } from "@/states/hooks/withLazy";
import { CartProvider } from "@/states/providers";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Navbar } from "packages/components";
import { useEffect, useState } from "react";

const _Navbar = () => {
  const [totalItems, setTotalItems] = useState(0);

  const { cart, isLoaded } = useCart();

  useEffect(() => {
    debugger;
    setTotalItems(cart?.reduce((acc: any, item: any) => acc + item.quantity, 0));
  }, [cart]);

  return isLoaded 
    ? <Navbar totalItems={totalItems} /> 
    : null;
}

export default function App({ Component, pageProps }: AppProps) {
  return  (
    <CartProvider>
      <_Navbar />
      <Component {...pageProps} />
    </CartProvider>
  )
}
