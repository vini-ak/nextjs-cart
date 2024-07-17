import { lazy } from "react";
import useImportHook from "./useImportHook";

interface IUseCart {
    cart: any[];
    addToCart: (product: any) => void;
    removeFromCart: (productId: string) => void;
}


const useCart = () => {
    // @ts-ignore
    const cart = useImportHook<IUseCart>(() => import("stores/cartStore"));
    if(!!cart) {
        debugger;
    }
    return { ...cart, isLoaded: !!cart };
}

export default useCart;

