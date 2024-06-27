import { Product } from "packages/domain/";
import { createContext, useCallback, useEffect, useReducer, useState } from "react";
import { CartProducts, cartReducer } from "../reducers";

interface CartContextProps {
    items: CartProducts;
    totalItems: number;
    addToCart(product: Product, quantity: number): void;
    removeFromCart(product: Product, quantity: number): void;
}

export const CartContext = createContext({ } as CartContextProps);

export const CartProvider = ({ children }: { children: any }) => {
    debugger;
    const [cart, dispatch] = useReducer(cartReducer, {} as CartProducts);
    const [totalItems, setTotalItems] = useState<number>(0);
    const [updated, setUpdated] = useState(false);

    useEffect(() => {
        if(updated) {
            let _totalItems = Object.keys(cart).length;
            setTotalItems(_totalItems);
            setUpdated(false);
        }
    }, [cart, updated]);

    const changeCart = useCallback((product: Product, quantity: number, type: 'add' | 'remove') => {
        debugger;
        dispatch({ type, quantity, productId: product._id });
        setUpdated(true);
    }, [dispatch]);

    const addToCart = (product: Product, quantity: number) => changeCart(product, quantity, 'add');
    const removeFromCart = (product: Product, quantity: number) => changeCart(product, quantity, 'remove');

    debugger;
    return <CartContext.Provider value={{ items: cart, totalItems, addToCart, removeFromCart }} children={children} />
};