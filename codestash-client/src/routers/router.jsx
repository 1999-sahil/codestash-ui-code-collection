import { createBrowserRouter } from "react-router-dom";
import App from "../App";

import Welcome from "../pages/welcome-page";
import Login from "../components/login";
import Register from "../components/register";

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
                path: "/about",
                element: <h2>Abput page</h2>,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/register",
                element: <Register />,
            },
        ],
    },
]);

export default router;