

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from "./Pages/Home/Home.jsx";
import About from "./Pages/About/About.jsx";
import Contact from "./Pages/Contact/Contact.jsx";
import Policy from "./Pages/Policy/Policy.jsx";
import Navbar from "./Components/Header/Header.jsx";
import Register from "./Pages/Register/Register.jsx";
import Login from "./Pages/Login/Login.jsx";
import PageNotFound from "./Pages/PageNotFound/PageNotFound.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import ForgetPassword from "./Pages/Forget-Password/ForgetPassword.jsx";
import AdminRoute from "./Components/Routes/AdminRoutes.jsx";
import PrivateRoute from "./Components/Routes/Private.jsx";
import UserDashboard from "./Pages/UserDashboard/UserDashboard.jsx";
import AdminDashboard from "./Pages/AdminDashbooard/AdminDashboard.jsx";
import CreateCategory from "./Pages/AdminDashbooard/CreateCategory.jsx";
import CreateProduct from "./Pages/AdminDashbooard/CreateProduct.jsx";
import Users from "./Pages/AdminDashbooard/Users.jsx";
import Orders from "./Pages/UserDashboard/orders.jsx";
import Profile from "./Pages/UserDashboard/profile.jsx";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/dashboard" element={<PrivateRoute />} >
            <Route path="user" element={<UserDashboard />} />
            <Route path="user/profile" element={<Orders />} />
            <Route path="user/orders" element={<Profile />} />
          </Route>

          <Route path="/dashboard" element={<AdminRoute />} >
            <Route path="admin" element={<AdminDashboard />} />
            <Route path="admin/create-category" element={<CreateCategory />} />
            <Route path="admin/create-product" element={<CreateProduct />} />
            <Route path="admin/users" element={<Users />} />
          </Route>



          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route path="*" element={<PageNotFound />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
