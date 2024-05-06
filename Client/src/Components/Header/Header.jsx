import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css"; // Separate CSS file for additional styling
import { FaShoppingCart } from "react-icons/fa";
// import Layout from "../Layout/Layout.jsx";
import { toast } from "react-toastify";
import { useAuth } from "../Context-Api/Auth.jsx";

const Header = () => {
  const [auth, setAuth] = useAuth();

  const handleLogout = async () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("Logout Successfully");
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="#">
            <FaShoppingCart /> Ecommerce
          </Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/" aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/catergory">
                  Catergory
                </Link>
              </li>
              {!auth.user ? (

                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/register">
                      Register
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/login">
                      Login
                    </Link>
                  </li>
                </>
              ) : (
                <>

                  <li className="nav-item dropdown">
                    <NavLink className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      {auth.user.name}
                    </NavLink>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li><NavLink to="/dashboard" className="dropdown-item">Dashboard</NavLink></li>

                      <li onClick={handleLogout} className="nav-item">
                        <Link className="dropdown-item" to="/login">
                          Logout
                        </Link>
                      </li>

                    </ul>
                  </li>
                </>
              )}
              <li className="nav-item">
                <Link className="nav-link" to="/cart">
                  Cart(0)
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
