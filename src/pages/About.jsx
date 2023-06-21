import React from 'react'
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <main class="page">
    <section class="about-page">
      <article>
        <h2>I'm baby coloring book poke taxidermy</h2>
        <p>
          Taxidermy forage glossier letterpress heirloom before they sold out
          you probably haven't heard of them banh mi biodiesel chia.
        </p>
        <p>
          Taiyaki tumblr flexitarian jean shorts brunch, aesthetic salvia
          retro.
        </p>
        <Link to='single' class="btn"> contact </Link>
      </article>
      
      <img
        src="./assets/about.jpeg"
        alt="Person Pouring Salt in Bowl"
        class="img about-img"
      />
    </section>
    <section class="featured-recipes">
      <h5 class="featured-title">Look At This Awesomesouce!</h5>
      <div class="recipes-list">
        
        <Link to='/single' class="recipe">
          <img
            src="./assets/recipes/recipe-1.jpeg"
            class="img recipe-img"
            alt=""
          />
          <h5>Carne Asada</h5>
          <p>Prep : 15min | Cook : 5min</p>
        </Link>
       
        <Link to='/single' class="recipe">
          <img
            src="./assets/recipes/recipe-2.jpeg"
            class="img recipe-img"
            alt=""
          />
          <h5>Greek Ribs</h5>
          <p>Prep : 15min | Cook : 5min</p>
        </Link>
       
        <Link to='/single' class="recipe">
          <img
            src="./assets/recipes/recipe-3.jpeg"
            class="img recipe-img"
            alt=""
          />
          <h5>Vegetable Soup</h5>
          <p>Prep : 15min | Cook : 5min</p>
        </Link>
        
      </div>
    </section>
  </main>
  )
}

export default About