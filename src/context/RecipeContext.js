import React, {createContext, useState, useEffect} from 'react';
import axios from 'axios';
export const RecipeContext = createContext();

const RecipeProvider = (props) => {

    const [recipe, saveRecipe] = useState([]);
    const [retrieveDataError, retrieveDataErrorSave] = useState(false);
    const[search, saveSearch] = useState({
        ingredient: "",
        category: ""
    });

    const {ingredientName, category} = search;

    useEffect(() => {
        const getInformationWithPatametersCategoryandIngredient = async() => {
            if (retrieveDataError) {
                const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredientName}&c=${category}`;
                await axios.get(url).then((response) => {
                    const recipes = response.data.drinks;
                    console.log(recipes);
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
        getInformationWithPatametersCategoryandIngredient();
    }, [search])

   return (
    <RecipeContext.Provider
        value={{saveSearch, retrieveDataErrorSave}}
    >
        {props.children}
    </RecipeContext.Provider>
    )
}

export default RecipeProvider;