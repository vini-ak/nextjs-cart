import { useEffect, useState } from 'react';
import { Card } from './styles';
import { DefaultButton } from 'packages/components';

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
                    onClick={() => {}}
                    style={{ size: "md", backgroundColor: "red" }}
                />
                <button className="remove-item">Remover</button>
            </div>
        </Card>
    );
}