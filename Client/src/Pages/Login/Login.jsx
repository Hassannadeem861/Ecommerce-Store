import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { json, useNavigate } from "react-router-dom";
import "./Login.css"; // Import CSS file for form styling
// import Layout from "../../Components/Layout/Layout.jsx";
import { useAuth } from "../../Components/Context-Api/Auth.jsx";

const InputField = ({ label, type, name, value, onChange }) => (
  <div className="form-group">
    <label htmlFor={name}>{label}</label>
    <input
      type={type}
      name={name}
      className="form-control"
      value={value}
      onChange={onChange}
    />
  </div>
);

const Login = () => {
  const [register, setRegister] = useState({
    email: "",
    password: "",
  });

  const [auth, setAuth] = useAuth();
  console.log("auth :", auth);

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setRegister((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/login",
        register
      );
      console.log("create response in backend: ", response.data);
      setRegister({
        email: "",
        password: "",
      });

      if (response.data) {
        toast.success(response?.data.message);
        setAuth({
          ...auth,
          user: response.data.user,
          token: response.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(response.data));
        navigate("/");
      } else {
        toast.error(response?.data?.message);
      }
    } catch (error) {
      toast.error(error.message);
      console.error("create error", error);
    }
  };

  return (
    <div className="register-form-container">
      <h2>Login</h2>
      <form onSubmit={submitHandler}>
        <InputField
          label="Email address"
          type="email"
          name="email"
          value={register.email}
          onChange={inputHandler}
        />
        <InputField
          label="Password"
          type="password"
          name="password"
          value={register.password}
          onChange={inputHandler}
        />

        <div className="form-group form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <div className="mb-3">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              navigate("/forget-password");
            }}
          >
            Forget Password
          </button>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;

// import React, { useState } from "react";
// import axios from "axios";
// import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";

// const Register = () => {
//   const [register, setRegister] = useState({
//     name: "",
//     email: "",
//     password: "",
//     role: "",
//   });

//   const inputHandler = (e) => {
//     const { name, value } = e.target;
//     setRegister((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const navigate = useNavigate();

//   const submitHandler = async (e) => {
//     e.preventDefault();

//     try {
//       var response = await axios.post(
//         "http://localhost:8080/api/v1/register",
//         register
//       );
//       console.log("create response in backend: ", response.data); // API se aya hua response
//       setRegister({
//         name: "",
//         email: "",
//         password: "",
//         role: "",
//       });

//       if (response.data) {
//         toast.success(response?.data.message);
//         navigate("/login"); // Navigate to home page upon successful update
//       } else {
//         toast.error("Failed to update product");
//       }
//     } catch (error) {
//       toast.error(error.message); // Use error.message instead of response.data.message
//       console.error("create error", error);
//     }
//   };
//   return (
//     <div>
//       <form onSubmit={submitHandler}>
//         <div className="mb-3">
//           <label htmlFor="exampleInputName" className="form-label">
//             Name
//           </label>
//           <input
//             type="text"
//             name="name"
//             className="form-control"
//             onChange={inputHandler}
//             value={register.name}
//             id="name"
//             required
//             aria-describedby="emailHelp"
//           />
//           <label htmlFor="exampleInputEmail1" className="form-label">
//             Email address
//           </label>
//           <input
//             type="email"
//             className="form-control"
//             onChange={inputHandler}
//             value={register.email}
//             name="email"
//             id="exampleInputEmail1"
//             aria-describedby="emailHelp"
//           />
//           <div id="emailHelp" className="form-text">
//             We'll never share your email with anyone else.
//           </div>
//         </div>
//         <div className="mb-3">
//           <label htmlFor="exampleInputPassword1" className="form-label">
//             Password
//           </label>
//           <input
//             type="password"
//             className="form-control"
//             name="password"
//             value={register.password}
//             // id="exampleInputPassword1"
//             onChange={inputHandler}
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="exampleInputPassword1" className="form-label">
//             Role
//           </label>
//           <input
//             type="text"
//             name="role"
//             onChange={inputHandler}
//             value={register.role}
//             className="form-control"
//             id="exampleInputPassword1"
//           />
//         </div>
//         <div className="mb-3 form-check">
//           <input
//             type="checkbox"
//             className="form-check-input"
//             id="exampleCheck1"
//           />
//           <label className="form-check-label" htmlFor="exampleCheck1">
//             Check me out
//           </label>
//         </div>
//         <button type="submit" className="btn btn-primary">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Register;
