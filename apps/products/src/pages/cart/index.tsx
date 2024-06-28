// import CartPage from "cart";
// import dynamic from "next/dynamic";
import { lazy } from "react";

// @ts-ignore
const CartPage: any = lazy(() => import("cart/cart"));

const Cart = CartPage;
Cart.getInitialProps = CartPage.getInitialProps;

export default Cart;