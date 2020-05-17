import React, {createContext, useState, useEffect} from 'react';
import axios from 'axios';

export const ModalContext = createContext();

const ModalProvider = (props) => {

    const [idrecipe, saveIdRecipe] = useState({});
    const [recipeInfo, saveRecipeInfo] = useState({});

    useEffect(() => {
        const retrieveRecipeById = async() => {
                const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idrecipe}`;
                await axios.get(url).then((response) => {
                    const recipes = response.data.drinks[0];
                    saveRecipeInfo(recipes);
                }).catch((error) => {
                    if (error.response) {
                        console.log(error.response.data);
                        console.log(error.response.status);
                        console.log(error.response.headers);
                    } else if (error.request) {
                        console.log('error, request', error.request);
                    } else {
                        console.log('Error', error.message);
                    }
                });
            
        } 
        if (Object.keys(idrecipe).length !== 0) {
            retrieveRecipeById();
        }  
    }, [idrecipe]); 

    return(
        <ModalContext.Provider
            value={{recipeInfo, saveRecipeInfo, saveIdRecipe}}
        >
            {props.children}
        </ModalContext.Provider>
    );
}

export default ModalProvider;