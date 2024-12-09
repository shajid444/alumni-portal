import React from 'react';
import SectionTitle from '../../Component/SectionTitle/SectionTitle';
// import { Carousel } from 'react-responsive-carousel';
import './News.css'
import { Link } from 'react-router-dom';

const News = () => {
    return (
        <div className='news pt-10 rounded-xl my-20 bg-fixed'>
            <SectionTitle heading={'News section'} subHeading={'--nsu--'}>

            </SectionTitle>
            <div className='md:flex bg-slate-500 bg-opacity-25 justify-center items-center pb-20 pt-12 px-36'>
                <div >
                    <img src="https://images.unsplash.com/photo-1503676382389-4809596d5290?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>

                <div className='md:ml-10 my-3'>
                    <p className='mb-4'>november 11, 2024</p>
                    <p>Explore news, views and perspectives from us and your alumni community.</p>


                    <Link to='https://www.northsouth.edu/news-events'>
                        <button className="btn btn-outline border-0 border-b-4 btn-primary mt-4 mb-4">News & Events</button>

                    </Link>

                </div>
            </div>

        </div>
    );
};

export default News;