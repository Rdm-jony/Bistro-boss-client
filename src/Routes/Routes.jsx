import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu";
import Shop from "../Pages/Shop/Shop";
import SignIn from "../Pages/SignIn/SignIn";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: '/menu',
                element: <Menu></Menu>
            },
            {
                path: '/shop',
                element: <Shop></Shop>
            },

        ]
    },
    {
        path: "/signIn",
        element: <SignIn></SignIn>
    }
]);