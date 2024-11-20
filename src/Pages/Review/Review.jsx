import React, { useEffect, useState } from 'react';
import SectionTitle from './../../Component/SectionTitle/SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating';

import '@smastrom/react-rating/style.css'
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const Review = () => {


    // const axiosSecure = useAxiosPublic();
    // const { data: review = []} = useQuery({

    //     queryKey: ['review'],
    //     queryFn: async () => {
    //         const res = await axiosSecure.get('/review');
    //         return res.data;
    //     }
    // })

    const [review, setReview] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/review')
            .then(res => res.json())
            .then(data => setReview(data))


    }, [])
    console.log(review);
    return (
        <div className='flex flex-col h-[400px] justify-center items-center'>
            <SectionTitle heading={'Reviews'} subHeading={'---Alumni---'}>

            </SectionTitle>

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                {review.map(review => <SwiperSlide key={review.id}>

                    <div className='flex gap-5 flex-col items-center'>
                        <Rating
                            style={{ maxWidth: 180 }}
                            value={review.rating}
                            readOnly
                        />
                        <p>{review.details}</p>
                        <h3 className='text-2xl text-orange-400'>{review.name}</h3>
                    </div>


                </SwiperSlide>)}
            </Swiper>

        </div>
    );
};

export default Review;