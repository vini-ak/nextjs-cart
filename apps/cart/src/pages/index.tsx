import Head from "next/head";
import { Inter } from "next/font/google";
import { PriceSection } from "@/components/PriceSection";
import { Product } from "../domain";
import { useCallback, useEffect, useMemo, useState } from "react";
import { CartItem } from "@/components/CartItem";
import { CartService } from "@/services";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const service = useMemo(() => new CartService(), []);
  const [reloadCart, setReloadCart] = useState<boolean>(true);

  const [items, setItems] = useState<Product[]>();
  const [price, setPrice] = useState<number>(0);
  const [totalItems, setTotalItems] = useState<number>(0);

  const fetchCart = async () => {
    service.getCart().then((response) => {
      setItems(response.items);
      setPrice(response.totalPrice);
      setTotalItems(response.totalItems);
      setReloadCart(false);
    });
  };

  const removeItem = useCallback((id: string) => {
    service.removeFromCart(id).then((response) => {
      setReloadCart(true);
    })
  }, [service]);

  useEffect(() => {
    if(reloadCart) fetchCart();
  }, [reloadCart]);



  return (
    <>
      <Head>
        <title>Cart</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={inter.className}>
        <section id="items">
          {
            items?.map((product: Product, index: number) => (
              <CartItem 
                key={product.id.concat(index.toString())}
                image={product.photo}
                productName={product.name}
                price={product.price}
                quantity={product.quantity}
                onRemove={async () => removeItem(product.id)}
              />
            ))
          }
        </section>
        <PriceSection price={price!.toFixed(2)} />
      </main>
    </>
  );
}
