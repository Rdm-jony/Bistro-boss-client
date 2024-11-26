import Banner from "./Banner/Banner";
import BannerCard from "./BannerCard/BannerCard";
import BannerPrlx from "./bannerPrlx/BannerPrlx";
import FoodCards from "./FoodCards/FoodCards";
import FoodMenu from "./FoodMenu/FoodMenu";
import FoodSwipper from "./FoodSwipper/FoodSwipper";
import Reviews from "./Reviews/Reviews";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FoodSwipper></FoodSwipper>
            <BannerCard></BannerCard>
            <FoodMenu></FoodMenu>
            <FoodCards></FoodCards>
            <BannerPrlx></BannerPrlx>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;