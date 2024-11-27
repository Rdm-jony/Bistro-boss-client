import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import useMenu from "../../../hooks/useMenu";
import Loader from "../../../Component/Loader/Loader";
import FoodCard from "../../../Component/FoodCard/FoodCard";
import { useLocation } from "react-router-dom";

const FoodShops = () => {
    const location = useLocation()
    const [category, setCategory] = useState(location.state ? location.state : 'salad')
    const [menuItems, isLoading] = useMenu(category)
    return (
        <div className="mx-auto max-w-5xl">
            <div class="flex justify-center overflow-x-auto overflow-y-hidden border-b border-gray-200 whitespace-nowrap dark:border-gray-700 my-10">
                <button onClick={() => setCategory('salad')} className={`inline-flex items-center h-10 px-4 -mb-px text-sm text-center ${category == 'salad' ? 'text-primary border-primary ' : ''} bg-transparent border-b-2 sm:text-base dark:border-blue-400 dark:text-blue-300 whitespace-nowrap focus:outline-none`}>
                    SALAD
                </button>

                <button onClick={() => setCategory('pizza')} className={`inline-flex items-center h-10 px-4 -mb-px text-sm text-center ${category == 'pizza' ? 'text-primary border-primary ' : ''} bg-transparent border-b-2 sm:text-base dark:border-blue-400 dark:text-blue-300 whitespace-nowrap focus:outline-none`}>
                    PIZZA
                </button>

                <button onClick={() => setCategory('soup')} className={`inline-flex items-center h-10 px-4 -mb-px text-sm text-center ${category == 'soup' ? 'text-primary border-primary ' : ''} bg-transparent border-b-2 sm:text-base dark:border-blue-400 dark:text-blue-300 whitespace-nowrap focus:outline-none`}>
                    SOUPS
                </button>
                <button onClick={() => setCategory('dessert')} className={`inline-flex items-center h-10 px-4 -mb-px text-sm text-center ${category == 'dessert' ? 'text-primary border-primary ' : ''} bg-transparent border-b-2 sm:text-base dark:border-blue-400 dark:text-blue-300 whitespace-nowrap focus:outline-none`}>
                    DESSERTS
                </button>
                <button onClick={() => setCategory('drinks')} className={`inline-flex items-center h-10 px-4 -mb-px text-sm text-center ${category == 'drinks' ? 'text-primary border-primary ' : ''} bg-transparent border-b-2 sm:text-base dark:border-blue-400 dark:text-blue-300 whitespace-nowrap focus:outline-none`}>
                    DRINKS
                </button>
            </div>
            {
                isLoading && <Loader></Loader>
            }
            <div className="grid grid-cols-3 gap-8">
                {
                    menuItems?.map(item => <FoodCard item={item}></FoodCard>)
                }
            </div>
        </div>
    );
};

export default FoodShops;