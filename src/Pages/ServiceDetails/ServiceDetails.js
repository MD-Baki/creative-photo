import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import ReviewForm from "./ReviewForm/ReviewForm";
import { AuthContext } from "../Authentication/AuthProvider/AuthProvider";
import ServiceReview from "../Services/ServicesCard/ServiceReview/ServiceReview";
import useTitle from "../../Hooks/useTitle";

const ServiceDetails = () => {
    useTitle("Details");
    const { user } = useContext(AuthContext);
    const { _id, serviceName, servicePhotoURL, servicePrice, rating, details } =
        useLoaderData();

    return (
        <div className="mx-auto w-11/12 lg:w-10/12 pt-24 pb-12">
            <div className="grid xl:grid-cols-2 gap-6 items-center">
                <img
                    src={servicePhotoURL}
                    alt=""
                    className="w-full rounded-lg"
                />
                <div className="text-center mx-auto xl:text-left">
                    <h2 className="text-3xl font-bold pb-5">{serviceName}</h2>
                    <p className="tracking-widest font-light pb-4">{details}</p>
                    <div className="w-1/3 xl:w-2/3 mx-auto xl:ml-0">
                        <div className="flex items-center justify-center border py-3 rounded-md border-[#b3c5ef]">
                            <p>Rating: {rating}</p>
                            <div className="icone pl-3 flex gap-1">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStarHalfAlt />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-12">
                <div className="hading text-center">
                    <h2 className="text-2xl font-bold pb-2">PRICING</h2>
                    <p className="text-sm font-medium tracking-widest">
                        DO YOU WANT ME TO SHOOT YOU?
                    </p>
                    <div className="divider my-0"></div>
                    <p className="font-light max-w-xl mx-auto text-sm pt-2">
                        They say a picture is worth a thousand words. But I
                        wonder, what else do “they” say? In order to find out,
                        I’ve culled together the best photography quotes on the
                        subjects of photographs, cameras, inspiration, and more,
                        as said by some of history’s most famous and talented
                        photographers.
                    </p>
                </div>
                <div className="border border-[#b3c5ef] rounded-lg text-center p-6 mt-6 md:w-5/6 lg:w-[500px] mx-auto">
                    <h2 className="text-xl font-medium">{serviceName}</h2>
                    <div className="divider"></div>
                    <p className="text-6xl font-light">${servicePrice}</p>
                    <div className="requirements font-light py-4 tracking-wide leading-7 text-[#65769e]">
                        <p>Up to 7 Hours</p>
                        <p>100 Images</p>
                        <p>5 Outfit Changes</p>
                        <p>20 Edited Images</p>
                        <p>Hi-res images on cd</p>
                    </div>
                    <button className="btn btn-block btn-outline capitalize">
                        Contact Me
                    </button>
                </div>
            </div>

            <ServiceReview></ServiceReview>

            {user && (
                <div className="review py-16">
                    <div className="text-center">
                        <p className="text-sm font-medium tracking-widest uppercase">
                            Will pass on your valuable review
                        </p>
                        <div className="divider my-0"></div>
                    </div>
                    <ReviewForm _id={_id}></ReviewForm>
                </div>
            )}
        </div>
    );
};

export default ServiceDetails;
