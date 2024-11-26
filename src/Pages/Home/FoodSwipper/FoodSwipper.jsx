import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'
import SectionTile from '../../../Component/SectionTitle/SectionTile';

const FoodSwipper = () => {
    const slideImages = [slide1, slide2, slide3, slide4, slide5]
    const itemName = ['Salads', 'Soups', 'pizzas', 'desserts', 'Berger']
    return (
        <div>
            <SectionTile subHeading='---From 11:00am to 10:00pm---' heading='ORDER ONLINE'></SectionTile>
            <Swiper
                slidesPerView={3}
                loop={true}

                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper max-w-5xl mx-auto"
            >
                {
                    slideImages.map((img, idx) => <SwiperSlide className='relative'>
                        <img className='w-full h-[400px]' src={img} alt="" />
                        <p className='uppercase text-2xl absolute bottom-10 left-1/2 translate-x-[-50%] text-white'>{itemName[idx]}</p>
                    </SwiperSlide>)
                }

            </Swiper>
        </div>
    );
};

export default FoodSwipper;