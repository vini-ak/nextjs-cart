import { Section } from "./styles";
import { DefaultButton } from "../DefaultButton";
import { ButtonStyleProps } from "../DefaultButton/types";

interface PriceSectionProps {
    price: string;
}
export const PriceSection = (props: PriceSectionProps) => {
    const buttonStyle: ButtonStyleProps = {
        $size: "xg",
        $bgColor: "green"
    }

    return (
        <Section>
            <p>Preço:</p>
            <p className="price">{props.price}</p>
            <DefaultButton 
                title="Finalizar compra"
                styleProps={buttonStyle}
                onClick={() => {
                }}
            />
        </Section>
    )
}