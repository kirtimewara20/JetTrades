import React from "react";
import "./transport.scss";
import transport from "../../assets/image-removebg-preview 1.png";
import logo from "../../assets/company-logo.png";
import multi from "../../assets/Footer Trucks.webp";
import { useNavigate } from "react-router-dom";

const Transport = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* <div class="line-container">
        <div class="red-line"></div>
        <div class="image-container">
          <img src={multi} alt="TruckImage" class="truck-image" />
        </div>
      </div> */}
      <img src={multi} alt="" className="red-line-truck" />

      <div className="col-12 d-flex justify-content-between contenttt mt-0">
        <div className="col-4  d-flex flex-column content-logo">
          <h6>Transportation Company- </h6>
          <h1>
            Jet Trade<br></br> Logistics
          </h1>
        </div>
        <div className="col-8 col-md-8 col-sm-8 d-flex flex-column content-with-btn">
          <p className="logo-para">
            Ready to streamline your shipping process? Contact our sales team at
            Jettrade Logistics today. Our experts are here to help you find the
            perfect logistics solutions tailored to your business needs. Get in
            touch now to start optimizing your global trade operations.
          </p>
          <button className="logo-button" onClick={() => navigate("/contact")}>
            Contact Sales
          </button>
        </div>
      </div>
    </>
  );
};

export default Transport;
