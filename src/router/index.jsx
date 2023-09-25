import { RouterProvider, createBrowserRouter } from "react-router-dom";

import HomePage from "../pages/home-page";
import LoginPage from "../pages/login-page";
import ListPage from "../pages/list-page";
import TaskManager from "../pages/charts-page";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Loading from "../components/loading";
// import CourseDetail from "../pages/CourseDetail";
import Addserverpage from "../pages/Addserverpage";
// import LayoutFlow from "../components/flowchart";
import Flowchart from "../pages/flowchart-page";
import ProjectStatsPage from "../pages/projectStatsPage";

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
        path: "/chart/:id",
        element: <TaskManager />
    },
    {
        path: "/list",
        element: <ListPage />
    },
    {
        path: "/loading",
        element: <Loading />
    },

        // {
        //     path: "/test",
        //     element: <CourseDetail />
        // },
    {
        path: "/addserver",
        element: <Addserverpage />
    },
    {
        path: "/flow",
        element: <Flowchart />
    },
    {
        path: "/project",
        element: <ProjectStatsPage/>
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
