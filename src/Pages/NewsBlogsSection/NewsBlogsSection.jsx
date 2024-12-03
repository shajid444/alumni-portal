import React from "react";
import { Link } from "react-router-dom";

const NewsBlogsSection = () => {
    const blogs = [
        {
            id: 1,
            date: "Jun 11, 2024",
            title: "Elevate Your Career: Essential Professional Development",
            category: "Professional Development Resources",
            image: "https://i.ibb.co.com/Z6DyxM4/9961718053217.jpg", // Replace with your image URLs
        },
        {
            id: 2,
            date: "Jun 11, 2024",
            title: "5 Essential Career Development Tips for Freshers",
            category: "Career Development Tips",
            image: "https://i.ibb.co.com/XXMtzGf/9851718052422.jpg", // Replace with your image URLs
        },
        {
            id: 3,
            date: "Jun 11, 2024",
            title: "Mentorship's Game-Changing Power to Discover Success!",
            category: "Mentorship Programs",
            image: "https://i.ibb.co.com/JkpNLGK/3111718052122.jpg", // Replace with your image URLs
        },
    ];

    return (
        <div className="bg-gray-50 py-10 rounded-2xl px-4">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-purple-700 mb-4">
                  Elevate Your Career: Essential Professional Development Resources
                </h2>
                <p className="text-gray-600 mb-10">
                    Explore news, views and perspectives from us and your alumni
                    community.
                </p>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {blogs.map((blog) => (
                        <div
                            key={blog.id}
                            className="bg-pink-50 rounded-2xl border border-gray-400 shadow-xl overflow-hidden group"
                        >
                            <div className="relative overflow-hidden">
                                <img
                                    src={blog.image}
                                    alt={blog.title}
                                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                                />
                            </div>
                            <div className="p-4">
                                <span className="text-sm text-gray-500">{blog.date}</span>
                                <h3 className="text-lg font-semibold text-gray-800 mt-2">
                                    {blog.title}
                                </h3>
                                <p className="text-sm text-gray-600 mt-1">{blog.category}</p>
                                <Link to ='/blogsDetails'
                                    href="#"
                                    className="inline-block mt-4 text-purple-600 hover:underline text-sm font-medium"
                                >
                                    Read More →
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                <button className="mt-10 px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition">
                    Explore All Blogs
                </button>
            </div>
        </div>
    );
};

export default NewsBlogsSection;
