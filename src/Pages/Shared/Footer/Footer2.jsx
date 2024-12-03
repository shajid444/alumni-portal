import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { VscTerminalUbuntu } from "react-icons/vsc";

const Footer2 = () => {
    return (
        <footer className="relative bg-purple-800 rounded-t-2xl text-white mt-36">
            {/* Newsletter Section */}
            <div className="absolute -top-20 w-full "
             >
                <div className="bg-yellow-400 mx-auto w-[600px] px-8 py-10 rounded-3xl shadow-lg"
                style={{
                    backgroundImage: "url(https://aansu.net/frontend/images/community-bg.png)",
                  }}>
                    <h2 className="text-2xl font-semibold text-center mb-4">Subscribe to our Newsletter</h2>
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                        <input
                            type="email"
                            placeholder="Enter email address"
                            className="px-4 py-2 rounded-md text-gray-800 w-full sm:w-1/3"
                        />
                        <button className="bg-purple-800 text-white px-6 py-2 rounded-md hover:bg-purple-900 transition">
                            Submit →
                        </button>
                    </div>
                </div>
            </div>

            {/* Footer Content */}
            <div className="pt-28 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Logo and Description */}
                    <div>
                        <div className="flex items-center space-x-2">

                            <h1 className="text-white text-2xl font-bold  flex justify-center items-center"><VscTerminalUbuntu /> -Alumnut</h1>
                        </div>
                        <p className="mt-4 text-sm">
                            Join us in fostering lifelong connections, celebrating achievements, and creating a
                            supportive network that extends beyond graduation.
                        </p>
                        <div className="flex mt-4 space-x-4">
                            <a href="#" className="p-2 bg-white text-purple-800 rounded-full">
                                <FaFacebookF />
                            </a>
                            <a href="#" className="p-2 bg-white text-purple-800 rounded-full">
                                <FaTwitter />
                            </a>
                            <a href="#" className="p-2 bg-white text-purple-800 rounded-full">
                                <FaLinkedinIn />
                            </a>
                            <a href="#" className="p-2 bg-white text-purple-800 rounded-full">
                                <FaInstagram />
                            </a>
                        </div>
                    </div>

                    {/* Useful Links */}
                    <div>
                        <h4 className="text-lg font-bold">Useful Links</h4>
                        <ul className="mt-4 space-y-2 text-sm">
                            <li><a href="#" className="hover:underline">Notice</a></li>
                            <li><a href="#" className="hover:underline">Events</a></li>
                            <li><a href="#" className="hover:underline">Stories</a></li>
                            <li><a href="#" className="hover:underline">Blogs</a></li>
                            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                            <li><a href="#" className="hover:underline">Cookie Policy</a></li>
                            <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
                            <li><a href="#" className="hover:underline">Refund Policy</a></li>
                        </ul>
                    </div>

                    {/* Contact Information */}
                    <div>
                        <h4 className="text-lg font-bold">Contact Us</h4>
                        <address className="mt-4 text-sm not-italic space-y-2">

                            <p>North South ALumni Association</p>
                            <p>Bangladesh,Dhaka</p>
                            <p>Bashundhara R/A, B block</p>

                            <p>Phone: +8801609411444</p>
                            <p>Email: info@alumnut.net</p>
                        </address>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="mt-8 text-center border-t border-purple-600 pt-4 text-sm">
                    <p>
                        Copyright © 2024, Alumni Association of North South University. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer2;
