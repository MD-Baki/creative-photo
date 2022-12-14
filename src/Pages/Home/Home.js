import React from "react";
import useTitle from "../../Hooks/useTitle";
import AboutMe from "./AboutMe/AboutMe";
import Banner from "./Banner/Banner";
import Contact from "./Contact/Contact";
import Gallery from "./Gallery/Gallery";
import ServicesShortView from "./ServicesShortView/ServicesShortView";

const Home = () => {
    useTitle("Home");

    return (
        <div className="mx-auto lg:w-10/12 pt-16">
            <Banner></Banner>
            <AboutMe></AboutMe>
            <Gallery></Gallery>
            <ServicesShortView></ServicesShortView>
            <Contact />
        </div>
    );
};

export default Home;
