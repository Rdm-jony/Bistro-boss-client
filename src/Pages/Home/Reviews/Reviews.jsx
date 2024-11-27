import SectionTile from "../../../Component/SectionTitle/SectionTile";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import ReviewCard from "../../../Component/ReviewCard/ReviewCard";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useEffect, useState } from "react";

const Reviews = () => {
    const axios = useAxiosPublic()
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        axios.get('/reviews')
            .then(res => setReviews(res.data))
    }, [])
    console.log(reviews)
    return (
        <div className="mx-auto max-w-5xl">
            <SectionTile heading='TESTIMONIALS' subHeading='---What Our Clients Say---'></SectionTile>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}

                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
            >

                {
                    reviews.map(item => <SwiperSlide key={item._id}><ReviewCard item={item}></ReviewCard></SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default Reviews;