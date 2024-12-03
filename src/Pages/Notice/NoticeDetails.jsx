import React from 'react';
import { MdDateRange } from 'react-icons/md';

const NoticeDetails = () => {
    return (
        <section className="bg-gray-50 py-10 px-6 md:px-20">
            <div className=" mx-auto w-96">
                {/* Date and Title */}
                <div className="text-center">
                    <div className="flex justify-center items-center gap-2 text-gray-600">
                    
                        <span className="text-sm rounded-2xl p-3 bg-purple-400">Community Update</span>
                    </div>
                    <h1 className="text-xl font-bold text-purple-800 mt-4">
                    Join us in celebrating this milestone and becoming part of our vibrant community
                    </h1>
                </div>

                {/* Image Section */}
                <div className="mt-8 ">
                    <img
                        src="https://i.ibb.co.com/LZq2rzZ/naassom-azevedo-Q-Sei-Tq-Slc-unsplash.jpg" // Replace with your actual image URL
                        alt="Alumni Social Impact"
                        className="rounded-lg shadow-lg w-full h-96 object-cover"
                    />
                </div>

                {/* Description Section */}
                <div className="mt-8 text-gray-800  leading-relaxed">
                    <p className='text-xs'>
                    Join us in celebrating the launch of the Alumnut Community Portal! 🌟 Create your account today and apply for membership to receive latest updates, access and create inspiring stories, career tips, networking events, and more. Let's nurture, grow, and succeed together!
                    </p>

        
                  
                </div>
            </div>
        </section>
    );
};

export default NoticeDetails;