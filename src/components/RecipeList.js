import React, {useContext} from 'react';
import Recipe from './Recipe';
import {RecipeContext} from '../context/RecipeContext';

const RecipeList = () => {
    const {recipe} = useContext(RecipeContext);

    return (
        <div className="row mt-5">
            {recipe.map((recipe) => {
                return(
                    <Recipe
                        recipe = {recipe}
                        key = {recipe.idDrink}
                    />
            )})} 
        </div>
    );
}

export default RecipeList;

