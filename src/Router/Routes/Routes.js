import AddService from "../../Pages/AddService/AddService";
import Login from "../../Pages/Authentication/Login/Login";
import SignUp from "../../Pages/Authentication/SignUp/SignUp";
import Home from "../../Pages/Home/Home";
import Services from "../../Pages/Services/Services";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../../Layout/Main");

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/serviceAdd",
                element: <AddService></AddService>,
            },
            {
                path: "/services",
                element: <Services></Services>,
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/signup",
                element: <SignUp></SignUp>,
            },
        ],
    },
]);

export default router;
