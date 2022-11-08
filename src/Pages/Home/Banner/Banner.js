import React from "react";
import img1 from "../../../assets/banner/banner-1.jpg";

const Banner = () => {
    return (
        <div
            className="hero h-[550px] lg:rounded-xl mt-5"
            style={{
                backgroundImage: `url(${img1})`,
            }}
        >
            <div className="hero-overlay bg-black bg-opacity-60 lg:rounded-xl"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                    <p className="mb-5">
                        A good snapshot keeps a moment that s gone from running
                        away.
                    </p>
                    <button className="btn btn-outline">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
