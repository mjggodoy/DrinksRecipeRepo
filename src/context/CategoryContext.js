import React, {createContext, useState} from 'react';

export const CategoryContext = createContext();

const CategoryProvider = (props) => {
    
    const [category, saveCategory] = useState("");

    return(
        <CategoryContext.Provider
            value={category}
        >
            {props.children}
        </CategoryContext.Provider>
    );
}

export default CategoryProvider;
