
const FoodCard = ({ item }) => {
    const { category, image, name, price, recipe, _id } = item;

    return (
        <div className="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 pb-5">
            <img className="object-cover w-full h-56" src={image} alt="avatar" />

            <div className="py-5 text-center">
                <a href="#" className="block text-xl font-bold text-gray-800 dark:text-white" tabindex="0" role="link">{name}</a>
                <span className="text-sm text-gray-700 dark:text-gray-200 font-medium">{recipe.length > 60 ? `${recipe.substring(0, 60)}...` : recipe}</span>
            </div>
            <div className="flex justify-center ">
            <button className="btn hover:bg-black btn-md border-0 border-b-2 border-primary text-primary uppercase">Add to cart</button>
            </div>
        </div>
    );
};

export default FoodCard;