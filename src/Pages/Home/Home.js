import React from "react";
import AboutMe from "./AboutMe/AboutMe";
import Banner from "./Banner/Banner";

const Home = () => {
    return (
        <div className="mx-auto lg:w-10/12">
            <Banner></Banner>
            <AboutMe></AboutMe>
        </div>
    );
};

export default Home;
