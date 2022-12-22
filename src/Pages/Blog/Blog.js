import React from "react";
import blogImg from "../../assets/blog/blog.png";
import { FaAngleDoubleRight } from "react-icons/fa";
import useTitle from "../../Hooks/useTitle";

const Blog = () => {
    useTitle("Blog");

    return (
        <div className="grid lg:grid-cols-2 gap-6 justify-center items-center mx-auto w-11/12 lg:w-10/12 pt-24 pb-14">
            <div data-aos="zoom-in" data-aos-duration="1500">
                <img src={blogImg} alt="" className="mx-auto" />
            </div>
            <div data-aos="fade-up" data-aos-duration="1500">
                <div className="border border-[#b3c5ef] border-opacity-30 rounded-lg overflow-hidden">
                    <div className="flex gap-2 items-center bg-[#b3c5ef] bg-opacity-10 py-4 px-3">
                        <FaAngleDoubleRight />
                        <h2 className="text-lg font-medium">
                            Difference between SQL and NoSQL
                        </h2>
                    </div>
                    <p className="px-3 py-5 font-light text-[#8593b4]">
                        SQL is the programming language used to interface with
                        relational databases. (Relational databases model data
                        as records in rows and tables with logical links between
                        them). NoSQL is a class of DBMs that are non-relational
                        and generally do not use SQL.
                    </p>
                </div>
                <div className="border border-[#b3c5ef] border-opacity-30 rounded-lg overflow-hidden mt-7">
                    <div className="flex gap-2 items-center bg-[#b3c5ef] bg-opacity-10 py-4 px-3">
                        <FaAngleDoubleRight />
                        <h2 className="text-lg font-medium">
                            What is JWT, and how does it work?
                        </h2>
                    </div>
                    <p className="px-3 py-5 font-light text-[#8593b4]">
                        JWT, or JSON Web Token, is an open standard used to
                        share security information between two parties — a
                        client and a server. Each JWT contains encoded JSON
                        objects, including a set of claims. JWTs are signed
                        using a cryptographic algorithm to ensure that the
                        claims cannot be altered after the token is issued.
                        <br />
                        JWTs differ from other web tokens in that they contain a
                        set of claims. Claims are used to transmit information
                        between two parties. What these claims are depends on
                        the use case at hand. For example, a claim may assert
                        who issued the token, how long it is valid for, or what
                        permissions the client has been granted.
                    </p>
                </div>
                <div className="border border-[#b3c5ef] border-opacity-30 rounded-lg overflow-hidden mt-7">
                    <div className="flex gap-2 items-center bg-[#b3c5ef] bg-opacity-10 py-4 px-3">
                        <FaAngleDoubleRight />
                        <h2 className="text-lg font-medium">
                            What is the difference between javascript and
                            NodeJS?
                        </h2>
                    </div>
                    <p className="px-3 py-5 font-light text-[#8593b4]">
                        JavaScript is a simple programming language that can be
                        used with any browser that has the JavaScript Engine
                        installed. Node.js, on the other hand, is an interpreter
                        or execution environment for the JavaScript programming
                        language. It requires libraries that can be conveniently
                        accessed from JavaScript programming to be more helpful.
                    </p>
                </div>
                <div className="border border-[#b3c5ef] border-opacity-30 rounded-lg overflow-hidden mt-7">
                    <div className="flex gap-2 items-center bg-[#b3c5ef] bg-opacity-10 py-4 px-3">
                        <FaAngleDoubleRight />
                        <h2 className="text-lg font-medium">
                            How does NodeJS handle multiple requests at the same
                            time?
                        </h2>
                    </div>
                    <p className="px-3 py-5 font-light text-[#8593b4]">
                        NodeJS receives multiple client requests and places them
                        into EventQueue. NodeJS is built with the concept of
                        event-driven architecture. NodeJS has its own EventLoop
                        which is an infinite loop that receives requests and
                        processes them. EventLoop is the listener for the
                        EventQueue. If NodeJS can process the request without
                        I/O blocking then the event loop would itself process
                        the request and sends the response back to the client by
                        itself. But, it is possible to process multiple requests
                        parallelly using the NodeJS cluster module or
                        worker_threads module.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;
