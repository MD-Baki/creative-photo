import React, { useContext, useEffect, useState } from "react";
import loginImg from "../../../assets/login/login.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";
import { FaGoogle } from "react-icons/fa";
import useTitle from "../../../Hooks/useTitle";
import { Spinner } from "../../../components/loader/Spinner";
import { toast } from "react-toastify";

const Login = () => {
    const [loading, setLoading] = useState(true);
    const { login, providerLogin } = useContext(AuthContext);
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const location = useLocation();
    useTitle("Login");

    const from = location.state?.from?.pathname || "/";

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                toast.success("Login Successfully");

                const currentUser = {
                    email: user.email,
                };
                console.log(currentUser);

                form.reset();
                setError("");

                fetch(`${process.env.REACT_APP_API_URI}/jwt`, {
                    method: "POST",
                    headers: {
                        "content-type": "application/json",
                    },
                    body: JSON.stringify(currentUser),
                })
                    .then((res) => res.json())
                    .then((data) => {
                        console.log({ data });
                        localStorage.setItem("Photographer-token", data.token);
                        navigate(from, { replace: true });
                    });
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

                const currentUser = {
                    email: user.email,
                };

                fetch(`${process.env.REACT_APP_API_URI}/jwt`, {
                    method: "POST",
                    headers: {
                        "content-type": "application/json",
                    },
                    body: JSON.stringify(currentUser),
                })
                    .then((res) => res.json())
                    .then((data) => {
                        console.log({ data });
                        localStorage.setItem("Photographer-token", data.token);
                        navigate(from, { replace: true });
                        toast.success("User Login Successfully");
                    });
            })
            .catch((err) => console.error(err));
    };

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 500);
    }, []);

    if (loading) return <Spinner />;

    return (
        <div className="mx-auto w-11/12 lg:w-10/12 grid lg:grid-cols-2 items-center pt-24 pb-10">
            <div data-aos="zoom-in" data-aos-duration="1500">
                <img src={loginImg} alt="" />
            </div>
            <div className="flex-col xl:px-16">
                <div
                    data-aos="zoom-out"
                    data-aos-duration="1500"
                    className="w-full shadow-2xl border-2 border-[#b3c5ef] rounded-xl"
                >
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
                        <div>
                            <button
                                onClick={handleGoogleSignIn}
                                className="btn btn-block capitalize"
                            >
                                <FaGoogle className="mr-2" />
                                Google
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
