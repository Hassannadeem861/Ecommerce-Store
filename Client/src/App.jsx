// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./Pages/Home/Home.jsx";
// // import About from "./Pages/About/About.jsx";
// // import Contact from "./Pages/Contact/Contact.jsx";
// // import Policy from "./Pages/Policy/Policy.jsx";
// // import PageNotFound from "./Pages/PageNotFound/PageNotFound.jsx";
// import Register from "./Pages/Register/Register.jsx";
// import Login from "./Pages/Login/Login.jsx";
// import "./App.css";

// const App = () => {
//   return (
//     <>
//       <BrowserRouter>

//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/register" element={<Register />} />
//           <Route path="/login" element={<Login />} />
//         </Routes>
//       </BrowserRouter>
//     </>
//   );
// };

// export default App;

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
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
    </div>
  );
};

export default App;
