import React from "react";
import { Link } from "react-router-dom";
import notFoundImg from "../../assets/not found/not-found.png";
import useTitle from "../../Hooks/useTitle";

const NotFound = () => {
    useTitle("Not-Found");

    return (
        <div className="fixed top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
            <Link to="/">
                <img src={notFoundImg} alt="" />
            </Link>
        </div>
    );
};

export default NotFound;
