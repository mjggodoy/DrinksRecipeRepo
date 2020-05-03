import React, {useContext, useState} from 'react';
import {CategoryContext} from '../context/CategoryContext';
import {RecipeContext} from '../context/RecipeContext';

const Form = () => {
    const {category} = useContext(CategoryContext);
    const {saveSearch, retrieveDataErrorSave} = useContext(RecipeContext);
   
    const [searchByUser, saveSearchbyUser] = useState({
        ingredientName: "",
        category: ""
    });
    
    const saveDataFromForm = e => {
        saveSearchbyUser(
            {...searchByUser, [e.target.name]: e.target.value});
    }

    return (
        <form 
            className="col-12"
            onSubmit={e => {
                e.preventDefault();
                saveSearch(searchByUser);
                retrieveDataErrorSave(true);
            }}>
            <fieldset className="text-center"><legend>Search drinks per category/ingredient</legend></fieldset>
                <div className="row mt-5">
                    <div className="col-md-4">
                    <input
                        name="ingredientName"
                        className="form-control"
                        type="text"
                        placeholder="Introduce an ingredient"
                        onChange = {saveDataFromForm}   
                    />
                </div>
                <div className="col-md-4">
                    <select
                        className="form-control"
                        name = "category"
                        onChange = {saveDataFromForm}
                    >
                        <option value="">--Select a category--</option>
                        {category.map((category) => {
                            return(
                                <option key={category.strCategory} value={category.strCategory}>{category.strCategory}</option>
                            );
                        })}
                    </select>
                </div>
                <div className="col-md-4">
                    <input
                        type="submit"
                        className="btn btn-block btn-primary"
                        value="Search recipes"
                    />
                </div>
            </div>
        </form>
    );
}

export default Form;