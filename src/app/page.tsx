
"use client";
import styled from "styled-components";
import * as Components from "../../packages/components";
import { useMemo } from "react";
import { ProductsService } from "@/services";
import { useCart } from "@/states/hooks/useCart";
import { Product } from "@/domain";

const Main = styled.main`
  padding: 2rem;
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

  return (
    <Main>
        <CardGrid>
            { products.map((product, i) => 
                <Components.ItemCard 
                    key={i} 
                    _id={product._id}
                    name={product.name}
                    price={product.price}
                    photo={product.photo}
                  />
            )}
        </CardGrid>
    </Main>
  )
}
