import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useMenu = (category) => {
    console.log(category)
    const axios = useAxiosPublic()
    const { data: menuItems = [], isLoading } = useQuery({
        queryKey: ['menu', category],
        queryFn: async () => {
            const { data } = await axios.get(`/menu?category=${category}`)
            return data;
        }
    })
    return [menuItems, isLoading]
};

export default useMenu;