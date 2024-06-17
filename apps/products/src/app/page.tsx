
"use client";
import styled from "styled-components";
import * as Components from "../../../imports";
import { useMemo } from "react";
import { ProductsService } from "@/services";
import { useCart } from "@/states/hooks/useCart";

const Main = styled.main`
  padding: 2rem;
  margin-top: 10vh;
`;

const CardGrid = styled.div`
  display: grid;
  grid-gap: 1.25rem;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  align-items: center;
  -ms-grid-column-align: center;
`;

export default function Home() {
  const products = useMemo(() => new ProductsService().listProducts(), []);
  const { addToCart } = useCart();

  return (
    <Main>
        <CardGrid>
            { products.map((product, i) => 
                <Components.ItemCard 
                    key={i} 
                    product={product}
                    addToCart={addToCart}
                  />
            )}
        </CardGrid>
    </Main>
  )
}
