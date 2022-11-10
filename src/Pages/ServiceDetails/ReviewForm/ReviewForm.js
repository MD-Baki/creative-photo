import React, { useContext } from "react";
import { AuthContext } from "../../Authentication/AuthProvider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ReviewForm = ({ _id }) => {
    const { user, refetchReviews, setRefetchReviews } = useContext(AuthContext);

    const handleAddReview = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = user?.displayName || "unregistered";
        const photo = user?.photoURL;
        const email = user?.email || "unregistered";
        const rating = form.rating.value;
        const review = form.review.value;

        const reviews = {
            service: _id,
            userName: name,
            photo,
            email,
            rating,
            review,
        };
        fetch(`${process.env.REACT_APP_API_URI}/reviews`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(reviews),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.acknowledged) {
                    toast.success("Review Add Successfully", {
                        theme: "dark",
                        position: "top-center",
                    });
                    form.reset();
                    setRefetchReviews(!refetchReviews);
                }
            })
            .catch((err) => console.error(err));
    };

    return (
        <div className=" bg-[#b3c5ef] bg-opacity-20 p-10 md:p-14 lg:p-20 rounded-lg mt-8">
            <form onSubmit={handleAddReview}>
                <div className="grid xl:grid-cols-2 gap-6">
                    <input
                        name="name"
                        type="text"
                        placeholder="Your Name"
                        className="input w-full"
                        defaultValue={user?.displayName}
                        readOnly
                    />
                    <input
                        name="rating"
                        type="text"
                        placeholder="Rating"
                        className="input w-full"
                        required
                    />
                    <input
                        name="email"
                        type="email"
                        placeholder="Your Email"
                        className="input w-full md:col-span-2"
                        defaultValue={user?.email}
                        readOnly
                    />
                    <textarea
                        name="review"
                        className="textarea h-40 md:col-span-2"
                        placeholder="Review"
                        required
                    ></textarea>
                </div>
                <input
                    type="submit"
                    value="Add Review"
                    className="mt-8 btn btn-block capitalize bg-[#0e1525] hover:bg-[#0e1525] border-0"
                />
            </form>
            <ToastContainer />
        </div>
    );
};

export default ReviewForm;
