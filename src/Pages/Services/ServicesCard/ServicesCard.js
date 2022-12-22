import React from "react";
import { Link } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const ServicesCard = ({ service }) => {
    const { _id, serviceName, servicePhotoURL, servicePrice, rating, details } =
        service;

    return (
        <div
            data-aos="fade-up"
            data-aos-duration="1500"
            className="card p-3 shadow-xl bg-[#b3c5ef] bg-opacity-10"
        >
            <figure>
                <PhotoProvider>
                    <PhotoView src={servicePhotoURL}>
                        <img
                            src={servicePhotoURL}
                            style={{ objectFit: "cover" }}
                            alt=""
                            className="w-full rounded-lg md:h-[200px] xl:h-[300px]"
                        />
                    </PhotoView>
                </PhotoProvider>
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
                <div className="flex items-center">
                    <p className="font-medium">{rating}</p>
                    <div className="icone pl-2 flex gap-1 text-sm">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStarHalfAlt />
                    </div>
                </div>
                <p className="text-2xl lg:text-3xl font-medium pb-3 pt-2">
                    ${servicePrice}
                </p>
                <div className="card-actions">
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
