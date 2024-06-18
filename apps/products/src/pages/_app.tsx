import { useCart } from "@/states/hooks/useCart";
import { CartProvider } from "@/states/providers";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Navbar } from "packages/components";

const _Navbar = () => {
  debugger; 
  const { totalItems } = useCart();
  return <Navbar totalItems={totalItems} />
}

export default function App({ Component, pageProps }: AppProps) {
  return  (
    <CartProvider>
      <_Navbar />
      <Component {...pageProps} />
    </CartProvider>
  )
}
