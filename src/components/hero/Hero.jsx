import React from 'react'
import './hero.css';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <main className="page">
   
    <header className="hero">
      <div className="hero-container">
        <div className="hero-text">
          <h1>simply recipes</h1>
          <h4>no fluff, just recipes</h4>
        </div>
      </div>
    </header>
   
    <section className="recipes-container">
      
      <div className="tags-container">
        <h4>recipes</h4>
        <div className="tags-list">
          <a href="tag-template.html">Beef (1)</a>
          <a href="tag-template.html">Breakfast (2)</a>
          <a href="tag-template.html">Carrots (3)</a>
          <a href="tag-template.html">Food (4)</a>
        </div>
      </div>
      
      <div className="recipes-list">
        
        {/* <a href="single-recipe.html" className="recipe">
          <img
            src="./assets/recipes/recipe-1.jpeg"
            className="img recipe-img"
            alt=""
          />
          <h5>Carne Asada</h5>
          <p>Prep : 15min | Cook : 5min</p>
        </a> */}
        <Link to='/single' className='recipe'>
        <img
            src="./assets/recipes/recipe-1.jpeg"
            className="img recipe-img"
            alt=""
          />
          <h5>Carne Asada</h5>
          <p>Prep : 15min | Cook : 5min</p>
        </Link>
        <Link to='/single' className="recipe">
          <img
            src="./assets/recipes/recipe-2.jpeg"
            className="img recipe-img"
            alt=""
          />
          <h5>Greek Ribs</h5>
          <p>Prep : 15min | Cook : 5min</p>
        </Link>
        
        <Link to='/single' className="recipe">
          <img
            src="./assets/recipes/recipe-3.jpeg"
            className="img recipe-img"
            alt=""
          />
          <h5>Vegetable Soup</h5>
          <p>Prep : 15min | Cook : 5min</p>
        </Link>
        
        <Link to='/single' className="recipe">
          <img
            src="./assets/recipes/recipe-4.jpeg"
            className="img recipe-img"
            alt=""
          />
          <h5>Banana Pancakes</h5>
          <p>Prep : 15min | Cook : 5min</p>
        </Link>
        <Link to='/single' className="recipe">
          <img
            src="./assets/recipes/recipe-4.jpeg"
            className="img recipe-img"
            alt=""
          />
          <h5>Banana Pancakes</h5>
          <p>Prep : 15min | Cook : 5min</p>
        </Link>
        <Link to='/single' className="recipe">
          <img
            src="./assets/recipes/recipe-4.jpeg"
            className="img recipe-img"
            alt=""
          />
          <h5>Banana Pancakes</h5>
          <p>Prep : 15min | Cook : 5min</p>
        </Link>

      </div>
      
    </section>
  </main>
  )
}

export default Hero