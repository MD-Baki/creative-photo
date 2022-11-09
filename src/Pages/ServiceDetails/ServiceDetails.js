import React from "react";
import { useLoaderData } from "react-router-dom";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import ReviewForm from "./ReviewForm/ReviewForm";

const ServiceDetails = () => {
    const { serviceName, servicePhotoURL, servicePrice, rating, details } =
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
            <div className="clint pt-6">
                <div className="text-center">
                    <p className="text-sm font-medium tracking-widest">
                        WHAT MY CLIENTS SAY
                    </p>
                    <div className="divider my-0"></div>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 pt-8">
                    <div className="border-2 border-[#b3c5ef] border-opacity-20 rounded-lg flex flex-col shadow-lg h-fit">
                        <div className="px-4 pt-5 pb-12 rounded-t-lg">
                            <p className="relative px-6 py-1 text-lg italic text-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                    fill="currentColor"
                                    className="w-8 h-8"
                                >
                                    <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                                    <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                                </svg>
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Voluptatibus quibusdam,
                                eligendi exercitationem molestias possimus
                                facere.
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                    fill="currentColor"
                                    className="absolute right-0 w-8 h-8"
                                >
                                    <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                                    <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                                </svg>
                            </p>
                        </div>
                        <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-[#b3c5ef] bg-opacity-10">
                            <img
                                src="https://source.unsplash.com/50x50/?portrait?1"
                                alt=""
                                className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full"
                            />
                            <p className="text-xl font-semibold leading-tight">
                                Distinctio Animi
                            </p>
                            <p className="text-sm uppercase">Aliquam illum</p>
                        </div>
                    </div>
                    <div className="border-2 border-[#b3c5ef] border-opacity-20 rounded-lg flex flex-col shadow-lg h-fit">
                        <div className="px-4 pt-5 pb-12 rounded-t-lg">
                            <p className="relative px-6 py-1 text-lg italic text-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                    fill="currentColor"
                                    className="w-8 h-8"
                                >
                                    <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                                    <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                                </svg>
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Voluptatibus quibusdam,
                                eligendi exercitationem molestias possimus
                                facere.
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                    fill="currentColor"
                                    className="absolute right-0 w-8 h-8"
                                >
                                    <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                                    <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                                </svg>
                            </p>
                        </div>
                        <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-[#b3c5ef] bg-opacity-10">
                            <img
                                src="https://source.unsplash.com/50x50/?portrait?1"
                                alt=""
                                className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full"
                            />
                            <p className="text-xl font-semibold leading-tight">
                                Distinctio Animi
                            </p>
                            <p className="text-sm uppercase">Aliquam illum</p>
                        </div>
                    </div>
                    <div className="border-2 border-[#b3c5ef] border-opacity-20 rounded-lg flex flex-col shadow-lg h-fit">
                        <div className="px-4 pt-5 pb-12 rounded-t-lg">
                            <p className="relative px-6 py-1 text-lg italic text-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                    fill="currentColor"
                                    className="w-8 h-8"
                                >
                                    <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                                    <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                                </svg>
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Voluptatibus quibusdam,
                                eligendi exercitationem molestias possimus
                                facere.
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                    fill="currentColor"
                                    className="absolute right-0 w-8 h-8"
                                >
                                    <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                                    <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                                </svg>
                            </p>
                        </div>
                        <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-[#b3c5ef] bg-opacity-10">
                            <img
                                src="https://source.unsplash.com/50x50/?portrait?1"
                                alt=""
                                className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full"
                            />
                            <p className="text-xl font-semibold leading-tight">
                                Distinctio Animi
                            </p>
                            <p className="text-sm uppercase">Aliquam illum</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="review py-16">
                <div className="text-center">
                    <p className="text-sm font-medium tracking-widest uppercase">
                        Will pass on your valuable review
                    </p>
                    <div className="divider my-0"></div>
                </div>
                <ReviewForm></ReviewForm>
            </div>
        </div>
    );
};

export default ServiceDetails;
