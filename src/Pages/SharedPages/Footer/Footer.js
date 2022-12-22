import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";

const Footer = () => {
    return (
        <footer className="bg-[#0e1525]">
            <div className="footer footer-center py-10">
                <div>
                    <Link>
                        <img src={logo} alt="" className="h-[60px]" />
                    </Link>
                    <p className="font-medium text-lg pt-1">
                        CREATIVE <span className="font-light">PHOTO</span>
                    </p>
                    <p>Copyright © 2022 - All right reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
