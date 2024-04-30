import React from "react";
// import Layout from "../../Components/Layout/Layout.jsx";
import "./PageNotFound.css"; // Separate CSS file for styling
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div>
      <div className="page-not-found-container">
        <h1>Oops! Page Not Found</h1>
        <p>The page you are looking for does not exist.</p>
        <p>Please check the URL or go back to the homepage.</p>
        {/* Add a link to the homepage or any other relevant page */}
        <br />
        <Link to={"/"}>
          <button type="button" class="btn btn-primary">
           Go to home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
