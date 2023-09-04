import { RouterProvider, createBrowserRouter } from "react-router-dom";

import HomePage from "../pages/home-page";
import LoginPage from "../pages/login-page";


const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage/>
    },
    {
        path: "/login",
        element: <LoginPage/>
    }
]);

const Router = () => (
    <div>
        <RouterProvider router={router} />
    </div>
);

export default Router;
