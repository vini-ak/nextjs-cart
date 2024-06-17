
"use client";
import { Components } from "packages";
import { useMemo } from "react";
import { ProductsService } from "@/services";
import { useCart } from "@/states/hooks/useCart";
import * as Styles from "./styles";

export default function Home() {
  const products = useMemo(() => new ProductsService().listProducts(), []);
  const { addToCart } = useCart();

  return (
    <Styles.Main>
        <Styles.CardGrid>
            { products.map((product, i) => 
                <Components.ItemCard 
                    key={i} 
                    product={product}
                    addToCart={addToCart}
                  />
            )}
        </Styles.CardGrid>
    </Styles.Main>
  )
}
