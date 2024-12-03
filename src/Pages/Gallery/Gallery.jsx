
// https://i.ibb.co.com/Qr5939W/1.jpg
// https://i.ibb.co.com/6WCHZ6m/2.jpg

import React, { useState } from "react";

const Gallery = () => {
    // Image array - replace with your actual image URLs
    const images = [
        {
            src: "https://i.ibb.co.com/Qr5939W/1.jpg",
            alt: "Event 1",
        },
        {
            src: "https://i.ibb.co.com/6WCHZ6m/2.jpg",
            alt: "Event 2",
        },
        {
            src: "https://i.ibb.co.com/Ttmq5bb/3.jpg",
            alt: "Event 3",
        },
        {
            src: "https://i.ibb.co.com/crb2tpS/4.jpg",
            alt: "Event 4",
        },
    ];

    // State for tracking the current image index
    const [startIndex, setStartIndex] = useState(0);

    // Calculate the images to display based on the current index
    const visibleImages = images.slice(startIndex, startIndex + 2);

    // Handler for navigating left
    const handlePrev = () => {
        setStartIndex((prev) => (prev - 2 < 0 ? images.length - 2 : prev - 2));
    };

    // Handler for navigating right
    const handleNext = () => {
        setStartIndex((prev) => (prev + 2 >= images.length ? 0 : prev + 2));
    };

    return (
        <section className="bg-white py-16">
            <div className="max-w-7xl mx-auto px-6">
                {/* Title */}
                <div className="text-center mb-8">
                    <span className="block text-purple-600 uppercase tracking-wide font-semibold">
                        Gallery
                    </span>
                    <h2 className="text-4xl font-bold text-purple-800">Image Gallery</h2>
                    <p className="mt-4 text-gray-600">
                        Capturing Memorable Moments: Our Alumni & Events in Pictures
                    </p>
                </div>

                {/* Image Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {visibleImages.map((image, index) => (
                        <div key={index} className="overflow-hidden rounded-lg shadow-lg">
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
                            />
                        </div>
                    ))}
                </div>

                {/* Navigation Buttons */}
                <div className="mt-8 flex justify-center gap-4">
                    <button
                        onClick={handlePrev}
                        className="p-3 bg-purple-100 text-purple-600 rounded-full hover:bg-purple-600 hover:text-white transition"
                    >
                        ←
                    </button>
                    <button
                        onClick={handleNext}
                        className="p-3 bg-purple-100 text-purple-600 rounded-full hover:bg-purple-600 hover:text-white transition"
                    >
                        →
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Gallery;

