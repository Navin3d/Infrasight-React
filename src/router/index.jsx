import { RouterProvider, createBrowserRouter } from "react-router-dom";

import HomePage from "../pages/home-page";
import LoginPage from "../pages/login-page";
import TaskManager from "../pages/charts-page";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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
        <Navbar/>
        <RouterProvider router={router} />
        <Footer/>
    </div>
);

export default Router;
