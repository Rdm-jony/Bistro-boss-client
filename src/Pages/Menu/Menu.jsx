import CategoryMenuWithPrlx from "../../Component/CategoryMenuWithPrlx/CategoryMenuWithPrlx";
import offerBg from '../../assets/menu/banner3.jpg'
import dessertBg from '../../assets/menu/dessert-bg.jpeg'
import saladBg from '../../assets/menu/salad-bg.jpg'
import soupBg from '../../assets/menu/soup-bg.jpg'
import pizzaBg from '../../assets/menu/pizza-bg.jpg'

const Menu = () => {
    return (
        <div>
            <CategoryMenuWithPrlx filter='offered' heading="TODAY'S OFFER" subHeading="---Don't miss---" featuredImg={offerBg} bgHeading='OUR MENU' bgDetails='WOULD YOU LIKE TO TRY A DISH?'></CategoryMenuWithPrlx>
            <CategoryMenuWithPrlx filter='dessert' heading="" subHeading="" featuredImg={dessertBg} bgHeading='DESSERTS' bgDetails='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'></CategoryMenuWithPrlx>
            <CategoryMenuWithPrlx filter='salad' heading="" subHeading="" featuredImg={saladBg} bgHeading='SALADS' bgDetails='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'></CategoryMenuWithPrlx>
            <CategoryMenuWithPrlx filter='soup' heading="" subHeading="" featuredImg={soupBg} bgHeading='SOUP' bgDetails='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'></CategoryMenuWithPrlx>
            <CategoryMenuWithPrlx filter='pizza' heading="" subHeading="" featuredImg={pizzaBg} bgHeading='PIZZA' bgDetails='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'></CategoryMenuWithPrlx>
        </div>
    );
};

export default Menu;