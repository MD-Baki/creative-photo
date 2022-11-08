import React from "react";
import AboutMe from "./AboutMe/AboutMe";
import Banner from "./Banner/Banner";
import Gallery from "./Gallery/Gallery";
import ServicesShortView from "./ServicesShortView/ServicesShortView";

const Home = () => {
    return (
        <div className="mx-auto lg:w-10/12 pt-16">
            <Banner></Banner>
            <AboutMe></AboutMe>
            <Gallery></Gallery>
            <ServicesShortView></ServicesShortView>
        </div>
    );
};

export default Home;
