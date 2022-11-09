import React from "react";
import { Link } from "react-router-dom";

const ServicesCard = ({ service }) => {
    const { _id, serviceName, servicePhotoURL, servicePrice, rating, details } =
        service;

    return (
        <div className="card p-3 shadow-xl bg-[#b3c5ef] bg-opacity-10">
            <figure>
                <img
                    src={servicePhotoURL}
                    alt=""
                    className="w-full rounded-lg md:h-[200px] xl:h-[300px]"
                />
            </figure>
            <div className="pt-4">
                <h2 className="card-title capitalize">{serviceName}</h2>
                <div className="py-2 text-[#7f8fb6] font-light">
                    {details.length > 150 ? (
                        <p className="text-justify">
                            {details.slice(0, 150) + "..."}
                        </p>
                    ) : (
                        <p className="text-justify">{details}</p>
                    )}
                </div>
                <div className="flex justify-between">
                    <p>
                        Event fee:{" "}
                        <span className="font-medium">${servicePrice}</span>
                    </p>
                    <p>
                        Rating: <span className="font-medium">{rating}</span>
                    </p>
                </div>
                <div className="card-actions pt-2">
                    <Link
                        to={`/service/${_id}`}
                        className="btn btn-block bg-[#0e1525] hover:bg-[#0e1525] "
                    >
                        See Details
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;
