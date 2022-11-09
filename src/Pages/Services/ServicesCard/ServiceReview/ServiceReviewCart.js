import React from "react";

const ServiceReviewCart = ({ reviewCart }) => {
    const { _id, userName, photo, rating, review } = reviewCart;

    return (
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
                    {review}
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
                    src={photo}
                    alt=""
                    className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full"
                />
                <p className="text-xl font-semibold leading-tight">
                    {userName}
                </p>
                <p className="text-sm uppercase pt-2">Rating: {rating}</p>
            </div>
        </div>
    );
};

export default ServiceReviewCart;
