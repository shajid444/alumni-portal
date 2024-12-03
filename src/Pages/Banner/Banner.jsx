// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './style.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { GiSelfLove } from 'react-icons/gi';
import { RxRocket } from 'react-icons/rx';
import { CgCommunity } from 'react-icons/cg';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (

    <>
      {/* <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide><img src="https://i.ibb.co.com/QNKvr6Z/why-nsu.jpg" /></SwiperSlide>
          <SwiperSlide> <img src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHVuaXZlcnNpdHl8ZW58MHx8MHx8fDA%3D" /></SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
         
        </Swiper> */}
      <div className='relative mb-96 bg-white'>


        <div
          className="hero h-[600px]  rounded-3xl  "
          style={{
            backgroundImage: "url(https://i.ibb.co.com/4ShcDCr/DALL-E-2024-11-21-04-04-26-A-serene-scene-of-students-sitting-casually-in-a-university-campus-The-se.webp)",
          }}>
          <div className="hero-overlay bg-opacity-40"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-4xl space-y-8">
              <h1 className="mb-5 text-5xl font-extrabold">Proud Past, Promising Future! The journey after NSU continues here</h1>
              <p className="mb-5 text-lg font-bold">
                Join a vibrant community of North South University alumni dedicated to fostering lifelong connections, advancing careers, and making a meaningful impact on society. Together, we celebrate our achievements, support each other, and look forward to a future filled with promise and possibility
              </p>
              <div className='flex gap-5 justify-center'>
                <Link to='/about'>
                  <button className="btn btn-wide bg-[#FAB12F] ">About Us <FaArrowRight /></button>
                </Link>
                <Link to='/news'>
                <button className="btn btn-wide btn-outline btn-primary bg-white bg-opacity-40">All Events <FaArrowRight /></button>
                </Link>
           

              </div>

            </div>
          </div>
        </div>

        <div className='flex flex-col justify-center items-center border bg-pink-100  absolute top-[440px] mt-10 right-10 rounded-3xl gap-5 p-5 ml-10 z-10'>
          <h1 className='text-xl text-primary font-semibold border rounded-xl bg-slate-200 p-3'>Join our community</h1>
          <h1 className='text-2xl  text-primary font-semibold'>Why you should join us</h1>
          <div className='grid grid-cols-3 gap-5 '>
            <div className="card  bg-white border border-gray-500 text-center w-96 hover transform transition-transform duration-300 hover:scale-105">
              <div className="card-body">
                <h1 className='text-orange-700 text-6xl flex items-center justify-center space-y-5'><GiSelfLove /></h1>
                <h2 className="card-title text-primary">Lifelong Bond and Networking for Success</h2>
                <p className='text-gray-600'>Joining the Alumni Association opens doors to a vast network of accomplished individuals, providing unparalleled opportunities for personal and professional growth.</p>
              </div>
            </div>

            <div className="card bg-white border border-gray-500 text-center w-96 hover transform transition-transform duration-300 hover:scale-105">
              <div className="card-body">
                <h1 className='text-orange-700 text-6xl flex items-center justify-center space-y-5'><RxRocket /></h1>
                <h2 className="card-title text-primary">Thriving as One and Nurturing Growth Together</h2>
                <p className='text-gray-600'>A dedicated platform for networking, career support, job opportunities, mentorship programs, and industry insights to propel your professional journey forward.</p>
              </div>
            </div>
            <div className="card bg-white border border-gray-500 text-center w-96 hover transform transition-transform duration-300 hover:scale-105">
              <div className="card-body">
                <h1 className='text-orange-700 text-6xl flex items-center justify-center space-y-5'><CgCommunity /></h1>
                <h2 className="card-title text-primary">Create Impact and Give Back to the Community</h2>
                <p className='text-gray-600'>Contribute to the alma mater's legacy by participating in philanthropic initiatives, giving back to the community, and creating a impact for future generations.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;