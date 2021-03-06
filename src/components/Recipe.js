import React, {useContext, useState} from 'react';
import {ModalContext} from './../context/ModalContext';
import Modal from '@material-ui/core/Modal';
import {makeStyles} from '@material-ui/core/styles';

function rand() {
    return Math.round(Math.random() * 20) - 10;
  }  

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();
  
    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
  }
  
  const useStyles = makeStyles((theme) => ({
    drinkStyle: {
        position: 'relative',
        overflow:'scroll',
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        display:'block',
        height:'100%',
        width: '50%',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
  }));

const Recipe = ({recipe}) => {

    const classes = useStyles();
    const [modalStyle] = useState(getModalStyle);
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
    
    const {recipeInfo, saveRecipeInfo, saveIdRecipe} = useContext(ModalContext);
    const showIngredients = recipeInfo => {
        let ingredients = [];
        const ingredientsMaxTotalPerRecipe = 15;
        if (Object.keys(recipeInfo).length !== 0) {
            for (let ingredient = 0;  ingredient<ingredientsMaxTotalPerRecipe; ingredient++) {
                if (recipeInfo[`strIngredient${ingredient}`]) {
                    ingredients.push(<li key={ingredient}>{recipeInfo[`strIngredient${ingredient}`]} {recipeInfo[`strMeasure${ingredient}`]}</li>);
                }
            }
        }
        return ingredients; 
    }

    return(
        <div className="col-md-4 mb-3">
            <div className="card">
                <div className="card-header">{recipe.strDrink}</div>
                <img className="card-img-top" src={recipe.strDrinkThumb} alt={recipe.strDrink}></img>
                <div className="card-body">
                    <button
                        type="button"
                        className="btn btn-block btn-primary"
                        onClick = {() => {
                            saveIdRecipe(recipe.idDrink);
                            handleOpen();
                        }}
                    >
                        See Recipe
                    </button>
                    <Modal
                        open = {open}
                        onClose = {() =>{
                            handleClose();
                            saveRecipeInfo({});
                            saveIdRecipe({});
                        }}
                    >
                        <div style={modalStyle} className={classes.drinkStyle}>
                            <h2>{recipeInfo.strDrink}</h2>
                            <h3 className="mt-4">Instructions</h3>
                            <p>
                                {recipeInfo.strInstructions}
                            </p>
                            <img className="img-fluid my-4" src={recipeInfo.strDrinkThumb}/>
                            <h3>Show ingredients:</h3>
                            <ul>{showIngredients(recipeInfo)}</ul>
                        </div>
                    </Modal>
                </div>
            </div>
        
        </div>
    );
}

export default Recipe;