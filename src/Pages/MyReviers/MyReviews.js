import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Authentication/AuthProvider/AuthProvider";
import MyReviewsCart from "./MyReviewsCart";
import noData from "../../assets/not found/no-data.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useTitle from "../../Hooks/useTitle";

const MyReviews = () => {
    useTitle("My-Reviews");
    const { user, logOut } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URI}/reviews?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem(
                    "Photographer-token"
                )}`,
            },
        })
            .then((res) => {
                if (res.status === 401 || res.status === 403) {
                    return logOut();
                }
                return res.json();
            })
            .then((data) => setReviews(data));
    }, [user?.email, logOut]);

    const handleDelete = (id) => {
        const proceed = window.confirm(
            "Are you sure, you want to cancle this review"
        );
        if (proceed) {
            fetch(`${process.env.REACT_APP_API_URI}/reviews/${id}`, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        toast.success("Deleted Successfully", {
                            theme: "dark",
                            position: "top-center",
                        });
                        const remaining = reviews.filter(
                            (rev) => rev._id !== id
                        );
                        setReviews(remaining);
                    }
                });
        }
    };

    return (
        <div
            data-aos="zoom-out"
            data-aos-duration="1500"
            className="mx-auto w-11/12 lg:w-10/12 pt-24 pb-14"
        >
            {reviews.length > 0 ? (
                <>
                    <h2 className="text-center text-2xl font-bold">
                        MY Review
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 pt-8">
                        {reviews.map((reviewItem) => (
                            <MyReviewsCart
                                key={reviewItem._id}
                                reviewItem={reviewItem}
                                handleDelete={handleDelete}
                            ></MyReviewsCart>
                        ))}
                    </div>
                </>
            ) : (
                <>
                    <img src={noData} alt="" className="mx-auto" />
                </>
            )}
            <ToastContainer />
        </div>
    );
};

export default MyReviews;
