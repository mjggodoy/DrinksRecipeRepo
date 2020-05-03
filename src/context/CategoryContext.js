import React, {createContext, useState, useEffect} from 'react';
import axios from 'axios';

export const CategoryContext = createContext();

const CategoryProvider = (props) => {
    
    const [category, saveCategory] = useState([]);

    useEffect(() => {
        const getAllCategoriesFromApi = async() => {
            const url = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list";
            const response = await axios.get(url).then((response) => {
                const categoryDrinks = response.data.drinks;
                saveCategory(categoryDrinks);
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
        getAllCategoriesFromApi();
    }, [])

    return(
        <CategoryContext.Provider
            value={category}
        >
            {props.children}
        </CategoryContext.Provider>
    );
}

export default CategoryProvider;
