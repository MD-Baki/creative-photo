import React, { useContext } from "react";
import { FaUserTie } from "react-icons/fa";
import { AuthContext } from "../../../Authentication/AuthProvider/AuthProvider";

const Profile = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => {})
            .catch((err) => console.error(err));
    };

    return (
        <div>
            <div>
                <div className="w-[250px] p-6 shadow-md rounded-xl border-2 border-[#b3c5ef] bg-[#0e1525] mt-2">
                    {user?.photoURL ? (
                        <img
                            src={user?.photoURL}
                            alt=""
                            className="w-28 h-28 mx-auto rounded-full border-2 border-[#b3c5ef] p-1"
                        />
                    ) : (
                        <div>
                            <FaUserTie className="w-28 h-28 mx-auto rounded-full border-2 border-[#b3c5ef] p-1" />
                        </div>
                    )}
                    <div className="text-center divide-y divide-gray-700">
                        <div className="my-2 space-y-1">
                            <h2 className="text-xl font-semibold">
                                {user?.displayName}
                            </h2>
                            <p className="text-sm">{user?.email}</p>
                        </div>
                        <div className="pt-3">
                            <button
                                onClick={handleLogOut}
                                className="btn btn-block capitalize"
                            >
                                Log Out
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
