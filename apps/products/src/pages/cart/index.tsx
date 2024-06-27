// import CartPage from "cart";
import dynamic from "next/dynamic";

// @ts-ignore
const CartPage: any = dynamic(() => import("cart/cart"));

const Cart = CartPage;
Cart.getInitialProps = CartPage.getInitialProps;

export default Cart;