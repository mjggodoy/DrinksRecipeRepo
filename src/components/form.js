import React from 'react';

const Form = () => {
    return (
        <form className="col-12">
            <fieldset className="text-center"><legend>Search drinks per category/ingredient</legend></fieldset>
                <div className="row mt-5">
                    <div className="col-md-4">
                    <input
                        name="ingredientName"
                        className="form-control"
                        type="text"
                        placeholder="Introduce an ingredient"
                        
                    />
                </div>
                <div className="col-md-4">
                    <select
                        className="form-control"
                        name = "category"
                    >
                        <option value="">--Select a category--</option>
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