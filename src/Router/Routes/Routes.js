import AddService from "../../Pages/AddService/AddService";
import Login from "../../Pages/Authentication/Login/Login";
import SignUp from "../../Pages/Authentication/SignUp/SignUp";
import Home from "../../Pages/Home/Home";
import ServiceDetails from "../../Pages/ServiceDetails/ServiceDetails";
import Services from "../../Pages/Services/Services";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

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
                element: (
                    <PrivateRoute>
                        <AddService></AddService>
                    </PrivateRoute>
                ),
            },
            {
                path: "/services",
                element: <Services></Services>,
            },
            {
                path: "/service/:id",
                element: <ServiceDetails></ServiceDetails>,
                loader: ({ params }) =>
                    fetch(`http://localhost:5000/services/${params.id}`),
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
