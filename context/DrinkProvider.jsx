import { useState, useEffect, createContext } from "react";
import axios from "axios";

const DrinksContext = createContext();

export const DrinksProvider = ({children}) => {

    const [drinks, setDrinks] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [drinkId, setDrinkId] = useState();
    const [recipe, setRecipe] = useState();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (drinkId) {
            const getRecipe = async () => {
                try {
                    const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`;

                    setLoading(true);
                    const { data } = await axios(url);
                    setRecipe(data.drinks[0]);
                } catch (error) {
                    console.log(error);
                } finally {
                    setLoading(false);
                }
            }
            getRecipe();
        } 
    }, [drinkId]);

    const getDrink = async (search) => {
        try {
            const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${search.name}&c=${search.category}`

            const { data } = await axios(url);

            setDrinks(data.drinks);
        } catch (error) {
            console.log(error);
        }
    }

    const handleModalClick = () => {
        setShowModal( prev => !prev);
    }

    const handleDrinkIdClick = (id) => {
        setDrinkId(id);
    }

    return (
        <DrinksContext.Provider value={{
            getDrink,
            drinks,
            handleModalClick,
            showModal,
            handleDrinkIdClick,
            recipe,
            loading,
        }}>
            {children}
        </DrinksContext.Provider>
    )
}

export default DrinksContext;