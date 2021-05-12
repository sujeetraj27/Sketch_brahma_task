import React, { useEffect, useState } from 'react'
import Recipes from './Recipes'
export default function Firstapi() {

   const APP_ID = '235270a8'
   const APP_KEY = 'f6c1116535016fa536524ad6b75e696e'
   
 const [recipes, setRecipes] = useState([]);
 const [search, setSearch] = useState ('');
 const [query, setQuery] = useState ('chicken')

   useEffect(() =>{
       getRecepis();
   }, [query]);

   const getRecepis = async () =>{
       const responce = await fetch(
        `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
       );
       const data = await responce.json();
       setRecipes(data.hits);
       console.log(data.hits)
   };
   const updateSearch = e =>{
    setSearch(e.target.value);
   }

   const getSearch = e =>{
       e.preventDefault();
       setQuery(search)
       setSearch('')
   }

    return (
        <div>
            <form onSubmit={getSearch} className="search-form">
                <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
                <button className="search-button" type="submit" >Search
                </button>
            </form>
            {recipes.map(recipe =>(
                <Recipes 
                key ={recipe.recipe.label}
                title = {recipe.recipe.label}
                calories = { recipe.recipe.calories}
                image = {recipe.recipe.image}
                ingeridents = {recipe.recipe.ingredients}
                />
            ))}
        </div>
    )
}
