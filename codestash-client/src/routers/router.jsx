import { createBrowserRouter } from "react-router-dom";
import App from "../App";

import Welcome from "../pages/welcome-page";
import Dashboard from "../pages/dashboard";
import DynamicComponents from "../pages/dynamic-components";
import DashboardComponents from "../pages/dashboard-components";
import Playground from "../pages/playground/playground";

import ManageComponents from "../pages/crud-components/manage-components";
import AddNewComponent from "../pages/crud-components/add-new-component";
import EditComponents from "../pages/crud-components/edit-components";

import AdminRoute from "./admin";
import PrivateRoute from "./private";

import Login from "../components/login";
import Register from "../components/register";
import Buttons from "../components/ui/buttons/buttons";
import AdminLogin from "../components/admin-login";
import DashboardPanel from "../components/dashboard/panel";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Welcome />,
            },
            
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/register",
                element: <Register />,
            },
            {
                path: "/components/buttons",
                element: <PrivateRoute><Buttons /></PrivateRoute>,
            },
        ],
    },
    {
        path: "/admin",
        element: <AdminLogin />
    },
    {
        path: "/dashboard",
        element: <AdminRoute>
            <Dashboard />
        </AdminRoute>,
        children: [
            {
                path: "",
                element: <AdminRoute><DashboardPanel /></AdminRoute>
            },
            {
                path: "components",
                element: <AdminRoute><DashboardComponents /></AdminRoute>
            },
            {
                path: "playground",
                element: <AdminRoute><Playground /></AdminRoute>
            },
            {
                path: "components/:componentId",
                element: <AdminRoute><DynamicComponents /></AdminRoute>
            },
            {
                path: "add-new-component",
                element: <AdminRoute><AddNewComponent /></AdminRoute>
            },
            {
                path: "edit-component/:id",
                element: <AdminRoute><EditComponents /></AdminRoute>
            },
            {
                path: "manage-components",
                element: <AdminRoute><ManageComponents /></AdminRoute>
            },
        ]
    },
]);

export default router;