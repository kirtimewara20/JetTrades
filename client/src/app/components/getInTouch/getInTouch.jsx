import React from "react";
import "./getInTouch.scss";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const GetInTouch = () => {
  const navigate = useNavigate();
  return (
    <div className="col-12 d-flex touch justify-content-between mt-5 ">
      <div className=" get-touch">
        <h1 className="touch-1">Get In</h1>
        <h1 className="touch-2">Touch</h1>
      </div>

      <div className="col-8 touch-left">
        <p className="left-para">
          Committed to helping you navigate the complexities of the logistics
          industry. Contact us today to learn more about how we can meet your
          logistics needs.
        </p>
       
          <button   onClick={()=>{
          navigate("/contact")
        }} className="left-button mt-3 ">Contact Us</button>
        
      </div>
    </div>
  );
};

export default GetInTouch;
