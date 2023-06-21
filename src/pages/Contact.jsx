import React from 'react'

const Contact = () => {
  return (
    <main className="page">
     <section className="contact-container">
          <article className="contact-info">
            <h3>Want To Get In Touch?</h3>
            <p>
              Four dollar toast biodiesel plaid salvia actually pickled banjo
              bespoke mlkshk intelligentsia edison bulb synth.
            </p>
            <p>Cardigan prism bicycle rights put a bird on it deep v.</p>
            <p>
              Hashtag swag health goth air plant, raclette listicle fingerstache
              cold-pressed fanny pack bicycle rights cardigan poke.
            </p>
          </article>
          <article>
            <form className="form contact-form">
              <div className="form-row">
                <label html="name" className="form-label">your name</label>
                <input type="text" name="name" id="name" className="form-input" />
              </div>
              <div className="form-row">
                <label html="email" className="form-label">your email</label>
                <input type="text" name="email" id="email" className="form-input" />
              </div>
              <div className="form-row">
                <label html="message" className="form-label">message</label>
                <textarea name="message" id="message" className="form-textarea"></textarea>
              </div>
              <button type="submit" className="btn btn-block">
                submit
              </button>
            </form>
          </article>
        </section>
     
       <section className="featured-recipes">
        <h5 className="featured-title">Look At This Awesomesouce!</h5>
        <div className="recipes-list">
          
          <a href="single-recipe.html" className="recipe">
            <img
              src="./assets/recipes/recipe-1.jpeg"
              className="img recipe-img"
              alt=""
            />
            <h5>Carne Asada</h5>
            <p>Prep : 15min | Cook : 5min</p>
          </a>
          
          <a href="single-recipe.html" className="recipe">
            <img
              src="./assets/recipes/recipe-2.jpeg"
              className="img recipe-img"
              alt=""
            />
            <h5>Greek Ribs</h5>
            <p>Prep : 15min | Cook : 5min</p>
          </a>
          
          <a href="single-recipe.html" className="recipe">
            <img
              src="./assets/recipes/recipe-3.jpeg"
              className="img recipe-img"
              alt=""
            />
            <h5>Vegetable Soup</h5>
            <p>Prep : 15min | Cook : 5min</p>
          </a>
          
        </div>
      </section>
    </main>
  )
}

export default Contact