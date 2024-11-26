import Loader from "../../../Component/Loader/Loader";
import MenuCard from "../../../Component/MenuCard/MenuCard";
import SectionTile from "../../../Component/SectionTitle/SectionTile";
import useMenu from "../../../hooks/useMenu";

const FoodMenu = () => {
    const [menuItems, isLoading] = useMenu('')
    if (isLoading) {
        return <Loader></Loader>
    }
    return (
        <div className="mx-auto max-w-5xl">
            <SectionTile heading='FROM OUR MENU' subHeading='---Check it out---'></SectionTile>
            <div className="grid grid-cols-2 gap-8">
                {
                    menuItems.slice(0, 6).map(item => <MenuCard key={item._id} item={item}></MenuCard>)
                }
            </div>
            <div className="my-10 flex justify-center">
                <button className="btn border-0 border-b-2 border-black uppercase">View full menu</button>
            </div>
        </div>
    );
};

export default FoodMenu;