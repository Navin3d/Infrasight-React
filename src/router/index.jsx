import { RouterProvider, createBrowserRouter } from "react-router-dom";

import HomePage from "../pages/home-page";
import LoginPage from "../pages/login-page";
import TaskManager from "../pages/charts-page";


const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />
    },
    {
        path: "/login",
        element: <LoginPage />
    },
    {
        path: "/chart",
        element: <TaskManager />
    },
]);

const Router = () => (
    <div>
        <RouterProvider router={router} />
    </div>
);

export default Router;
