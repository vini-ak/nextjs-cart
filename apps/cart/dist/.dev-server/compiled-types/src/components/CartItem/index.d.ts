import React from 'react';
interface CartItemProps {
    productName: string;
    price: number;
    quantity?: number;
    image?: string;
}
export declare const CartItem: (props: CartItemProps) => React.JSX.Element;
export {};
