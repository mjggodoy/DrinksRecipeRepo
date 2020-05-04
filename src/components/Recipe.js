import React from 'react';

const Recipe = ({recipe}) => {
    return(
        <div className="col-md-4 mb-3">
            <div className="card">
                <div className="card-header">{recipe.strDrink}</div>
                <img className="card-img-top" src={recipe.strDrinkThumb} alt={recipe.strDrink}></img>
                <div className="card-body">
                    <button
                        type="button"
                        className="btn btn-block btn-primary"
                    >
                        See Recipe
                    </button>

                </div>
            </div>
        
        </div>
    );
}

export default Recipe;