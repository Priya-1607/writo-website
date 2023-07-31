import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import './Course.css'
import { Mousewheel, Pagination } from 'swiper/modules';

import one from './../../Images/FAQs-amico.png'
import two from './../../Images/nodeJS.png'
import three from './../../Images/reactJS.png'


const slideImages = [
        one, two, three
];

const MySwiper = () => {

        const [currentSlide, setCurrentSlide] = useState(0);

        const handleSlideChange = (swiper) => {
                setCurrentSlide(swiper.realIndex);
        };

        return (
                <div className='md:mx-96 mx-5 md:mt-24'>
                        <h1 className='text-2xl md:text-5xl font-bold text-center'><span className='text-pink'>Reviews</span> From Students</h1>
                        <h3 className='text-xl md:text-3xl font-bold text-center mb-24 md:mb-12'>Average Rating : 4.5</h3>
                        <div>
                                <div className='swiper-shadow shadow-2xl relative'>
                                        <Swiper
                                                direction={'vertical'}
                                                slidesPerView={1}
                                                spaceBetween={30}
                                                mousewheel={true}
                                                pagination={{
                                                        clickable: true,
                                                }}
                                                modules={[Mousewheel, Pagination]}
                                                className="mySwiper"
                                                onSlideChange={handleSlideChange}
                                        >
                                                <SwiperSlide className='flex flex-col justify-center'>
                                                        <div className='md:pl-36 md:pr-6'>
                                                                <h1 className='text-lg text-gray'>26 December 2019</h1>
                                                                <h1 className='text-3xl text-pink font-bold'>Lorem, ipsum dolor.</h1>
                                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti sit labore praesentium sint at pariatur?</p>
                                                        </div>
                                                </SwiperSlide>
                                                <SwiperSlide className='flex flex-col justify-center'>
                                                        <div className='md:pl-36 md:pr-6'>
                                                                <h1 className='text-lg text-gray'>26 December 2019</h1>
                                                                <h1 className='text-3xl text-pink font-bold'>Lorem, ipsum dolor.</h1>
                                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti sit labore praesentium sint at pariatur?</p>
                                                        </div>
                                                </SwiperSlide>
                                                <SwiperSlide className='flex flex-col justify-center'>
                                                        <div className='md:pl-36 md:pr-6'>
                                                                <h1 className='text-lg text-gray'>26 December 2019</h1>
                                                                <h1 className='text-3xl text-pink font-bold'>Lorem, ipsum dolor.</h1>
                                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti sit labore praesentium sint at pariatur?</p>
                                                        </div>
                                                </SwiperSlide>
                                        </Swiper>
                                        <div className='absolute -top-[80px] md:top-[8%] z-10 left-28 md:-left-36 shadow-2xl p-4 md:p-8 rounded-[15px]'>
                                                <img
                                                        src={slideImages[currentSlide]}
                                                        alt={`Slide ${currentSlide + 1}`}
                                                        className='w-[120px] h-[120px] md:w-[200px] md:h-[200px]'
                                                />
                                        </div>
                                </div>
                        </div>
                </div>
        );
};

export default MySwiper;