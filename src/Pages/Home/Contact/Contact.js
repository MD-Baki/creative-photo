import React from "react";
import { FiPhone, FiMessageSquare, FiMapPin, FiLinkedin } from "react-icons/fi";
import { toast } from "react-toastify";

const Contact = () => {
    const handleContact = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const message = form.message.value;

        const contactForm = {
            name,
            email,
            message,
        };
        if (contactForm) {
            console.log(contactForm);
            form.reset();
            toast.success("Message Send Successfully");
        }
    };

    return (
        <div className="pb-16 px-5 lg:px-0">
            <h2 className="text-3xl font-bold text-center pb-10 uppercase">
                Contact Me
            </h2>
            <div data-aos="fade-up" data-aos-duration="1500">
                <h4 className="text-sm font-bold tracking-[.25em] border-b border-[#b3c5ef] border-opacity-10 pl-3 pb-3">
                    REACH ME
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center font-light">
                    <a href="mailto: bakimd77@gmail.com" className="py-5">
                        <FiMessageSquare className="text-4xl mx-auto mb-4" />
                        <span>bakimd77@gmail.com</span>
                    </a>
                    <a href="tel:+8801788521836" className="py-5">
                        <FiPhone className="text-4xl mx-auto mb-4" />
                        <span>Tel : +880 1788521836</span>
                    </a>
                    <a
                        href="https://goo.gl/maps/ey1bZEAdgA1Z1Yx56"
                        target="blank"
                        className="py-5"
                    >
                        <FiMapPin className="text-4xl mx-auto mb-4" />
                        <span>Agrabad, Chittagong, Bangladesh</span>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/md-baki/"
                        className="py-5"
                    >
                        <FiLinkedin className="text-4xl mx-auto mb-4" />
                        <span>MD Abdulla Hale Baki</span>
                    </a>
                </div>
            </div>
            <div data-aos="fade-down" data-aos-duration="1500">
                <h4 className="text-sm font-bold tracking-[.25em] border-b border-[#b3c5ef] border-opacity-10 pl-3 pb-3 pt-8">
                    OR MAIL ME!
                </h4>

                <form
                    onSubmit={handleContact}
                    className="grid md:grid-cols-2 gap-8 pt-8"
                >
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            name="name"
                            type="text"
                            required
                            className="input input-bordered rounded border-2"
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            name="email"
                            type="email"
                            required
                            className="input input-bordered rounded border-2"
                        />
                    </div>
                    <div className="form-control md:col-span-2">
                        <label className="label">
                            <span className="label-text">Message</span>
                        </label>
                        <textarea
                            name="message"
                            required
                            className="textarea textarea-bordered rounded border-2 h-40"
                        ></textarea>
                    </div>
                    <input
                        type="submit"
                        value="Send Message"
                        className="md:col-span-2 btn w-1/3 mx-auto"
                    />
                </form>
            </div>
        </div>
    );
};

export default Contact;
