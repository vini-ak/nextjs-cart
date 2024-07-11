
import { lazy } from "react";

let CartPage: any = () => null;

// @ts-ignore
CartPage  = lazy(() => import("cart/cart"));

const Cart = CartPage;
Cart.getInitialProps = CartPage.getInitialProps;

debugger;
export default Cart;