import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";
import SideNav from "./SideNav/SideNav";
import { FaAlignRight, FaTimes, FaUserAlt } from "react-icons/fa";
import "./Header.css";
import { AuthContext } from "../../Authentication/AuthProvider/AuthProvider";
import Profile from "./Profile/Profile";

const Header = () => {
    const { user } = useContext(AuthContext);
    const [open, setOpen] = useState(false);

    return (
        <div className="fixed w-full top-0 z-50">
            <header className="nav_bar bg-[#0e1525] relative">
                <div className="navbar mx-auto w-11/12 lg:w-10/12">
                    <div className="navbar-start">
                        <Link to="/" className="flex items-center">
                            <img
                                src={logo}
                                alt=""
                                className="h-[40px] mx-auto mr-2"
                            />
                            <p className="font-medium pt-1">
                                CREATIVE{" "}
                                <span className="font-light">PHOTO</span>
                            </p>
                        </Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal p-0">
                            <li>
                                <Link to="/">Hone</Link>
                            </li>
                            <li>
                                <Link to="/services">Services</Link>
                            </li>
                            {user && (
                                <>
                                    <li>
                                        <Link>My Reviews</Link>
                                    </li>
                                    <li>
                                        <Link to="/serviceAdd">
                                            Add Service
                                        </Link>
                                    </li>
                                </>
                            )}
                            <li>
                                <Link>Blog</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <div className="hidden lg:block">
                            {user?.uid ? (
                                <div
                                    onClick={() => setOpen(!open)}
                                    className="relative"
                                >
                                    {user?.photoURL ? (
                                        <Link>
                                            <img
                                                title={user?.displayName}
                                                src={user?.photoURL}
                                                alt=""
                                                className="rounded-full h-10 w-10"
                                            />
                                        </Link>
                                    ) : (
                                        <FaUserAlt></FaUserAlt>
                                    )}
                                    <div
                                        className={`absolute z-10 top-full right-0 ${
                                            open ? "block" : "hidden"
                                        }`}
                                    >
                                        <Profile></Profile>
                                    </div>
                                </div>
                            ) : (
                                <>
                                    <Link to="/signup" className="btn">
                                        Sign Up
                                    </Link>
                                    <Link to="/login" className="btn ml-2">
                                        Login
                                    </Link>
                                </>
                            )}
                        </div>

                        <div className="lg:hidden">
                            <button onClick={() => setOpen(!open)}>
                                {open ? (
                                    <FaTimes className="text-xl" />
                                ) : (
                                    <FaAlignRight className="text-lg" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div
                    className={`absolute h-screen lg:hidden ${
                        open ? "left-[0px]" : "left-[-500px]"
                    }`}
                >
                    <SideNav></SideNav>
                </div>
            </header>
        </div>
    );
};

export default Header;
