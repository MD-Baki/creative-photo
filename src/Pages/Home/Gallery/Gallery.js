import React from "react";

const Gallery = () => {
    return (
        <div>
            <section className="pb-16">
                <h2 className="text-3xl font-bold text-center pb-6">
                    My Photography
                </h2>
                <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
                    <img
                        src="https://source.unsplash.com/random/301x301/"
                        alt=""
                        className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 aspect-square"
                    />
                    <img
                        alt=""
                        className="w-full h-full rounded shadow-sm min-h-48"
                        src="https://source.unsplash.com/random/200x200/?0"
                    />
                    <img
                        alt=""
                        className="w-full h-full rounded shadow-sm min-h-48 aspect-square"
                        src="https://source.unsplash.com/random/200x200/?1"
                    />
                    <img
                        alt=""
                        className="w-full h-full rounded shadow-sm min-h-48 aspect-square"
                        src="https://source.unsplash.com/random/200x200/?2"
                    />
                    <img
                        alt=""
                        className="w-full h-full rounded shadow-sm min-h-48 aspect-square"
                        src="https://source.unsplash.com/random/200x200/?3"
                    />
                </div>
            </section>
        </div>
    );
};

export default Gallery;
