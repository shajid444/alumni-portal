import React from "react";

const DiscoverParalympics = () => {
    return (
        <section className="w-full p-8">
            <div className="max-w-7xl mx-auto bg-gray-100 rounded-lg border-2 border-gray-300 flex flex-col md:flex-row items-center">
                <div className="w-full md:w-1/2">
                    {/* Adjusted Image Placeholder */}
                    <div className="w-full h-64 bg-gray-200 flex items-center justify-center overflow-hidden rounded-lg">
                        <img
                            src="https://i.ibb.co.com/8NdtTFJ/zp8irjlrzfu7s2jdault.jpg" // Image URL
                            alt="Paralympics Mascot"
                            className="object-cover w-full h-full"
                        />
                    </div>
                </div>
                <div className="w-full md:w-1/2 p-6 text-center md:text-left">
                    <h2 className="text-3xl font-bold mb-4">DISCOVER THE PARALYMPICS!</h2>
                    <p className="mb-4">Find all the information about the competition.</p>
                    <button className="bg-black text-white px-4 py-2 rounded">Discover Now</button>
                </div>
            </div>
        </section>
    );
};

export default DiscoverParalympics;
