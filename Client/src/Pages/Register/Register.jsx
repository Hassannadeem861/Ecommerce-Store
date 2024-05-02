// import React, { useState } from "react";
// import axios from "axios";
// import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";
// // import Layout from "../../Components/Layout/Layout.jsx";
// import "./Register.css";

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
//       <form className="register-form-container" onSubmit={submitHandler}>
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
//           <br/>
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

import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "./Register.css"; // Import CSS file for form styling

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

const Register = () => {
  const [register, setRegister] = useState({
    name: "",
    email: "",
    password: "",
    answer: "",
    role: "",
  });
  // const [answer, setAnswer] = useState("");

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
        "http://localhost:8080/api/v1/register",
        register
      );
      console.log("create response in backend: ", response.data);
      setRegister({
        name: "",
        email: "",
        password: "",
        answer: "",
        role: "",
      });

      if (response.data) {
        toast.success(response?.data?.message);
        navigate("/login");
      } else {
        toast.error(response?.data?.message);
      }
    } catch (error) {
      toast.error(error);
      console.error("create error", error);
    }
  };

  return (
    <div>
      <form className="register-form-container" onSubmit={submitHandler}>
        <h2>Register</h2>
        <InputField
          label="Name"
          type="text"
          name="name"
          required
          value={register.name}
          onChange={inputHandler}
        />
        <InputField
          label="Email address"
          type="email"
          name="email"
          required
          value={register.email}
          onChange={inputHandler}
        />
        <InputField
          label="Password"
          type="password"
          name="password"
          required
          value={register.password}
          onChange={inputHandler}
        />
        <InputField
          label="Role"
          type="text"
          name="role"
          required
          value={register.role}
          onChange={inputHandler}
        />
        <InputField
          label="answer"
          type="text"
          name="answer"
          required
          value={register.answer}
          onChange={inputHandler}
          placeholder="What is your favourite spot"
          style={{ color: "black" }} // Inline CSS style
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
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Register;
