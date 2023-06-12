import {
    createBrowserRouter,
} from "react-router-dom";
import Contact from "../pages/contact";
import ErrorPage from "../pages/error";
import Login from "../pages/login";
import MainLayout from "../layouts/mainlayout";
import MainPage from "../pages/main";


export const router = createBrowserRouter([
    {
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [

            //tao route o day nhe

            {
                path: "/",
                element: <MainPage />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
        ]
    },

    {
        path: "/login",
        element: <Login />,
    },
]);

