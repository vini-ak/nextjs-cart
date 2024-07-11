// import CartPage from "cart";
// import dynamic from "next/dynamic";
import { lazy } from "react";
import { loadRemote } from "@module-federation/runtime";

let CartPage: any = () => null;

// @ts-ignore
CartPage  = lazy(() => import("cart/cart"));

const Cart = CartPage;
Cart.getInitialProps = CartPage.getInitialProps;

export default Cart;