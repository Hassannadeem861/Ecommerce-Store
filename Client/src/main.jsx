import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import "./index.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "./Components/Context-Api/Auth.jsx";

ReactDOM.render(
  <AuthProvider>
    <App />
    <ToastContainer position="top-right" autoClose={2000} />
  </AuthProvider>,
  document.getElementById("root")
);



// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
// import "./index.css";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import AuthProvider from "./Components/Context-Api/Auth.jsx";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <AuthProvider>
//     <App />
//     <ToastContainer position="top-right" autoClose={2000} />
//   </AuthProvider>
// );
