"use client"
import { useCart } from "@/states/hooks/useCart";
import Image from "next/image";
import styled from "styled-components";

export const Wrapper = styled.nav`
    width: 100vw;
    max-width: 100vw;
    height: 4rem;
    z-index: 1;
    display: flex;
    flex-flow: row nowrap;
    box-shadow: 1px 1px #333;
    background-color: green;
    color: white;
    justify-content: flex-end;
    align-items: center;
    padding: .25rem 4rem;
    position: fixed;

    & > .cart {
        position: relative;
        width: 2.7rem;
        height: 2.7rem;
        background-color: #ffffff;
        border: solid 2px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding-right: 2px;
        cursor: pointer;

        & > .total-items {
            position: absolute;
            top: -8px;
            right: -8px;
            background-color: red;
            font-size: .75rem;
            padding: .25rem;
            border-radius: 50%;
        }
    }
`;

export const Navbar = () => {
    const { totalItems } = useCart();

    return (
        <Wrapper>
            <div className="cart">
                <Image 
                    alt="cart"
                    width={24}
                    height={24}
                    src={"/shopping-cart.png"} />

                <span className="total-items">{totalItems}</span>
            </div>
        </Wrapper>
    )
}