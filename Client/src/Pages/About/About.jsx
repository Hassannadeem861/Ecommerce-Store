import React from "react";
// import Layout from "../../Components/Layout/Layout.jsx";
import aboutImage from "../../assets/contactus.jpeg";
import "./About.css";

const About = () => {
  return (
    <div title={"About us - Ecommer app"} style={{ minHeight: "80vh" }}>
      <div className="row contactus " style={{ marginLeft: "30px" }}>
        <div className="col-md-6">
          <img src={aboutImage} alt="contactus" style={{ width: "100%" }} />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            officiis obcaecati esse tempore unde ratione, eveniet mollitia,
            perferendis eius temporibus dicta blanditiis doloremque explicabo
            quasi sunt vero optio cum aperiam vel consectetur! Laborum enim
            accusantium atque, excepturi sapiente amet! Tenetur ducimus aut
            commodi illum quidem neque tempora nam.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
