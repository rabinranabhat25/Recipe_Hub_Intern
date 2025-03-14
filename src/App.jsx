
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom' 
import Dashboard from './pages/Dashboard'
import HomeRecipe from './component/HomeRecipe'
import Recipe from './pages/Recipe'

import RecipeDescription from './pagesComponent/RecipeDiscription'

import ShopPage from './pages/createRecipe'



function App() {
  

  return (
    <>
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Dashboard/>}/>
      <Route path='/home_recipe' element={<HomeRecipe/>}/>
      <Route path='/recipe' element={<Recipe/>}/>
      <Route path='/recipe_description/:recipeId' element={<RecipeDescription/>}/>
      <Route path='/addrecipe' element={<ShopPage/>}/>

     
      
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
