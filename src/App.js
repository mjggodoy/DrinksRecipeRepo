import React from 'react';
import Header from './components/Header';
import Form from './components/Form';
import CategoryProvider from './context/CategoryContext';
import RecipeProvider from './context/RecipeContext';

function App() {
  return (
    <RecipeProvider>
      <CategoryProvider>
        <Header/>
          <div className="container mt-4">
          <div className="row">
            <Form/>
          </div>
        </div>
      </CategoryProvider>
    </RecipeProvider>
  );
}

export default App;
