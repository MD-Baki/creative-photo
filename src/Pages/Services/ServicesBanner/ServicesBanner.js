import React from "react";
import servicesBanner from "../../../assets/service/services-banner.jpg";

const ServicesBanner = () => {
    return (
        <div
            className="hero h-[300px] lg:rounded-xl mt-5"
            style={{
                backgroundImage: `url(${servicesBanner})`,
            }}
        >
            <div className="hero-overlay bg-black bg-opacity-60 lg:rounded-xl"></div>
            <div className="hero-content">
                <div className="">
                    <h1 className="mb-5 text-5xl font-bold">All Services</h1>
                </div>
            </div>
        </div>
    );
};

export default ServicesBanner;
