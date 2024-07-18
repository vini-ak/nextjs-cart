import create from 'zustand';

// interface IUseCart {
//   cart: any[];
//   addToCart: (product: any) => void;
//   removeFromCart: (productId: string) => void;
// }

const useCart = create((set) => ({
  cart: [],
  addToCart: (product) =>
    set((state) => ({ cart: [...state.cart, product] })),
  removeFromCart: (productId) =>
    set((state) => ({
      cart: state.cart.filter((product) => product.id !== productId),
    })),
}));

debugger;
export default useCart;