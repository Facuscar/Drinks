import { useState, useEffect, createContext } from "react";
import axios from "axios";

const DrinksContext = createContext();

export const DrinksProvider = ({children}) => {

    const getDrink = async (search) => {
        try {
            const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${search.name}&c=${search.category}`

            const { data } = await axios(url);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <DrinksContext.Provider value={{
            getDrink,
        }}>
            {children}
        </DrinksContext.Provider>
    )
}

export default DrinksContext;