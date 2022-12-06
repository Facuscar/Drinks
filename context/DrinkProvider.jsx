import { useState, useEffect, createContext } from "react";
import axios from "axios";

const DrinksContext = createContext();

export const DrinksProvider = ({children}) => {

    return (
        <DrinksContext.Provider value={{
        }}>
            {children}
        </DrinksContext.Provider>
    )
}

export default DrinksContext;