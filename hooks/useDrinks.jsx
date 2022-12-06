import { useContext } from 'react';
import DrinksContext from '../context/DrinkProvider';

const useDrinks = () => {
    return useContext(DrinksContext);
}

export default useDrinks;