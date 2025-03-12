import React from 'react'
import NavBar from '../component/NavBar'
import Recipe from '../component/HomeRecipe'
import Slider from '../component/Slider'
import Feature from '../component/Feature'
import Footer from '../component/Footer'
import HomeRecipe from '../component/HomeRecipe'
import { Link } from "react-router-dom";
const Dashboard = () => {
  return (
    <>
    <NavBar/>
    <Slider/>
    <Feature/>
    <HomeRecipe/>
    
<div class="flex items-center justify-center py-6">
        <Link to="/recipe"><button class="px-6 py-2 transform hover:scale-105 duration-300 hover:text-green-900 text-white font-semibold rounded-lg shadow-lg bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600">
          Shop More
        </button></Link>
      </div>
      
    <Footer/>
    
    </>
  )
}

export default Dashboard