
import { createBrowserRouter } from "react-router-dom";
import ProductListViewScreen from "./layouts/productLists/ProductListViewScreen";
import Login from "./layouts/loginSignUp/Login";
import SignUp from "./layouts/loginSignUp/SignUp";
import ShoppingCartViewScreen from "./layouts/ShoppingCart/ShoppingCartViewScreen";

const router = createBrowserRouter([
    {
        path: '/',
        element: <ProductListViewScreen />
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/signup',
        element: <SignUp />
    },
    {
        path: '/products',
        element: <ProductListViewScreen />
    },
     {
        path: '/cart',
        element: <ShoppingCartViewScreen />
    },
    ]);

export default router;