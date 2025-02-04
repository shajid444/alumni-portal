import React from "react";
import { Link } from "react-router-dom";

const ParisHighlightSection = () => {
    return (
        <div className="bg-gradient-to-r from-purple-800 to-pink-500 p-8 rounded-lg flex flex-col md:flex-row  justify-between shadow-md">
            {/* Text Content */}
            <div className="md:w-1/2 text-white">
                <h2 className="text-4xl font-bold mb-4">The Best of Paris 2024</h2>
                <p className="text-lg mb-6">
                    The best moments, all in one place. Get unlimited access to exclusive
                    content, highlights, and replays with a free Olympic Membership!
                </p>
                <Link to='/signUp' className="flex w-72 items-center px-6 py-3 bg-white text-purple-800 font-bold rounded-lg shadow hover:bg-gray-200">
                    Sign up for Free
                    <span className="ml-2 text-xl">&rarr;</span>
                </Link>
            </div>

            {/* Image */}
            <div className="md:w-1/2 mt-6 md:mt-0">
                <img
                    src="https://i.ibb.co.com/M8Z5XWN/Judo-Competition-at-Arc-de-Triomphe.jpg" 
                    alt="Paris 2024 Highlight"
                    className="rounded-lg shadow-lg"
                />
            </div>
        </div>
    );
};

export default ParisHighlightSection;
