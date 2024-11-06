import { createBrowserRouter } from "react-router-dom";
import App from "../App";

import Welcome from "../pages/welcome-page";
import Login from "../components/login";
import Register from "../components/register";
import Buttons from "../components/ui/buttons/buttons";

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
                element: <Buttons />,
            },
        ],
    },
]);

export default router;