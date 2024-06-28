import Head from "next/head";
import { Inter } from "next/font/google";
import { PriceSection } from "@/components/PriceSection";
import { Product } from "../domain";
import { useState } from "react";
import { CartItem } from "@/components/CartItem";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [items] = useState<Product[]>([
    { name: "teste", _id: "dfa21S", price: 3.2, photo: undefined },
    { name: "teste", _id: "dfa21ar", price: 3.2, photo: undefined },
    { name: "teste", _id: "dfa21FA", price: 3.2, photo: undefined },
    { name: "teste", _id: "dfa21CA", price: 3.2, photo: undefined },
    { name: "teste", _id: "dfa21E", price: 3.2, photo: undefined },
  ]);

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
            items.map((product: Product, index: number) => (
              <CartItem 
                key={product._id.concat(index.toString())}
                image={product.photo}
                productName={product.name}
                price={product.price}
                quantity={product.quantity}
              />
            ))
          }
        </section>
        <PriceSection />
      </main>
    </>
  );
}
