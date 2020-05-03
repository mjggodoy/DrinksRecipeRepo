import React, {useContext} from 'react';
import {RecipeContext} from '../context/RecipeContext';

const Recipe = ({recipe}) => {
    return(
        <div className="col-md-4 mb-3">
            <div className="card">
            <div className="card-header">{recipe.strDrink}</div>
            </div>
        </div>
    );
}

export default Recipe;