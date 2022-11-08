import React from "react";
import serviceImg from "../../assets/service/service-img.png";

const AddService = () => {
    return (
        <div className="mx-auto w-11/12 lg:w-10/12 pt-20 pb-14">
            <img src={serviceImg} alt="" className="w-full" />

            <div className=" bg-[#b3c5ef] bg-opacity-40 p-10 md:p-14 lg:p-20 rounded-lg mt-8">
                <form>
                    <div className="grid md:grid-cols-2 gap-6">
                        <input
                            name="serviceName"
                            type="text"
                            placeholder="Service Name"
                            className="input w-full md:col-span-2"
                            required
                        />
                        <input
                            name="price"
                            type="number"
                            placeholder="Service Price"
                            className="input w-full"
                            required
                        />
                        <input
                            name="rating"
                            type="text"
                            placeholder="Service Rating"
                            className="input w-full"
                            required
                        />
                        <input
                            name="servicePhotoURL"
                            type="text"
                            placeholder="Service Photo URL"
                            className="input w-full md:col-span-2"
                            required
                        />
                        <textarea
                            name="message"
                            className="textarea md:col-span-2 h-60"
                            placeholder="Service Details"
                            required
                        ></textarea>
                    </div>
                    <input
                        type="submit"
                        value="Order Confirm"
                        className="mt-8 btn btn-block capitalize btn-info"
                    />
                </form>
            </div>
        </div>
    );
};

export default AddService;
