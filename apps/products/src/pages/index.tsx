
import { ItemCard } from "packages/components";
import { useMemo } from "react";
import { ProductsService } from "@/services";
import * as Styles from "./styles";
import useCart from "@/states/hooks/useCart";

export default function Home() {
  const products = useMemo(() => new ProductsService().listProducts(), []);
  
  // @ts-ignore
  const { addToCart } = useCart();

  return (
    <Styles.Main>
        <Styles.CardGrid>
            { products.map((product, i) => 
                <ItemCard 
                    key={i} 
                    product={product}
                    addToCart={() => addToCart && addToCart(product)}
                  />
            )}
        </Styles.CardGrid>
    </Styles.Main>
  )
}
