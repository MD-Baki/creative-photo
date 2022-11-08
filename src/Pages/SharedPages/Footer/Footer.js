import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

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
                    <div>
                        <div className="grid grid-flow-col gap-4 pt-2 text-lg">
                            <a href="https://www.facebook.com/" target="blanck">
                                <FaFacebookF />
                            </a>
                            <a href="https://www.facebook.com/" target="blanck">
                                <FaTwitter />
                            </a>
                            <a href="https://www.facebook.com/" target="blanck">
                                <FaLinkedinIn />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
