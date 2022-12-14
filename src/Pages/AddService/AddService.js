import React from "react";
import serviceImg from "../../assets/service/service-img.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useTitle from "../../Hooks/useTitle";

const AddService = () => {
    useTitle("Add-Service");

    const handleAddService = (event) => {
        event.preventDefault();
        const form = event.target;
        const serviceName = form.serviceName.value;
        const servicePrice = form.price.value;
        const rating = form.rating.value;
        const servicePhotoURL = form.servicePhotoURL.value;
        const details = form.details.value;

        const addService = {
            serviceName,
            servicePhotoURL,
            servicePrice,
            rating,
            details,
        };

        fetch(`${process.env.REACT_APP_API_URI}/service`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(addService),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success("Service Add Successfully", {
                        theme: "dark",
                        position: "top-center",
                    });
                    form.reset();
                }
            })
            .catch((err) => console.error(err));
    };

    return (
        <div className="mx-auto w-11/12 lg:w-10/12 pt-20 pb-14">
            <img
                data-aos="flip-right"
                data-aos-duration="1500"
                src={serviceImg}
                alt=""
                className="w-full"
            />

            <h2 className="text-3xl font-bold text-center pt-6">
                Add New Service
            </h2>

            <div
                data-aos="fade-up"
                data-aos-duration="1500"
                className=" bg-[#b3c5ef] bg-opacity-20 p-10 md:p-14 lg:p-20 rounded-lg mt-8"
            >
                <form onSubmit={handleAddService}>
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
                            name="details"
                            className="textarea md:col-span-2 h-60"
                            placeholder="Service Details"
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
            <ToastContainer />
        </div>
    );
};

export default AddService;
