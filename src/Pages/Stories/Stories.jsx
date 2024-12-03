import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { FaArrowRightArrowLeft } from 'react-icons/fa6';
import { MdDateRange } from 'react-icons/md';
import { Link } from 'react-router-dom';
// import { FaArrowAltCircleDown } from 'react-icons/fa';

const Stories = () => {
    return (
        <section className=' story h-auto border rounded-xl bg-slate-100 p-8 flex justify-between'
            style={{
                backgroundImage: "url(https://i.ibb.co.com/y87MY02/DALL-E-2024-11-21-03-38-22-A-minimalist-white-image-featuring-scattered-small-gray-dots-across-the-c.webp)",
            }}>

            <div className=''>
                <h1 className='text-7xl text-primary font-bold mb-5'>Our Stories</h1>



                <div className="max-w-md p-8 sm:flex sm:space-x-6 dark:bg-gray-50 dark:text-gray-800 border-b-2 group">
                    <div className="flex-shrink-0 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0 overflow-hidden">
                        <img src="https://i.ibb.co.com/LZq2rzZ/naassom-azevedo-Q-Sei-Tq-Slc-unsplash.jpg" alt="" className="object-cover object-center w-full h-full rounded-3xl shadow-lg transform transition-transform duration-300 group-hover:scale-110" />
                    </div>
                    <div className="flex flex-col space-y-4">
                        <div>
                            <span className="text-sm dark:text-gray-600 flex items-center gap-2"> <MdDateRange />June 07, 2024</span>
                            <h2 className="text-xl font-semibold">Giving Back: Alumni Impact on Social Causes</h2>

                        </div>

                        <Link to ='/storyDetails' className="link link-primary flex items-center gap-2">Know more <FaArrowRight></FaArrowRight></Link>

                    </div>
                </div>

                <div className="max-w-md p-8 sm:flex sm:space-x-6 dark:bg-gray-50 dark:text-gray-800 border-b-2 group">
                    <div className="flex-shrink-0 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0 overflow-hidden">
                        <img src="https://i.ibb.co.com/qFJ2fRQ/stephanie-hau-k-MJhu-PLEYVI-unsplash.jpg" alt="" className="object-cover object-center w-full h-full rounded-3xl shadow-2xl transform transition-transform duration-300 group-hover:scale-110" />
                    </div>
                    <div className="flex flex-col space-y-4">
                        <div>
                            <span className="text-sm dark:text-gray-600 flex items-center gap-2"> <MdDateRange />June 07, 2024</span>
                            <h2 className="text-xl font-semibold">Career Development Corner: Navigating the Professional Landscape</h2>

                        </div>

                        
                        <Link to ='/storyDetails2' className="link link-primary flex items-center gap-2">Know more <FaArrowRight></FaArrowRight></Link>

                    </div>
                </div>

                <div className="max-w-md p-8 sm:flex sm:space-x-6 dark:bg-gray-50 dark:text-gray-800 group">
                    <div className="flex-shrink-0 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0 overflow-hidden">
                        <img src="https://i.ibb.co.com/5Tnw9pZ/9921717746701.jpg" alt="" className="object-cover object-center w-full h-full rounded-3xl shadow-2xl dark:bg-gray-500 transform transition-transform duration-300 group-hover:scale-110" />
                    </div>
                    <div className="flex flex-col space-y-4">
                        <div>
                            <span className="text-sm dark:text-gray-600 flex items-center gap-2"> <MdDateRange />June 07, 2024</span>
                            <h2 className="text-xl font-semibold">Alumni Spotlight: Inspiring Journeys</h2>

                        </div>

                        <a className="link link-primary flex items-center gap-2">Know more <FaArrowRight></FaArrowRight></a>

                    </div>
                </div>

            </div>


            <div className='flex flex-col justify-center  space-y-8 text-left'>

                <h1 className='text-primary text-5xl font-bold'>Your network <br /> around the globe.</h1>
                <p className='text-gray-600 text-xl font-medium'>Connect with alumni worldwide and expand your network <br /> opening doors to new opportunities</p>

               <Link to='/login'>
               <button className="btn btn-wide bg-[#FAB12F] ">Join Community <FaArrowRight /></button>
               </Link>

                <div className="flex gap-3 ">
                    <div className="stats shadow">
                        <div className="stat">
                            <div className="stat-value">4K</div>
                            <div className="stat-title">Member</div>


                        </div>
                    </div>

                    <div className="stats shadow">
                        <div className="stat">
                            <div className="stat-value">3</div>
                            <div className="stat-title">Schools</div>


                        </div>
                    </div>

                    <div className="stats shadow">
                        <div className="stat">

                            <div className="stat-value">90</div>

                            <div className="stat-title">Batches</div>

                        </div>
                    </div>






                </div>
            </div>

        </section>
    );
};

export default Stories;