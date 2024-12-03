import React from 'react';
import { MdDateRange } from 'react-icons/md';

const BlogsDetails = () => {
    return (
        <section className="bg-pink-50 py-10 px-6 md:px-20">
            <div className="max-w-5xl mx-auto">
                {/* Date and Title */}
                <div className="text-center">
                    <div className="flex justify-center items-center gap-2 text-gray-600">
                        <MdDateRange className="text-xl" />
                        <span className="text-sm">Jun 11, 2024</span>
                    </div>
                    <h1 className="text-3xl font-bold text-purple-800 mt-4">
                    Elevate Your Career: Essential Professional <br /> Development Resources
                    </h1>
                </div>

                {/* Image Section */}
                <div className="mt-8">
                    <img
                        src="https://i.ibb.co.com/Z6DyxM4/9961718053217.jpg" // Replace with your actual image URL
                        alt="Alumni Social Impact"
                        className="rounded-lg shadow-lg w-full h-[500px] object-cover"
                    />
                </div>

                {/* Description Section */}
                <div className="mt-8 text-gray-800 leading-relaxed">
                    <p>
                    In today's fast-paced world, staying ahead in your career requires continuous learning and skill development. Luckily, there are numerous professional development resources available online to help you sharpen your skills, expand your knowledge, and advance your career. Here are some essential resources from credible sources to support your professional growth journey:
                    </p>

                    {/* Stories */}
                    <ol className="mt-6 list-decimal list-inside space-y-4">
                        <li>
                            <strong>LinkedIn Learning</strong>
                            <p>
                            LinkedIn Learning offers a vast library of courses covering a wide range of topics, from technical skills to leadership development. Explore courses taught by industry experts and thought leaders to enhance your skill set and stay competitive in your field
                            </p>
                        </li>
                        <li>
                            <strong>Coursera</strong>
                            <p>
                            Coursera partners with top universities and organizations to offer online courses, specializations, and degrees in various disciplines. Whether you're interested in data science, marketing, or project management, Coursera provides high-quality learning opportunities to help you achieve your career goals.
                            </p>
                        </li>
                        <li>
                            <strong>Harvard Business Review</strong>
                            <p>
                            Harvard Business Review is a reputable source for insightful articles, case studies, and management tips from leading experts in business and management. Explore HBR's vast collection of resources to stay updated on the latest trends and best practices in your industry.
                            </p>
                        </li>
                      
                       
                    </ol>
                    <div>
                        <strong>Conclusion</strong>
                        <p>Investing in your professional development is key to unlocking new opportunities and achieving success in your career. With these credible resources at your fingertips, you can continue to grow, learn, and thrive in today's dynamic job market. Explore these resources, take advantage of online learning opportunities, and elevate your career to new heights!</p>
                        <p className='font-medium mt-6'>Remember, the journey of professional development is ongoing. Keep exploring, learning, and evolving to stay ahead in your career!</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogsDetails;