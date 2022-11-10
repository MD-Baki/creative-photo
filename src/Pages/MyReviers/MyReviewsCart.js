import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaTrashAlt, FaEdit } from "react-icons/fa";

const MyReviewsCart = ({ reviewItem, handleDelete }) => {
    const { _id, userName, photo, rating, review, email, service } = reviewItem;
    const [serviceReview, setServiceReview] = useState({});

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URI}/services/${service}`)
            .then((res) => res.json())
            .then((data) => setServiceReview(data));
    }, [service]);

    return (
        <div className="rounded-md shadow-md border-2 border-[#b3c5ef] border-opacity-10">
            <h2 className="bg-[#b3c5ef] bg-opacity-10 text-center py-3 text-lg font-medium">
                {serviceReview.serviceName}
            </h2>
            <div className="flex justify-between items-center py-3">
                <div>
                    <p className="px-2 overflow-y-auto h-[120px]">{review}</p>
                </div>
                <div className="px-3 flex flex-col gap-3 border-l border-[#b3c5ef] border-opacity-10">
                    <Link to={`/edit/${_id}`} className="btn text-lg">
                        <FaEdit />
                    </Link>
                    <button
                        onClick={() => handleDelete(_id)}
                        className="btn text-lg"
                    >
                        <FaTrashAlt />
                    </button>
                </div>
            </div>
            <div className="bg-[#b3c5ef] bg-opacity-10 p-4 flex gap-4 justify-center">
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
        </div>
    );
};

export default MyReviewsCart;
