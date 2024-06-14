"use client"
import { Product } from "@/domain";
import { createContext, useEffect, useReducer, useState } from "react";
import { cartReducer } from "../reducers";

interface CartContextProps {
    items: string[];
    totalItems: number;
    addToCart(product: Product, quantity: number): void;
    removeFromCart(product: Product, quantity: number): void;
}

export const CartContext = createContext({ } as CartContextProps);

export const CartProvider = ({ children }: { children: any }) => {
    const [items, dispatch] = useReducer(cartReducer, []);
    const [totalItems, setTotalItems] = useState<number>(0);

    useEffect(() => { setTotalItems(items.length) }, [items]);

    const addToCart = (product: Product, quantity: number) => dispatch({ type: 'add', productId: product._id, quantity });
    const removeFromCart = (product: Product, quantity: number) => dispatch({ type: 'remove', productId: product._id, quantity });

    return <CartContext.Provider value={{ items, totalItems, addToCart, removeFromCart }} children={children} />
};