import React from "react";
import { Link } from "react-router-dom";
import "./SideNav.css";
import {
    FaDoorOpen,
    FaUserTie,
    FaHome,
    FaServicestack,
    FaBlog,
} from "react-icons/fa";

const SideNav = () => {
    return (
        <div className="side-nav h-full p-3 space-y-2 w-60 bg-[#0e1525] z-50">
            <div className="flex items-center p-2 space-x-4">
                <FaUserTie className="text-6xl rounded-full border border-[#b3c5ef] p-2" />
                <div>
                    <h2 className="text-lg font-semibold">Leroy Jenkins</h2>
                </div>
            </div>
            <div className="divide-y divide-gray-700">
                <ul className="pt-2 pb-4 space-y-1 text-sm">
                    <li>
                        <Link className="flex items-center hover:bg-[#b3c5ef] hover:text-[#0e1525] py-2 rounded-md transition duration-300 ease-in-out">
                            <FaHome className="text-lg ml-2 mr-3" />
                            <span>Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link className="flex items-center hover:bg-[#b3c5ef] hover:text-[#0e1525] py-2 rounded-md transition duration-300 ease-in-out">
                            <FaServicestack className="text-lg ml-2 mr-3" />
                            <span>Services</span>
                        </Link>
                    </li>
                    <li>
                        <Link className="flex items-center hover:bg-[#b3c5ef] hover:text-[#0e1525] py-2 rounded-md transition duration-300 ease-in-out">
                            <FaBlog className="text-lg ml-2 mr-3" />
                            <span>Blog</span>
                        </Link>
                    </li>
                </ul>

                <ul className="pt-3 space-y-1 text-sm">
                    <li>
                        <Link className="flex items-center hover:bg-[#b3c5ef] hover:text-[#0e1525] py-2 rounded-md transition duration-300 ease-in-out">
                            <FaDoorOpen className="text-lg ml-2 mr-3" />
                            <span>Log Out</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default SideNav;
