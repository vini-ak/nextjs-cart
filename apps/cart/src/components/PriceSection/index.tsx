import { useState } from "react";
import { Section } from "./styles";
import { DefaultButton } from "../DefaultButton";
import { ButtonStyleProps } from "../DefaultButton/types";

export const PriceSection = () => {
    const [price, setPrice] = useState("0,00");

    const buttonStyle: ButtonStyleProps = {
        $size: "xg",
        $bgColor: "green"
    }

    return (
        <Section>
            <p>Preço:</p>
            <p className="price">{price}</p>
            <DefaultButton 
                title="Finalizar compra"
                styleProps={buttonStyle}
                onClick={() => {
                    debugger;
                }}
            />
        </Section>
    )
}