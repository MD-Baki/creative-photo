import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { Spinner } from "../../components/loader/Spinner";
import { AuthContext } from "../../Pages/Authentication/AuthProvider/AuthProvider";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) return <Spinner />;

    if (user) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
