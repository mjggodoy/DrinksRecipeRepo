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
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
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
    
    const {saveIdRecipe} = useContext(ModalContext);

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
                    >
                        <div style={modalStyle} className={classes.paper}>

                            <h1>FROM MODAL</h1>
                        </div>
                    </Modal>
                </div>
            </div>
        
        </div>
    );
}

export default Recipe;