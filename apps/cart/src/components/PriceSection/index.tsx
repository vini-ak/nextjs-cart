import { useState } from "react";
import { Section } from "./styles";
import { DefaultButton } from "packages/components";

export const PriceSection = () => {
    const [price, setPrice] = useState("0,00");

    return (
        <Section>
            <p>Preço:</p>
            <p className="price">{price}</p>
            <DefaultButton 
                title="Finalizar compra"
                style={{ size: "xg", backgroundColor: "green" }}
                onClick={() => {
                    debugger;
                }}
            />
        </Section>
    )
}