import { useContext } from "react"
import { CartContext } from "../providers"

export const useCart = () => {
    const { items, totalItems, addToCart, removeFromCart } = useContext(CartContext);
    
    return { items, totalItems, addToCart, removeFromCart };
}