import React, { useState, useEffect } from "react";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";

const Layout = ({ Children }) => {
  return (
    <>
      <Header />
      <main style={{ minHeight: "60vh" }}>{Children}</main>
      <Footer />
    </>
  );
};

export default Layout;
