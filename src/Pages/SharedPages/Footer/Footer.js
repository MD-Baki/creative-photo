import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="p-10 bg-[#0e1525]">
            <div className="mx-auto w-11/12 lg:w-10/12 flex flex-wrap justify-between">
                <div>
                    <Link>
                        <img src={logo} alt="" className="h-[60px]" />
                    </Link>
                    <p>
                        ACME Industries Ltd.
                        <br />
                        Providing reliable tech since 1992
                    </p>
                </div>
                <div>
                    <span className="footer-title">Social</span>
                    <div className="grid grid-flow-col gap-4 text-lg mt-2">
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
        </footer>
    );
};

export default Footer;
