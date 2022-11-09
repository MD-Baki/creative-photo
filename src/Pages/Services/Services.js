import React, { useEffect, useState } from "react";
import useTitle from "../../Hooks/useTitle";
import ServicesBanner from "./ServicesBanner/ServicesBanner";
import ServicesCard from "./ServicesCard/ServicesCard";

const Services = () => {
    const [services, setServices] = useState([]);
    useTitle("Services");

    useEffect(() => {
        fetch("http://localhost:5000/services")
            .then((res) => res.json())
            .then((data) => setServices(data));
    }, []);

    return (
        <div className="mx-auto lg:w-10/12 pt-12">
            <ServicesBanner></ServicesBanner>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 py-14 px-5 lg:px-0">
                {services.map((service) => (
                    <ServicesCard
                        key={service._id}
                        service={service}
                    ></ServicesCard>
                ))}
            </div>
        </div>
    );
};

export default Services;
