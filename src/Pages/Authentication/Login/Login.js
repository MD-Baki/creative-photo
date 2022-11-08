import React, { useContext, useState } from "react";
import loginImg from "../../../assets/login/login.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";
import { FaGoogle, FaGithub } from "react-icons/fa";

const Login = () => {
    const { login, providerLogin } = useContext(AuthContext);
    const [error, setError] = useState("");

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError("");
            })
            .catch((error) => {
                console.error(error);
                setError(error.message);
            });
    };

    const googleProvider = new GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then((result) => {
                const user = result.user;
                console.log(user);
            })
            .catch((err) => console.error(err));
    };

    return (
        <div className="mx-auto w-11/12 lg:w-10/12 grid lg:grid-cols-2 items-center pt-24 pb-10">
            <div>
                <img src={loginImg} alt="" />
            </div>
            <div className="flex-col xl:px-16">
                <div className="w-full shadow-2xl border-2 border-[#b3c5ef] rounded-xl">
                    <div className="text-center pt-4">
                        <h1 className="text-5xl font-bold">Login now</h1>
                    </div>

                    <div className="card-body">
                        <form onSubmit={handleLogin}>
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
                                    required
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
                                    required
                                />
                            </div>
                            <div className="form-control mt-6">
                                <input
                                    type="submit"
                                    value="Sign In"
                                    className="btn capitalize"
                                />
                            </div>
                        </form>
                        <p className="font-bold text-sm text-center text-red-500 pt-3">
                            {error}
                        </p>
                        <div className="divider">OR</div>
                        <div className="grid grid-cols-2 gap-4">
                            <button
                                onClick={handleGoogleSignIn}
                                className="btn btn-block capitalize"
                            >
                                <FaGoogle className="mr-2" />
                                Google
                            </button>
                            <button className="btn btn-block capitalize">
                                <FaGithub className="mr-2" />
                                Github
                            </button>
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
