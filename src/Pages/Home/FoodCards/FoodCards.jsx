import Loader from "../../../Component/Loader/Loader";
import SectionTile from "../../../Component/SectionTitle/SectionTile";
import useMenu from "../../../hooks/useMenu";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import FoodCard from "../../../Component/FoodCard/FoodCard";


const FoodCards = () => {
    const [menuItems, isLoading] = useMenu('salad')
    if (isLoading) {
        return <Loader></Loader>
    }
    return (
        <div className="mx-auto max-w-5xl">
            <SectionTile heading='CHEF RECOMMENDS' subHeading='---Should Try---'></SectionTile>
            <div>
                <>
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}

                        navigation={true}
                        modules={[Navigation]}
                        className="mySwiper"
                    >

                        {
                            menuItems.map(item => <SwiperSlide key={item._id}><FoodCard item={item}></FoodCard></SwiperSlide>)
                        }
                    </Swiper>
                </>
            </div>
        </div>
    );
};

export default FoodCards;