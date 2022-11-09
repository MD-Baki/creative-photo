import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./SideNav.css";
import {
    FaDoorOpen,
    FaEdit,
    FaHome,
    FaServicestack,
    FaLayerGroup,
    FaFileAlt,
    FaSignInAlt,
} from "react-icons/fa";
import { SiGnuprivacyguard } from "react-icons/si";
import { AuthContext } from "../../../Authentication/AuthProvider/AuthProvider";

const SideNav = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => {})
            .catch((err) => console.error(err));
    };

    return (
        <div className="side-nav h-screen p-3 space-y-2 w-60 bg-[#0e1525] overflow-hidden">
            <div className="py-2 border-b border-gray-700">
                {user?.uid ? (
                    <div className="flex flex-wrap justify-center items-center gap-3">
                        <img
                            src={user?.photoURL}
                            alt=""
                            className="rounded-full h-[70px]"
                        />
                        <div>
                            <h2 className="text-lg font-semibold">
                                {user?.displayName}
                            </h2>
                            <p className="text-xs">{user?.email}</p>
                        </div>
                    </div>
                ) : (
                    <h2 className="text-center text-2xl font-bold">Wellcome</h2>
                )}
            </div>
            <div className="divide-y divide-gray-700">
                <ul className="pt-2 pb-4 space-y-1 text-sm">
                    <li>
                        <Link
                            to="/"
                            className="flex items-center hover:bg-[#b3c5ef] hover:text-[#0e1525] py-2 rounded-md transition duration-300 ease-in-out"
                        >
                            <FaHome className="text-lg ml-2 mr-3" />
                            <span>Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/services"
                            className="flex items-center hover:bg-[#b3c5ef] hover:text-[#0e1525] py-2 rounded-md transition duration-300 ease-in-out"
                        >
                            <FaServicestack className="text-lg ml-2 mr-3" />
                            <span>Services</span>
                        </Link>
                    </li>
                    {user && (
                        <>
                            <li>
                                <Link
                                    to="/reviews"
                                    className="flex items-center hover:bg-[#b3c5ef] hover:text-[#0e1525] py-2 rounded-md transition duration-300 ease-in-out"
                                >
                                    <FaFileAlt className="text-lg ml-2 mr-3" />
                                    <span>My Reviews</span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/serviceAdd"
                                    className="flex items-center hover:bg-[#b3c5ef] hover:text-[#0e1525] py-2 rounded-md transition duration-300 ease-in-out"
                                >
                                    <FaEdit className="text-lg ml-2 mr-3" />
                                    <span>Add Service</span>
                                </Link>
                            </li>
                        </>
                    )}
                    <li>
                        <Link className="flex items-center hover:bg-[#b3c5ef] hover:text-[#0e1525] py-2 rounded-md transition duration-300 ease-in-out">
                            <FaLayerGroup className="text-lg ml-2 mr-3" />
                            <span>Blog</span>
                        </Link>
                    </li>
                </ul>

                {user?.uid ? (
                    <ul className="pt-3 space-y-1 text-sm">
                        <li>
                            <Link
                                onClick={handleLogOut}
                                className="flex items-center hover:bg-[#b3c5ef] hover:text-[#0e1525] py-2 rounded-md transition duration-300 ease-in-out"
                            >
                                <FaDoorOpen className="text-lg ml-2 mr-3" />
                                <span>Log Out</span>
                            </Link>
                        </li>
                    </ul>
                ) : (
                    <ul className="pt-3 space-y-1 text-sm">
                        <li>
                            <Link
                                to="/login"
                                className="flex items-center hover:bg-[#b3c5ef] hover:text-[#0e1525] py-2 rounded-md transition duration-300 ease-in-out"
                            >
                                <FaSignInAlt className="text-lg ml-2 mr-3" />
                                <span>Login</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/signup"
                                className="flex items-center hover:bg-[#b3c5ef] hover:text-[#0e1525] py-2 rounded-md transition duration-300 ease-in-out"
                            >
                                <SiGnuprivacyguard className="text-lg ml-2 mr-3" />
                                <span>Sign Up</span>
                            </Link>
                        </li>
                    </ul>
                )}
            </div>
        </div>
    );
};

export default SideNav;
