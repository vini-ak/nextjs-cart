import Image from "next/image";
import React from "react";
import * as Styles from "./styles";

interface NavbarProps {
    totalItems: number;
}

export const Navbar = ({totalItems}: NavbarProps) => {
    return (
        <Styles.Wrapper>
            <div className="cart">
                <Image 
                    alt="cart"
                    width={24}
                    height={24}
                    src={"/shopping-cart.png"} />

                <span className="total-items">{totalItems}</span>
            </div>
        </Styles.Wrapper>
    )
}