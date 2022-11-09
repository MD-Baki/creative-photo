import React, { useEffect, useState } from "react";
import ServiceReviewCart from "./ServiceReviewCart";

const ServiceReview = () => {
    const [serviceReview, setServiceReview] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/servicereview")
            .then((res) => res.json())
            .then((data) => setServiceReview(data));
    }, []);

    return (
        <div className="clint pt-6">
            <div className="text-center">
                <p className="text-sm font-medium tracking-widest">
                    WHAT MY CLIENTS SAY
                </p>
                <div className="divider my-0"></div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 pt-8">
                {serviceReview.map((reviewCart) => (
                    <ServiceReviewCart
                        key={reviewCart._id}
                        reviewCart={reviewCart}
                    ></ServiceReviewCart>
                ))}
            </div>
        </div>
    );
};

export default ServiceReview;
