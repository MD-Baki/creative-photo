import React, { useContext } from "react";
import login from "../../../assets/login/login.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";

const SignUp = () => {
    const { createUser, updateUserProfile, providerLogin } =
        useContext(AuthContext);

    const handleSignUp = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then((result) => {
                const user = result.user;
                handleProfile(name, photoURL);
                console.log(user);
                form.reset();
            })
            .catch((error) => console.error(error));
    };

    const handleProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL,
        };
        updateUserProfile(profile)
            .then(() => {})
            .catch((err) => console.error(err));
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
        <div className="mx-auto w-11/12 lg:w-10/12 pt-24 grid lg:grid-cols-2 items-center pb-10">
            <div>
                <img src={login} alt="" />
            </div>
            <div className="flex-col xl:px-16">
                <div className="w-full shadow-2xl border-2 border-[#b3c5ef] rounded-xl">
                    <div className="text-center pt-4">
                        <h1 className="text-5xl font-bold">Sign Up</h1>
                    </div>

                    <div className="card-body">
                        <form onSubmit={handleSignUp}>
                            <div className="form-control mb-2">
                                <label className="label">
                                    <span className="label-text">
                                        Your Name
                                    </span>
                                </label>
                                <input
                                    name="name"
                                    type="text"
                                    placeholder="Name"
                                    className="input input-bordered"
                                    required
                                />
                            </div>
                            <div className="form-control mb-2">
                                <label className="label">
                                    <span className="label-text">
                                        Your Photo URL
                                    </span>
                                </label>
                                <input
                                    name="photoURL"
                                    type="text"
                                    placeholder="PhotoURL"
                                    className="input input-bordered"
                                    required
                                />
                            </div>
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
                        <div className="divider">OR</div>
                        <div className="grid grid-cols-2 gap-4">
                            <button
                                onClick={handleGoogleSignIn}
                                className="btn btn-block capitalize"
                            >
                                Google
                            </button>
                            <button className="btn btn-block capitalize">
                                Github
                            </button>
                        </div>
                        <p className="text-center pt-3">
                            Have an account?
                            <Link
                                to="/login"
                                className="ml-2 link link-hover font-bold"
                            >
                                Login
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
