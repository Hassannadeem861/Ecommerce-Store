import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { json, useNavigate } from "react-router-dom";
import "./ForgetPassword"; // Import CSS file for form styling
// import Layout from "../../Components/Layout/Layout.jsx";
// import { useAuth } from "../../Components/Context-Api/Auth.jsx";

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

const ForgetPassword = () => {
  const [register, setRegister] = useState({
    email: "",
    newPassword: "",
    answer: "",
  });

  // const [auth, setAuth] = useAuth();
  // console.log("auth :", auth);

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
        "http://localhost:8080/api/v1/forget-password",
        register
      );
      console.log("create response in backend: ", response.data);
      setRegister({
        email: "",
        newPassword: "",
        answer: "",
      });

      if (response.data) {
        toast.success(response?.data.message);
        navigate("/login");
        // setAuth({
        //   ...auth,
        //   user: response.data.user,
        //   token: response.data.token,
        // });
        // localStorage.setItem("auth", JSON.stringify(response.data));
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
      <h2>Forget Password</h2>
      <form onSubmit={submitHandler}>
        <InputField
          label="Email address"
          type="email"
          name="email"
          value={register.email}
          onChange={inputHandler}
        />
        <InputField
          label="New password"
          type="password"
          name="newPassword"
          value={register.newPassword}
          onChange={inputHandler}
        />
        <InputField
          label="Answer"
          type="text"
          name="answer"
          value={register.answer}
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

        <button type="submit" className="btn btn-primary">
          Rest Password
        </button>
      </form>
    </div>
  );
};

export default ForgetPassword;
