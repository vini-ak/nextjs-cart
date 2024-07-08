import { useEffect, useState } from 'react';
import { Card } from './styles';
import { DefaultButton } from '../DefaultButton';
import { ButtonStyleProps } from '../DefaultButton/types';

interface CartItemProps {
    productName: string;
    price: number;
    quantity?: number;
    image?: string;
}

export const CartItem = (props: CartItemProps) => {
    const [quantity, setQuantity] = useState<number>(1);

    useEffect(() => {
        setQuantity(props.quantity ?? 1);
    }, [props.quantity]);

    const buttonStyle: ButtonStyleProps = {
        $size: "md",
        $bgColor: "red"
    };

    return (
        <Card>
            <div className="content">
                <p className="product-name">{props.productName}</p>
                <p className="quantity">{quantity}</p>
                <p className="price">{props.price * quantity}</p>
            </div>
            <div className="actions">
                <DefaultButton 
                    title="Remover"
                    onClick={() => {debugger;}}
                    styleProps={buttonStyle}
                />
                <button className="remove-item">Remover</button>
            </div>
        </Card>
    );
}