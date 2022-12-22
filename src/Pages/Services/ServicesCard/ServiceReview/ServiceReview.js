import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Spinner } from "../../../../components/loader/Spinner";
import empty from "../../../../assets/not found/empty.png";
import { AuthContext } from "../../../Authentication/AuthProvider/AuthProvider";
import ServiceReviewCart from "./ServiceReviewCart";
console.log(process.env.REACT_APP_API_URI);
const ServiceReview = () => {
    const [loading, setLoading] = useState(true);
    const [serviceReview, setServiceReview] = useState([]);
    const { refetchReviews } = useContext(AuthContext);
    const { id } = useParams();

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URI}/servicereview/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setLoading(false);
                setServiceReview(data);
            });
    }, [id, refetchReviews]);

    if (loading) return <Spinner />;

    return (
        <div data-aos="fade-up" data-aos-duration="1500" className="clint pt-6">
            <div className="text-center">
                <p className="text-sm font-medium tracking-widest">
                    WHAT MY CLIENTS SAY
                </p>
                <div className="divider my-0"></div>
            </div>
            {serviceReview.length > 0 ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 pt-8">
                    {serviceReview.map((reviewCart) => (
                        <ServiceReviewCart
                            key={reviewCart._id}
                            reviewCart={reviewCart}
                        ></ServiceReviewCart>
                    ))}
                </div>
            ) : (
                <>
                    <img src={empty} alt="" className="mx-auto" />
                </>
            )}
        </div>
    );
};

export default ServiceReview;
