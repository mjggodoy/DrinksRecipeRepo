import React, {createContext, useState, useEffect} from 'react';
import axios from 'axios';

export const ModalContext = createContext();

const ModalProvider = (props) => {

    const [idrecipe, saveIdRecipe] = useState();
    const [recipe, saveRecipe] = useState({});


    useEffect(() => {
        const retrieveRecipeById = async() => {
            if (idrecipe !== undefined) {
                const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idrecipe}`;
                await axios.get(url).then((response) => {
                    const recipes = response.data.drinks[0];
                    saveRecipe(recipes);
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
                        console.error(error.config);
                    });
            }
            
        }   
        retrieveRecipeById();
    }, [idrecipe]); 

    return(
        <ModalContext.Provider
            value={{saveIdRecipe}}
        >
            {props.children}
        </ModalContext.Provider>
    );
}

export default ModalProvider;