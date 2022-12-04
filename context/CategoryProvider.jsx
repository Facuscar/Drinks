import { useState, useEffect, createContext } from "react";
import axios from "axios";

const CategoryContext = createContext();

export const CategoryProvider = ({children}) => {
    const [categories, setCategories] = useState([]);

    const getCategories = async () => {
        try {
            const url = 'www.thecocktaildb.com/api/json/v1/1/list.php?c=list'

            const { data } = await axios(url)
            setCategories(data.drinks);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getCategories();
    }, []);

    return (
        <CategoryContext.Provider value={{
            categories,
        }}>
            {children}
        </CategoryContext.Provider>
    )
}

export default CategoryContext;