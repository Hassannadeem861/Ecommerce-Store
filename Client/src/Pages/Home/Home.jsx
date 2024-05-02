import React from "react";
import "./Home.css";
import ContactImage from "../../assets/contactus.jpeg";
// import { useAuth } from "../../../src/Components/Context-Api/Auth.jsx";
// <pre>{JSON.stringify(auth, null, 4)}</pre>

const Home = () => {
  // const [auth, setAuth] = useAuth();
  return (
    <div className="home-container" style={{ minHeight: "80vh" }}>
      <div className="home-container">
        {/* Hero Section */}
        <div className="hero-section">
          <h1>Welcome to Your Ecommerce Store</h1>
          <p>Discover amazing products at great prices.</p>
          <button className="cta-button">Shop Now</button>
        </div>

        {/* Featured Products */}
        <div className="featured-products">
          {/* Product cards */}
          <div className="product-card">
            <img style={{ width: "200px" }} src={ContactImage} alt="Product" />
            <h3>Product Name</h3>
            <p>$99.99</p>
            <button>Add to Cart</button>
          </div>
          {/* More product cards */}
        </div>

        {/* Testimonials */}
        <div className="testimonials-section">
          <h2>What Our Customers Say</h2>
          <div className="testimonial">
            <img src={ContactImage} alt="Customer" />
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit."</p>
            <span>- Hassan Nadeem </span>
          </div>
          {/* More testimonials */}
        </div>
      </div>
    </div>
  );
};

export default Home;


// <div className="home-container">
//   {/* Hero Section */}
//   <div className="hero-section">
//     <h1>Welcome to Your Ecommerce Store</h1>
//     <p>Discover amazing products at great prices.</p>
//     <button className="cta-button">Shop Now</button>
//   </div>

//   {/* Featured Products */}
//   <div className="featured-products">
//     {/* Product cards */}
//     <div className="product-card">
//       <img style={{ width: "200px" }} src={ContactImage} alt="Product" />
//       <h3>Product Name</h3>
//       <p>$99.99</p>
//       <button>Add to Cart</button>
//     </div>
//     {/* More product cards */}
//   </div>

//   {/* Testimonials */}
//   <div className="testimonials-section">
//     <h2>What Our Customers Say</h2>
//     <div className="testimonial">
//       <img src={ContactImage} alt="Customer" />
//       <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit."</p>
//       <span>- Hassan Nadeem </span>
//     </div>
//     {/* More testimonials */}
//   </div>
// </div>;
