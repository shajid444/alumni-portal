import React, { useState } from "react";

const HighlightsSection = () => {
    const highlights = [
        {
            id: 1,
            image: "https://i.ibb.co.com/ZdwJD79/Focused-Velocity-Open-Water-Swimming-Challenge.jpg",
            category: "Swimming",
            title: "Summer McIntosh (CAN) | Swimming | Athlete Profile",
        },
        {
            id: 2,
            image: "https://i.ibb.co.com/Q8dWq5n/Female-Athlete-Running-in-Paris.jpg",
            category: "Athletics",
            title: "Women's Marathon | Athletics | Olympic Games Paris 2024",
        },
        {
            id: 3,
            image: "https://i.ibb.co.com/X7WsrkJ/Aqua-Dynamics-The-Competitive-Swimmer-in-Motion.jpg",
            category: "Swimming",
            title:
                "Men's 200m Breaststroke - Final | Swimming | Olympic Games Paris 2024",
        },
        {
            id: 4,
            image: "https://via.placeholder.com/300x200",
            category: "Basketball",
            title: "Men's Basketball Final | Olympic Games Paris 2024",
        },
        {
            id: 5,
            image: "https://via.placeholder.com/300x200",
            category: "Tennis",
            title: "Women's Singles Final | Olympic Games Paris 2024",
        },
    ];

    // Pagination state
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3;

    // Calculate the indexes for slicing the data
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = highlights.slice(indexOfFirstItem, indexOfLastItem);

    // Handle Next and Previous
    const totalPages = Math.ceil(highlights.length / itemsPerPage);

    const handleNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevious = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div className="p-6 bg-gray-100">
            {/* Header */}
            <div className="flex justify-between items-center mb-2">
                <h2 className="text-3xl font-extrabold">Highlights & Replays</h2>
                <a
                    href="#"
                    className="text-sm font-semibold text-gray-600 hover:underline"
                >
                    View All
                </a>
            </div>
            <div className="border h-0 border-black mb-4"></div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {currentItems.map((highlight) => (
                    <div
                        key={highlight.id}
                        className="bg-white rounded-lg overflow-hidden shadow-md group"
                    >
                        {/* Image with hover zoom */}
                        <div className="relative h-48 overflow-hidden">
                            <img
                                src={highlight.image}
                                alt={highlight.title}
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <span className="text-white text-lg font-bold">▶</span>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-4">
                            <span className="text-xs text-gray-500">{highlight.category}</span>
                            <h3 className="text-sm font-semibold mt-2 text-gray-700">
                                {highlight.title}
                            </h3>
                        </div>
                    </div>
                ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center mt-6 space-x-4">
                <button
                    onClick={handlePrevious}
                    disabled={currentPage === 1}
                    className={`text-xl font-bold ${currentPage === 1
                            ? "text-gray-300 cursor-not-allowed"
                            : "text-gray-500 hover:text-gray-800"
                        }`}
                >
                    &lt;
                </button>
                <span className="text-sm text-gray-600">
                    {currentPage}/{totalPages}
                </span>
                <button
                    onClick={handleNext}
                    disabled={currentPage === totalPages}
                    className={`text-xl font-bold ${currentPage === totalPages
                            ? "text-gray-300 cursor-not-allowed"
                            : "text-gray-500 hover:text-gray-800"
                        }`}
                >
                    &gt;
                </button>
            </div>
        </div>
    );
};

export default HighlightsSection;
