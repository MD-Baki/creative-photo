import React, { useEffect, useState } from "react";

const MyReviewsCart = ({ reviewItem }) => {
    const { _id, userName, photo, rating, review, email, service } = reviewItem;
    const [serviceReview, setServiceReview] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/services/${service}`)
            .then((res) => res.json())
            .then((data) => setServiceReview(data));
    }, [service]);

    return (
        <div className="flex flex-col items-center gap-4 p-6 rounded-md shadow-md border-2 border-[#b3c5ef] border-opacity-10">
            <div className="flex items-center gap-4">
                <img
                    src={photo}
                    alt=""
                    className="w-20 h-20 border border-[#b3c5ef] p-1"
                />
                <div className="leading-7">
                    <h2 className="font-medium">{userName}</h2>
                    <p className="text-sm font-medium">{email}</p>
                    <p className="font-light">
                        Rating: <span className="font-medium">{rating}</span>
                    </p>
                </div>
            </div>
            <div className="divider m-0"></div>
            <h3 className="text-lg font-medium leading-3">
                {serviceReview.serviceName}
            </h3>
            <div className="divider m-0"></div>
            <p className="text-center text-sm font-light">{review}</p>
            <div className="grid grid-cols-2 gap-3">
                <button className="btn btn-block btn-outline">Delete</button>
                <button className="btn btn-block btn-outline">Edit</button>
            </div>
        </div>
    );
};

export default MyReviewsCart;
