import CoverbgPrlx from "../../Component/CoverbgPrlx/CoverbgPrlx";
import shopBg from '../../assets/shop/banner2.jpg'
import FoodShops from "./FoodShops/FoodShops";

const Shop = () => {
    return (
        <div>
            <CoverbgPrlx bgHeading='OUR SHOP' bgDetails='Would you like to try a dish?' featuredImg={shopBg} filter='offerd'></CoverbgPrlx>
            <FoodShops></FoodShops>
        </div>
    );
};

export default Shop;