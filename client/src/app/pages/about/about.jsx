import React, { useState } from "react";
import "../about/about.scss";
import AboutPage from "../../assets/Truck/About Banner.webp";

import red from "../../assets/Rectangle 198.png";
import truck1 from "../../assets/Truck Image 01.webp";
import truck2 from "../../assets/Truck Image 02.webp";
import Transport from "../../components/transport/transport";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Blogs from "../../components/Blogs/Blogs";

import store1 from "../../assets/store1.jpeg";
import store2 from "../../assets/store3.jpeg";
import warehouse2 from "../../assets/store4.jpeg";
import warehouse3 from "../../assets/store5.jpeg";
import warehouse4 from "../../assets/store6.jpeg";
import warehouse5 from "../../assets/store7.jpeg";
import warehouse6 from "../../assets/store8.jpeg";

import piaggo1 from "../../assets/about/piaggo1.JPG";
import piaggo2 from "../../assets/about/piaggo2.JPG";
import piaggo3 from "../../assets/about/piaggo3.JPG";
import piaggo4 from "../../assets/about/piaggo4.JPG";
import piaggo5 from "../../assets/about/piaggo5.JPG";

import car14 from "../../assets/about/car14.JPG";
import car16 from "../../assets/about/car16.JPG";
import car13 from "../../assets/about/car13.JPG";
import car12 from "../../assets/about/car12.JPG";
import car15 from "../../assets/about/car15.JPG";
import car17 from "../../assets/about/car17.JPG";

import isoMark from "../../assets/Truck/iso.webp";
import truckk1 from "../../assets/Truck/Truck1.png";
import truckk2 from "../../assets/Truck/Truck2.png";
import truck3 from "../../assets/Truck/Truck3.png";
import truck4 from "../../assets/Truck/Truck4.png";
import truck5 from "../../assets/Truck/Truck5.png";
import truck6 from "../../assets/Truck/Truck6.png";
import truck7 from "../../assets/Truck/Truck7.png";
import truck8 from "../../assets/Truck/Truck8.png";
import truck9 from "../../assets/Truck/Truck9.png";
import truck10 from "../../assets/Truck/Truck10.png";
import truck11 from "../../assets/Truck/Truck11.png";

import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const imagess = [
    {
      image: truckk1,
    },
    {
      image: truckk2,
    },
    {
      image: truck3,
    },
    {
      image: truck4,
    },
    {
      image: truck5,
    },
    {
      image: truck6,
    },
    {
      image: truck7,
    },
    {
      image: truck8,
    },

    {
      image: truck9,
    },
    {
      image: truck10,
    },
    {
      image: truck11,
    },
  ];

  // First Deployment
  const [TitleTag, setTitleTage] = useState("Resource center");
  const [contentTag, setContentTag] = useState(
    "We understand that every business has unique logistics needs, and we are here to ensure that your goods are transported safely, efficiently, and on time."
  );
  return (
    <div className="about_main">
      {/* content on about main image */}
      <div className="container about">
        {/* about main image */}
        <img src={AboutPage} alt="Background" className="about-back" />

        {/* about text */}
        <div className="about-content">
          <h1 className="about-heading">About Us</h1>
          <p className="about-paragraph">
            Simplifying global trade with reliable, efficient solutions.
            Tailored services include seamless freight forwarding and expert
            customs clearance, ensuring smooth operations for businesses
            worldwide.
          </p>

          <div className="isoMark">
            <img src={isoMark} alt="logo" />
          </div>
        </div>
      </div>
      {/* lkjfd */}
      {/* 50years */}
      <div class="container about-years-section ">
        <div class="row years-content">
          {/* year left side */}
          <div class="col-lg-5 year-left">
            <h2 className="year-heading ms-4">Trusted By</h2>
            <img
              src={red}
              alt="Image"
              class="img-fluid"
              className="position-absolute year-img"
            />
            <h1 className="position-relative p-4 display-1 text-white fw-bold year-50">
              500+ MNCs
            </h1>
          </div>

          {/* year-right-side */}
          <div class="col-lg-7 year-right">
            <p className="year-paragraph mx-4">
              Expertise of Experience is the cornerstone of success in
              transportation and logistics. Our skilled workforce and
              state-of-the-art equipment ensure flawless transportation,
              including Hydraulic Axles and Low Bed Trailers. From navigating
              rough terrain to handling oversized cargo, we excel in challenging
              environments. Safety is our priority, upheld by our
              customer-centric approach and ethical standards.
            </p>
          </div>
        </div>
      </div>

      <br></br>

      {/* slider */}
      <div className="container slider-main">
        <div className="slider-content">
          <Slider {...settings}>
            {imagess.map((item) => {
              return (
                <div>
                  <div className=" slider-images mx-3">
                    <img
                      src={item.image}
                      className="slider-img border"
                      alt=""
                    />
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>

      <br></br>

      {/* first paragraphs */}
      <div class="container mt-5 first-para-main">
        <div class="row first-para-content">
          {/* LHS-two paragraphs */}
          <div class="col-md-7 col-lg-7 first-para-rightside">
            <div class=" first-para-text">
              <div class=" first-para-one">
                <h2 className="fw-bold fs-1">The Initiation</h2>
                <p className="fs-5 pt-2">
                  Jet Road Lines was established in 1978. Based in the heart of
                  India, our journey began with a single-minded vision to
                  revolutionize the transportation sector. Our fleet of
                  customized trucks, coupled with our highly skilled
                  professionals, ensures that cargo transport operations are
                  executed with unparalleled efficiency, reliability, and
                  safety.
                </p>
              </div>

              <div class=" first-para-two">
                <h2 className="fw-bold fs-1">We are the Jet Trade</h2>
                <h2 className="fw-bold fs-1">and Logistics</h2>
                <p className="fs-5 pt-2">
                  In 2018, we proudly incorporated Jet Trade and Logistics (I)
                  Pvt Ltd as a sister company to Jet Road Lines, further
                  expanding our reach and capabilities. Today, we serve over 80
                  clients across Central and Western India, offering world-class
                  quality management in transportation, warehousing, and 3PL
                  services.
                </p>
              </div>
            </div>
          </div>
          {/* RHS-paragraph image */}
          <div class="col-md-5 col-lg-5 first-paragraph-image">
            <img src={truck1} alt="Image" class=" img-fluid" />
          </div>
        </div>
      </div>

      {/* second paragraphs */}
      <div class="container mt-5 second-para-main">
        <div class="row second-para-content">
          {/* LHS-paragraph image */}
          <div class="col-md-5 col-lg-5 second-paragraph-image">
            <img src={truck2} alt="Image" class="img-fluid" />
          </div>

          {/* RHS-two paragraphs */}
          <div class="col-md-7 col-lg-7  second-para-rightside">
            <div class=" second-para-text">
              <div class=" second-para-one">
                <h2 className="fw-bold fs-1">Serving Customer</h2>
                <h2 className="fw-bold fs-1">PAN INDIA</h2>
                <p className="fs-5 pt-2">
                  After 50 Years of our inception, we have worked with 10,000+
                  clients. Our pan-India reach has not only covered the vast
                  expanse of the country but has also extended to the seven
                  sister-states of the Northeast, a testament to our dedication
                  to serving all corners of India.
                </p>
              </div>

              <div class=" second-para-two">
                <h2 className="fw-bold fs-1">Superior Service,</h2>
                <h2 className="fw-bold fs-1">Pursuing Excellence</h2>
                <p className="fs-5 pt-2">
                  Driven by passion and constant pursuit of excellence, our team
                  of highly skilled individuals is at the core of our success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <br></br>

      {/* Our area and expertise */}
      <div className="container otherExpertise mt-5">
        <h2 class="fs-1 text-center">Warehousing</h2>
        <div class="brands mt-5 mb-5 ">
          <Slider {...settings}>
            <div className="brands-div">
              <img src={store1} className="img-fluid " alt="" />
            </div>
            <div className="brands-div">
              <img src={warehouse2} className="img-fluid" alt="" />
            </div>
            <div className="brands-div">
              <img src={warehouse3} className="img-fluid" alt="" />
            </div>
            <div className="brands-div">
              <img src={warehouse4} className="img-fluid" alt="" />
            </div>
            <div className="brands-div">
              <img src={warehouse5} className="img-fluid" alt="" />
            </div>
            <div className="brands-div">
              <img src={warehouse6} className="img-fluid" alt="" />
            </div>
          </Slider>
        </div>
      </div>
      {/* RELETED CARS */}
      <div className="container otherExpertise mt-5">
        <h2 class="fs-1 text-center">Automobile Services</h2>
        <div class="brands mt-5 mb-5 ">
          <Slider {...settings}>
            <div className="brands-div">
              <img src={piaggo4} className="img-fluid " alt="" />
            </div>
            <div className="brands-div">
              <img src={piaggo2} className="img-fluid" alt="" />
            </div>
            <div className="brands-div">
              <img src={piaggo3} className="img-fluid" alt="" />
            </div>
            <div className="brands-div">
              <img src={piaggo4} className="img-fluid" alt="" />
            </div>
            <div className="brands-div">
              <img src={piaggo5} className="img-fluid" alt="" />
            </div>
            <div className="brands-div">
              <img src={piaggo3} className="img-fluid" alt="" />
            </div>
          </Slider>
        </div>
      </div>
      {/* PIAGGO */}
      <div className="container otherExpertise mt-5">
        <h2 class="fs-1 text-center">Rental Services</h2>
        <div class="brands mt-5 mb-5 ">
          <Slider {...settings}>
            <div className="brands-div">
              <img src={car14} className="img-fluid " alt="" />
            </div>
            <div className="brands-div">
              <img src={car16} className="img-fluid" alt="" />
            </div>
            <div className="brands-div">
              <img src={car13} className="img-fluid" alt="" />
            </div>
            <div className="brands-div">
              <img src={car12} className="img-fluid" alt="" />
            </div>
            <div className="brands-div">
              <img src={car15} className="img-fluid" alt="" />
            </div>
            <div className="brands-div">
              <img src={car17} className="img-fluid" alt="" />
            </div>
          </Slider>
        </div>
      </div>
      <br></br>

      <Blogs TitleTag={TitleTag} contentTag={contentTag} checkView={false} />
      <div
        style={{
          justifyContent: "center",
          display: "flex",
        }}
        onClick={() => {
          navigate("/resource");
          window.scrollTo(0, 0);
        }}
      >
        <button
          style={{
            backgroundColor: "red",
            color: "white",
            textAlign: "center",
            borderColor: "red",
            padding: "0.5rem 1rem",
            border: "none",
            borderRadius: "8px",
            fontSize: "1rem",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Explore More
        </button>
      </div>
      <Transport />
    </div>
  );
};

export default About;
