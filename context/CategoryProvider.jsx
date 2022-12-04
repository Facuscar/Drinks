import { useState, useEffect, createContext } from "react";

const CategoryContext = createContext();

export const CategoryProvider = ({children}) => {

    return (
        <CategoryContext.Provider value={{}}>
            {children}
        </CategoryContext.Provider>
    )
}

export default CategoryContext;