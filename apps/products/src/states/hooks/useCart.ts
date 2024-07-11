import { lazy } from "react";

let useCart: any = () => null;

// @ts-ignore
useCart = lazy(() => import("stores/cartStore"));

debugger;
export default useCart;

