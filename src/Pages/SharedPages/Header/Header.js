import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";
import SideNav from "./SideNav/SideNav";
import { FaAlignRight, FaTimes } from "react-icons/fa";
import "./Header.css";

const Header = () => {
    const [open, setOpen] = useState(false);

    return (
        <header className="nav_bar bg-[#0e1525] relative z-40">
            <div className="navbar mx-auto w-11/12 lg:w-10/12">
                <div className="navbar-start">
                    <Link className="">
                        <img src={logo} alt="" className="h-[60px]" />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li>
                            <Link>Hone</Link>
                        </li>
                        <li>
                            <Link>Services</Link>
                        </li>
                        <li>
                            <Link>Blog</Link>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="hidden lg:block">
                        <Link to="/login" className="btn">
                            Login
                        </Link>
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
    );
};

export default Header;
