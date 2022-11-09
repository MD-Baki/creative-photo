import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ReviewEdit = () => {
    const editReview = useLoaderData();
    const [review, setReview] = useState(editReview);

    const handleEditReview = (event) => {
        event.preventDefault();

        fetch(`http://localhost:5000/reviews/${editReview._id}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(review),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount > 0) {
                    toast.success("Edited Successfully", {
                        theme: "dark",
                        position: "top-center",
                    });
                    console.log(data);
                }
            });
    };

    const handleChange = (event) => {
        const value = event.target.value;
        const fieldName = event.target.name;
        const newReview = { ...review };
        newReview[fieldName] = value;
        setReview(newReview);
    };

    return (
        <div className="w-11/12 md:w-10/12 lg:w-9/12 mx-auto bg-[#b3c5ef] bg-opacity-20 p-10 md:p-14 lg:p-20 rounded-lg mt-8">
            <h2 className="text-center text-2xl font-medium">Edit Review</h2>
            <div className="divider"></div>
            <form onSubmit={handleEditReview}>
                <div className="grid gap-6">
                    <input
                        onChange={handleChange}
                        defaultValue={editReview.rating}
                        name="rating"
                        type="text"
                        placeholder="Rating"
                        className="input w-full"
                        required
                    />
                    <textarea
                        onChange={handleChange}
                        defaultValue={editReview.review}
                        name="review"
                        className="textarea h-40"
                        placeholder="Review"
                        required
                    ></textarea>
                </div>
                <div className="grid grid-cols-2 gap-6">
                    <Link
                        to="/reviews"
                        className="mt-8 btn btn-block capitalize bg-[#0e1525] hover:bg-[#0e1525] border-0"
                    >
                        Back to review
                    </Link>
                    <input
                        type="submit"
                        value="Edit Review"
                        className="mt-8 btn btn-block capitalize bg-[#0e1525] hover:bg-[#0e1525] border-0"
                    />
                </div>
            </form>
            <div className="divider"></div>
            <ToastContainer />
        </div>
    );
};

export default ReviewEdit;
