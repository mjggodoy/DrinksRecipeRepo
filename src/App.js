import React from 'react';
import Header from './components/Header';
import Form from './components/Form';
import CategoryProvider from './context/CategoryContext';
import RecipeProvider from './context/RecipeContext';
import RecipeList from './components/RecipeList';

function App() {
  return (
    <RecipeProvider>
      <CategoryProvider>
        <Header/>
          <div className="container mt-4">
          <div className="row">
            <Form/>
          </div>
          <RecipeList/>
        </div>
      </CategoryProvider>
    </RecipeProvider>
  );
}

export default App;
