import React from 'react';
import { Link } from 'react-router-dom';

const Notice = () => {
    return (
        <div className='flex gap-9 mt-10'>

            <div className="card  w-96 shadow-md">
                <div className="card-body">
                    <small className='text-gray-500'>Jun 11, 2024</small>
                    <Link to='/noticeDetails'> <h2 className="card-title  text-purple-800">Join us in celebrating this milestone and becoming part of our vibrant community</h2> </Link>
                   
                    <p className='text-gray-600'>Join us in celebrating the launch of the Alumnut Community Portal! 🌟 Create your account today and apply for membership to receive latest updates, access and create inspiring stories, career tips, networking events, and more. Let's nurture, grow, and succeed.......</p>
                   
                </div>
            </div>

            <div className="card  w-96 shadow-md">
                <div className="card-body">
                    <small className='text-gray-500'>Jun 07, 2024</small>
                    <Link> <h2 className="card-title link text-purple-800">New Alumni Portal Launched: Explore Your Benefits!</h2> </Link>
                   
                    <p className='text-gray-600'>Our revamped alumni portal is live! Access exclusive resources, job postings, and community updates. Log in today.</p>
                   
                </div>
            </div>


        </div>
    );
};

export default Notice;