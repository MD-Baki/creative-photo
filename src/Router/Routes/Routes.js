import AddService from "../../Pages/AddService/AddService";
import Login from "../../Pages/Authentication/Login/Login";
import SignUp from "../../Pages/Authentication/SignUp/SignUp";
import Home from "../../Pages/Home/Home";
import MyReviews from "../../Pages/MyReviers/MyReviews";
import ReviewEdit from "../../Pages/ReviewEdit/ReviewEdit";
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
                    fetch(
                        `${process.env.REACT_APP_API_URI}/services/${params.id}`
                    ),
            },
            {
                path: "/reviews",
                element: (
                    <PrivateRoute>
                        <MyReviews></MyReviews>
                    </PrivateRoute>
                ),
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
    {
        path: "/edit/:id",
        element: (
            <PrivateRoute>
                <ReviewEdit></ReviewEdit>
            </PrivateRoute>
        ),
        loader: ({ params }) =>
            fetch(`${process.env.REACT_APP_API_URI}/reviews/${params.id}`),
    },
]);

export default router;
