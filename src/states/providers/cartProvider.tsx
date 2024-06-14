"use client"
import { Product } from "@/domain";
import { createContext, useCallback, useContext, useEffect, useReducer, useState } from "react";

interface CartContextProps {
    items: string[];
    totalItems: number;
    addToCart(product: Product, quantity: number): void;
    removeFromCart(product: Product, quantity: number): void;
}

export const CartContext = createContext({ } as CartContextProps);

interface CartReducerAction {
    type: 'add' | 'remove';
    productId: string;
    quantity: number;
}
const cartReducer = (state: string[], action: CartReducerAction) => {
    if(action.type === "add" && action.quantity > 0) {
        return [...state, action.productId]; // add to cart
    } else if(action.type === "remove") {
        return state.filter(item => item !== action.productId); // remove from cart
    } else {
        return state;
    }
}

export const CartProvider = ({ children }: { children: any }) => {
    const [items, dispatch] = useReducer(cartReducer, []);
    const [totalItems, setTotalItems] = useState<number>(0);

    useEffect(() => { setTotalItems(items.length) }, [items]);

    const addToCart = (product: Product, quantity: number) => dispatch({ type: 'add', productId: product._id, quantity });
    const removeFromCart = (product: Product, quantity: number) => dispatch({ type: 'remove', productId: product._id, quantity });

    return <CartContext.Provider value={{ items, totalItems, addToCart, removeFromCart }} children={children} />
};