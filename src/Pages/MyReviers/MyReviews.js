import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Authentication/AuthProvider/AuthProvider";
import MyReviewsCart from "./MyReviewsCart";

const MyReviews = () => {
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then((res) => res.json())
            .then((data) => setReviews(data));
    }, [user?.email]);

    return (
        <div className="mx-auto w-11/12 lg:w-10/12 pt-24 pb-14">
            <h2>MY Review {reviews.length}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 pt-8">
                {reviews.map((reviewItem) => (
                    <MyReviewsCart
                        key={reviewItem._id}
                        reviewItem={reviewItem}
                    ></MyReviewsCart>
                ))}
            </div>
        </div>
    );
};

export default MyReviews;
