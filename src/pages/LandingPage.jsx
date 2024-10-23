import React from 'react'
import './landingPage.css'
import hero from "../assets/online-shopping-shipping-internet-commerce-concept.jpg"
import gifts from "../assets/gifts-golden-shopping-cart-with-copy-space.jpg"
import wear from "../assets/pexels-solliefoto-298863.jpg"
import shop from "../assets/download1.jpg"

function LandingPage() {
  return (
    <>
    <div className="landing-page">
      <section className="hero-section">
        <img 
          src={hero} 
          alt="E-commerce Hero" 
          className="hero-image"
        />
        <div className="hero-text">
          <h1>Welcome to Fashion Hub</h1>
          <p>Your one-stop shop for the latest trends in fashion</p>
        </div>
      </section>

      <section className="products-section">
        <h2>Explore Our Collection</h2>
        <div className="products-container">
          <div className="product-item">
            <img src={gifts} alt="Shirt" />
            <p>Stylish Shopping</p>
          </div>
          <div className="product-item">
            <img src={wear} alt="Shoes" />
            <p>Trendy Shoes</p>
          </div>
          <div className="product-item">
            <img src={shop} alt="Clothes" />
            <p>Fashionable Clothes</p>
          </div>
        </div>
      </section>

      <footer className="footer-section">
        <p>© 2024 Fashion Hub. All rights reserved.</p>
        <p>Contact us at: support@fashionhub.com</p>
      </footer>
    </div>
    
    </>
  )
}

export default LandingPage;