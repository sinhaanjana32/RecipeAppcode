import React, {useEffect, useState} from 'react';
import Recipe from   './Recipe';
import './App.css';




const App = ()=> {

  const APP_ID = '9e09c22a';
  const APP_Key= '504a849390f558a3ea3a812960fbabf6';


const [recipes, setRecipes] = useState([]);
const [search,setSearch] =useState('');
const [query, setQuery] = useState('chicken');

useEffect(()=>{getRecipes()}, [query])

const getRecipes = async () =>{
const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_Key}`);
const data = await response.json();
setRecipes(data.hits);
}


const updateSearch = (e) => {
setSearch(e.target.value);
}

const getSearch = (e) =>{
e.preventDefault();
setQuery(search)
setSearch('')
}


return (

<div className="App">
<h1 className="topH">Recipe With React</h1>
<form className="search-form" onSubmit={getSearch}>


<input type="text" className="search-bar" value={search} onChange={updateSearch} placeholder="Type your search.."></input>
<button
   type="submit"
   className="search-button btn btn-primary" >
search </button>
</form>
<div className="recipes">

  {recipes.map(recipe => (
  <Recipe
  key ={recipe.recipe.label}
  title={recipe.recipe.label}
  calories={recipe.recipe.calories}
  image={recipe.recipe.image}
  ingredients = {recipe.recipe.ingredients}
  />

  ))}

</div>
</div>

);

}
export default App;
