interface CartReducerAction {
    type: 'add' | 'remove';
    productId: string;
    quantity: number;
}

export const cartReducer = (state: string[], action: CartReducerAction) => {
    if(action.type === "add" && action.quantity > 0) {
        return [...state, action.productId]; // add to cart
    } else if(action.type === "remove") {
        return state.filter(item => item !== action.productId); // remove from cart
    } else {
        return state;
    }
}