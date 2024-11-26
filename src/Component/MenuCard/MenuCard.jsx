
const MenuCard = ({ item }) => {
    const { category, image, name, price, recipe, _id } = item;
    return (
        <div className="flex gap-5">

            <img className="w-28 h-28 placeholder rounded-bl-full rounded-br-full rounded-tr-full" src={image} alt="" />

            <div>
                <h2 className="uppercase text-lg mb-2 line-clamp-1 ">{name} ----------</h2>
                <p>{recipe.length > 80 ? `${recipe.substring(0, 80)}...` : recipe}</p>
            </div>
            <div>
                <p className="text-primary">${price}</p>
            </div>
        </div>
    );
};

export default MenuCard;