import React from "react";

const ReviewForm = () => {
    return (
        <div className=" bg-[#b3c5ef] bg-opacity-20 p-10 md:p-14 lg:p-20 rounded-lg mt-8">
            <form>
                <div className="grid xl:grid-cols-2 gap-6">
                    <input
                        name="name"
                        type="text"
                        placeholder="Your Name"
                        className="input w-full"
                        required
                    />
                    <input
                        name="email"
                        type="email"
                        placeholder="Your Email"
                        className="input w-full"
                        required
                    />
                    <textarea
                        name="review"
                        className="textarea h-60 xl:col-span-2"
                        placeholder="Review"
                        required
                    ></textarea>
                </div>
                <input
                    type="submit"
                    value="Add Service"
                    className="mt-8 btn btn-block capitalize bg-[#0e1525] hover:bg-[#0e1525] border-0"
                />
            </form>
        </div>
    );
};

export default ReviewForm;
// onSubmit={handleAddService}
