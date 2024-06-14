interface CartReducerAction {
    type: 'add' | 'remove';
    productId: string;
    quantity: number;
}

export interface CartProducts { [productId: string]: number | undefined }

export const cartReducer = (state: CartProducts, action: CartReducerAction): CartProducts => {
    const { productId, type, quantity } = action;

    debugger;
    if(type === "add" && quantity > 0) {
        let _currentQuantity = state[productId] ?? 0;
        state[productId] = _currentQuantity + quantity;

        return state; // add to cart
    } else if(type === "remove") {
        return { ...state, [productId]: undefined  } // remove from cart
    } 
    
    return state;
    
}