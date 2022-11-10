import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ServicesCard from "../../Services/ServicesCard/ServicesCard";

const ServicesShortView = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URI}/services?limit=3`)
            .then((res) => res.json())
            .then((data) => setServices(data));
    }, []);

    return (
        <div className="pb-16">
            <h2 className="text-3xl font-bold text-center pb-8">My Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6  px-5 lg:px-0">
                {services.map((service) => (
                    <ServicesCard
                        key={service._id}
                        service={service}
                    ></ServicesCard>
                ))}
            </div>
            <div className="text-center pt-8">
                <Link to="/services" className="btn btn-outline px-10">
                    See All Services
                </Link>
            </div>
        </div>
    );
};

export default ServicesShortView;
