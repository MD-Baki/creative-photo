import React from "react";
import aboutImg from "../../../assets/about/about-img.png";
import { Link } from "react-router-dom";

const AboutMe = () => {
    return (
        <section className="py-16">
            <div className="flex flex-col justify-center px-6 mx-auto lg:flex-row lg:justify-between items-center">
                <div className="">
                    <img
                        src={aboutImg}
                        alt=""
                        className="object-contain bg-[#b3c5ef] bg-opacity-10 rounded-xl"
                    />
                </div>
                <div className="px-6 text-center pt-8 lg:pt-0 lg:text-left">
                    <h4 className="uppercase text-md font-light">About Me</h4>
                    <h2 className="text-xl font-bold pt-2 pb-6 max-w-lg">
                        I'm MD Abdulla, a photographer. My passion is taking
                        photos of the most stunning architecture around the
                        world.
                    </h2>
                    <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                        <Link
                            rel="noopener noreferrer"
                            href="#"
                            className="px-8 py-3 text-lg font-semibold border border-[#b3c5ef] rounded-md"
                        >
                            My Services
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
