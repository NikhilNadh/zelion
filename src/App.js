import React from 'react';
import './App.css';
import SplashCursor from './splashcursor.js'


function Navbar() {
 return (
 <nav className="navbar">
 <img src="/images/logo3.webp" alt="Zelion Logo" />
 <div>
 <a href="#home">Home</a>
 <a href="#about">About</a>
 <a href="#products">Products</a>
 <a href="#testimonials">Testimonials</a>
 <a href="#contact" className="contact-btn">Contact Us</a>
 </div>
 </nav>
 );
}


function Home() {
 return (
 <section id="home" className="home-section">
 <img src="/images/test.webp" alt="Zelion" className="home-logo tilt-on-hover" />
 </section>
 );
}

function About() {
  return (
    <section id="about" className="about-section">
      <h2>About Zelion Cricket</h2>

      <div className="about-content">
        <div className="about-text">
          <p>
            At <strong>Zelion Cricket</strong>, we are committed to excellence in sports craftsmanship. Specializing in premium-grade cricket balls, our brand is synonymous with precision engineering, durability, and uncompromising quality.
          
          </p>

          <p>
            Trusted by professional athletes, cricket academies, and clubs nationwide, our products are the result of rigorous design and testing processes. Whether on the pitch or in the nets, Zelion Cricket delivers consistent performance that athletes can rely on.
          </p>

          <p>
            We combine innovation with tradition — integrating modern materials with time-tested techniques to create gear that not only performs but also inspires. At Zelion, we don't just manufacture cricket balls; we shape champions.
          </p>

          <a
            href="https://www.instagram.com/" 
            target="_blank"
            rel="noopener noreferrer"
            className="instagram-link"
          >
            Click Here 👉 Follow Us on Instagram
          </a>
        </div>

       
      </div>
    </section>
  );
}


function Products() {
  const bestSellers = [
    {
      name: "Zelion Pro Cricket Ball",
      image: "/images/ballzel.webp",
      price: "₹499",
      description: "Official grade tennis ball used in county tournaments.",
    },
    
  ];

  return (
    <section id="products" className="products-section">
      <h2>🏏 Most Bought Product 🏏</h2>
      <p>Explore our premium cricket balls loved by professionals and clubs alike.</p>

      <div className="product-grid">
        {bestSellers.map((product, index) => (
          <div className="product-card" key={index}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p className="product-description">{product.description}</p>
            <p className="product-price">{product.price}</p>
            <button className="buy-button">Buy Now</button>
          </div>
        ))}
      </div>

      <div className="shop-more-wrapper">
        <a href="#shop" className="shop-more-button">🛍️ Shop More</a>
      </div>
    </section>
  );
}


function Testimonials() {
 return (
 <section id="testimonials">
 <h2>What Players Say</h2>
 <p>"Zelion balls changed the game for me!" - Pro Cricketer</p>
 </section>
 );
}

function Contact() {
 return (
 <section id="contact">
 <h2>Contact Us</h2>
 <p>Email us at: contact@zelioncricket.com</p>
 </section>
 );
}

function App() {
 return (
 <div>
 <SplashCursor />
 <Navbar />
 <Home />
 <About />
 <Products />
 <Testimonials />
 <Contact />
 </div>
 );
}

export default App;
