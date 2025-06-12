import React from 'react';
import './App.css';
import SplashCursor from './splashcursor.js'
import { Instagram } from "lucide-react";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

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
    <section id="about" className="about-section px-6 py-10 bg-white text-gray-800">
      <h2 className="text-3xl font-bold mb-6 text-center">About Zelion Cricket</h2>

      <div className="about-content max-w-3xl mx-auto">
        <div className="about-text space-y-5 text-lg leading-relaxed">
          <p>
            At <strong>Zelion Cricket</strong>, we are committed to excellence in sports craftsmanship.
            Specializing in premium-grade cricket balls, our brand is synonymous with precision engineering,
            durability, and uncompromising quality.
          </p>

          <p>
            Trusted by professional athletes, cricket academies, and clubs nationwide, our products are the result
            of rigorous design and testing processes. Whether on the pitch or in the nets, Zelion Cricket delivers
            consistent performance that athletes can rely on.
          </p>

          <p>
            We combine innovation with tradition — integrating modern materials with time-tested techniques to create
            gear that not only performs but also inspires. At Zelion, we don't just manufacture cricket balls; we shape
            champions.
          </p>

          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-pink-600 hover:to-yellow-600 text-white font-medium py-2 px-4 rounded-full transition duration-300 w-fit"
          >
            <Instagram size={20} />
            Follow Us
          </a>
        </div>
      </div>
    </section>
  );
}

function GallerySection() {
 return (
 <section id="Gallery-section" className="gallery-section">
 <img src="\images\zel.webp" alt="zelion" className="gallery-logo "/>
 </section>
 );
 }

function Products() {
  const bestSellers = [
    {
      name: "Zelion Pro Cricket Ball",
      image: "/images/ball1.webp",
      price: "₹499",
      description: "Official grade Cricket ball used in tournaments.",
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
            <a href="https://zelioncricket.com/#products" className="buy-button"> Buy Now </a>
          </div>
        ))}
      </div>

      <div className="shop-more-wrapper">
        <a href="https://zelioncricket.com/#products" className="shop-more-button">🛍️ Shop More</a>
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
    <section id="contact" className="contact-section">
      <h2>Contact Us</h2>
      <p>Email us at: <a href="mailto:contact@zelioncricket.com">contact@zelioncricket.com</a></p>

      <div className="contact-cards">
        <a href="https://www.instagram.com/zelioncricket" target="_blank" rel="noopener noreferrer" className="contact-card instagram">
          <img src="/images/insta.webp" alt="Instagram" />
          <span>Follow on Instagram</span>
        </a>

        <a href="https://zelioncricket.com" target="_blank" rel="noopener noreferrer" className="contact-card website">
          <img src="/images/test.webp" alt="Website" />
          <span>Visit Our Website</span>
        </a>

        <a href="https://wa.me/918891401700" target="_blank" rel="noopener noreferrer" className="contact-card whatsapp">
          <img src="/images/whatsapp.jpg" alt="WhatsApp" />
          <span>Chat on WhatsApp</span>
        </a>
      </div>
    </section>
  );
}


function Offers() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_h4mxorr',    // Replace with your actual EmailJS service ID
      'template_khp9f2m',   // Replace with your actual EmailJS template ID
      form.current,
      'r9v1YPjem0qJHhF8K'     // Replace with your actual EmailJS public key
    )
    .then((result) => {
        console.log('Email sent successfully:', result.text);
        alert('Thank you for subscribing!');
    })
    .catch((error) => {
        console.error('Error sending email:', error.text);
        alert('Something went wrong. Please try again.');
    });

    e.target.reset(); // Reset form fields after submit
  };

  return (
    <section id="offers" className="offer-section">
      <h2>Subscribe for Offers</h2>
      <form ref={form} onSubmit={sendEmail} className="offer-form">

        <input 
          type="email" 
          name="user_email" 
          placeholder="your@email.com" 
          required 
        />
        <button type="submit">Subscribe</button>
      </form>
    </section>
  );
}

function Support() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_h4mxorr',    // Replace with your actual EmailJS service ID
      'template_y57sfya',   // Replace with your actual EmailJS template ID
      form.current,
      'r9v1YPjem0qJHhF8K'     // Replace with your actual EmailJS public key
    )
    .then((result) => {
        console.log('Message sent successfully:', result.text);
    })
    .catch((error) => {
        console.error('Error sending message:', error.text);
        alert('Something went wrong. Please try again.');
    });

    e.target.reset(); // Reset form fields after submit
  };

  return (
    <section id="offers" className="offer-section">
      <h2><b>Send Feedbacks : </b></h2>
      <form ref={form} onSubmit={sendEmail} className="offer-form">

        <input 
          type="message" 
          name="user_email" 
          placeholder="Message..." 
          required 
        />
        <button type="submit">Send</button>
      </form>
    </section>
  );
}

function App() {
 return (
 <div>
 <SplashCursor />
 <Navbar />
 <Home />
 <GallerySection/>
 <Offers/>
 <About />
 <Products />
 <Testimonials />
 <Contact />
 <Support />
 </div>
 );
}

export default App;
