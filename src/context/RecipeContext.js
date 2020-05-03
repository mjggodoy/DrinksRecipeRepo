import React, {createContext, useState, useEffect} from 'react';
import axios from 'axios';

export const RecipeContext = createContext();

const RecipeProvider = (props) => {
    const [receipt, saveReceipt] = useState([]);
    const[search, saveSearch] = useState({
        ingredient: "",
        category: ""
    });

   return (
    <RecipeContext.Provider
        value={{saveSearch}}
    >
        {props.children}
    </RecipeContext.Provider>
    )
}

export default RecipeProvider;