import React from "react";
import login from "../../../assets/login/login.png";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="mx-auto w-11/12 lg:w-10/12 grid lg:grid-cols-2 items-center py-10">
            <div>
                <img src={login} alt="" />
            </div>
            <div className="flex-col">
                <div className="w-full shadow-2xl border-2 border-[#b3c5ef] rounded-xl">
                    <div className="text-center pt-4">
                        <h1 className="text-5xl font-bold">Login now</h1>
                    </div>

                    <div className="card-body">
                        <form>
                            <div className="form-control mb-2">
                                <label className="label">
                                    <span className="label-text">
                                        Your Email
                                    </span>
                                </label>
                                <input
                                    name="email"
                                    type="email"
                                    placeholder="Email"
                                    className="input input-bordered"
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">
                                        Your Password
                                    </span>
                                </label>
                                <input
                                    name="password"
                                    type="password"
                                    placeholder="Password"
                                    className="input input-bordered"
                                />
                                <label className="label">
                                    <Link className="label-text-alt link link-hover">
                                        Forgot password?
                                    </Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input
                                    type="submit"
                                    value="Sign In"
                                    className="btn capitalize"
                                />
                            </div>
                        </form>
                        <div className="divider">OR</div>
                        <div className="grid grid-cols-2 gap-4">
                            <button className="btn btn-block">Google</button>
                            <button className="btn btn-block">Github</button>
                        </div>
                        <p className="text-center pt-3">
                            Don't have an account?
                            <Link
                                to="/signup"
                                className="ml-2 link link-hover font-bold"
                            >
                                Sign Up
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
