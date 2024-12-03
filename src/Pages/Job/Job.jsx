import React from 'react';
import { FaCalendar, FaLocationArrow, FaRegCalendarAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Job = () => {
    return (
        <div className='flex gap-9 mt-10'>

            <div className="card  w-96 shadow-md">
                <div className="card-body">
                   
                    <Link to='/noticeDetails'> <h2 className="card-title  text-purple-800">Full Stack Web Develope</h2> </Link>
                    <small className='text-gray-500 flex items-center gap-2'><FaRegCalendarAlt />Friday,22 November, 2024</small>

                    <p className='text-gray-600'>The Alumni Association of North South University (Alumnut) is seeking a talented and motivated Full Stack Web Developer to join ou..</p>

                    <small className='flex items-center gap-2'><FaCalendar />Full Time ,<FaLocationArrow></FaLocationArrow> Dhaka, Bangladesh</small>

                    <small>BDT 35k+</small>

                   <Link to='/jobDetails'>
                   <h3 className='text-purple-800 underline font-bold'>More Details</h3>
                   </Link> 

                </div>
            </div>

          


        </div>
    );
};

export default Job;