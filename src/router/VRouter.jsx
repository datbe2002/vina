import {
    createBrowserRouter,
} from "react-router-dom";
import Contact from "../pages/contact";
import ErrorPage from "../pages/error";
import Login from "../pages/login";
import MainLayout from "../layouts/mainlayout";
import MainPage from "../pages/main";
import Blog from "../pages/blog";
import BlogDetail from "../pages/blogdetail";
import EditPage from "../pages/edit";
import AddBlog from "../pages/addblog";
import AdminSection from "../pages/admin/AdminSection";


export const router = createBrowserRouter([
    {
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <MainPage />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/blog",
                element: <Blog />,
            },
            {
                path: "/blog/:id",
                element: <BlogDetail />,
            },
        ]
    },

    {
        path: "/add",
        element: <AddBlog />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/admin/control/Mxh8m6fIlKps3L5qDdi0",
        element: <AdminSection />,
    },
    {
        path: "/admin/control/Mxh8m6fIlKps3L5qDdi0/update/:id",
        element: <EditPage />,
    },
]);

