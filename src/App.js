import React, { useState, useEffect } from 'react';
import './App.css';

//Importing components
import Recipe from './components/Recipe'

function App() {

  const APP_ID = "7043dba8";
  const APP_KEY = "477868d1d2d6f029700ba9354117fce8";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [searchQuery, setSearchQuery] = useState("chicken");

  useEffect(() =>
  {
    getRecipes();
  },[searchQuery]);

  const getRecipes = async () =>
  {
    try
    {
        const response = await fetch(`https://api.edamam.com/search?q=${searchQuery}&app_id=${APP_ID}&app_key=${APP_KEY}`);
        const data = await response.json();

        setRecipes(data.hits);
    } 
    catch (e) 
    {
        console.log("Error fetching recipe API");
    }
  };

  const updateSearch = e =>
  {
    setSearch(e.target.value);
  };

  const getSearch = e =>
  {
    e.preventDefault();
    setSearchQuery(search);
    setSearch("");
  };

  return (
    <div className="App">
      <form className="search-form" onSubmit={getSearch}>
        <input type="text" className="search-bar" placeholder="Enter a food type..." value={search} onChange={updateSearch}/>
        <button type="submit" className="search-button">Search</button>
      </form>
      <div className="recipes">
        {recipes.map(recipe => (
          <Recipe title={recipe.recipe.label} calories={recipe.recipe.calories} image={recipe.recipe.image} ingredients={recipe.recipe.ingredients} key={recipe.recipe.label}/>
        ))}
      </div>
    </div>
  );
}

export default App;
