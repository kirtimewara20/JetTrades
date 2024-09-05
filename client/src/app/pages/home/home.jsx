import React, { useState } from "react";
// import HomePage from "../../assets/Truck/Home Banner.webp";
import HomePage1 from "../../assets/Truck/Home Banner1.png";

import Layer1 from "../../assets/Logo/Logo01.webp";
import Layer2 from "../../assets/Logo/Logo02.webp";
import Layer3 from "../../assets/Logo/Logo03.webp";
import Layer4 from "../../assets/Logo/Logo04.webp";
import Layer5 from "../../assets/Logo/Logo05.webp";
import Layer6 from "../../assets/Logo/Logo06.webp";
import Layer7 from "../../assets/Logo/Logo07.webp";
import Layer8 from "../../assets/Logo/Logo08.webp";
import Layer9 from "../../assets/Logo/Logo09.webp";
import Layer10 from "../../assets/Logo/Logo10.webp";
import Layer11 from "../../assets/Logo/Logo11.webp";
import Layer12 from "../../assets/Logo/Logo12.webp";

import Test1 from "../../assets/Testimonials 01.webp";
import Test2 from "../../assets/Testimonials 02.webp";
import Test3 from "../../assets/Testimonials 03.webp";
import Test4 from "../../assets/Testimonials 04.webp";
import Test5 from "../../assets/Testimonials 05.webp";
import Test6 from "../../assets/Testimonials 06.webp";

import whiteBox from "../../assets/Home Banner Box 03.png";
// import whiteBox from "../../assets/Rectangle 172.png";
import card from "../../assets/Rectangle 169.png";
import service from "../../assets/Group 341.png";
import firstservice from "../../assets/Truck Icon 001.webp";
import secondservice from "../../assets/Truck Icon 002.webp";
import thirdservice from "../../assets/Truck Icon 003 (1).webp";
import fourthservice from "../../assets/Truck Icon 004.webp";
import { useNavigate } from "react-router-dom";
import video from "../../assets/Jet trade and logistics.mp4";
// import map from "../../assets/Group 350.png";
import map from "../../assets/Truck/map.jpeg";
import first from "../../assets/Rectangle 198.png";
import number from "../../assets/500+ MNCs.png";
import "../../pages/home/home.scss";
import Transport from "../../components/transport/transport";
import orange_line from "../../assets/Rectangle 225.png";
import about_btn from "../../assets/Group 337 (1).png";
import right_orange from "../../assets/Rectangle 199.png";
import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import logos1 from "../../assets/Companies Logo 01.webp";
import logos2 from "../../assets/Companies Logo 02.webp";
import logos3 from "../../assets/Companies Logo 03.webp";
import logos4 from "../../assets/Companies Logo 04.webp";
import logos5 from "../../assets/Companies Logo 05.webp";
import logos6 from "../../assets/Companies Logo 06.webp";
import small1 from "../../assets/USP_Icon_01.webp";
import small2 from "../../assets/USP_Icon_02.webp";
import small3 from "../../assets/USP_Icon_03.webp";
import small4 from "../../assets/USP_Icon_04.webp";
import small5 from "../../assets/USP_Icon_05.webp";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import Blogs from "../../components/Blogs/Blogs";
import { Carousel } from "react-bootstrap";
import "react-toastify/dist/ReactToastify.css";
import "react-toastify/dist/ReactToastify.css";
function Home() {
  //  corousal of mnc logos
  const setting = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  // settings for logos
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 1000,
    cssEase: "linear",
  };

  const set = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 1000,
    cssEase: "linear",
  };

  const [phoneNumber, setPhoneNumber] = useState("");

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const config = {
      url: process.env.REACT_APP_BASE_URL + "api/addUserMessage",
      method: "post",
      data: {
        name: "From Home Page",
        email: "From Home Page",
        phoneNumber,
        message: "From Home Page",
        city: "From Home Page",
        company: "From Home Page",
      },
    };

    axios
      .request(config)
      .then((response) => {
        if (response?.data?.status == true) {
          console.log("dfghj", response.data);
          setPhoneNumber("");
          toast.success("Your phone number has been sent successfully", {
            position: "bottom-right",
            autoClose: 4000,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        }
        if (response?.data?.status == false) {
          if (response?.data?.response_code == 500) {
            toast.error("Internal Server Error", {
              position: "bottom-right",
              autoClose: 4000,
              pauseOnHover: true,
              draggable: true,
              theme: "light",
            });
          } else if (response?.data?.response_code == 404) {
            toast.error("Internal Server Error", {
              position: "bottom-right",
              autoClose: 4000,
              pauseOnHover: true,
              draggable: true,
              theme: "light",
            });
          }
        }
      })
      .catch((error) => {
        if (error?.response?.data?.response_code == 401) {
          toast.error("Your token is expired. Please login again.", {
            position: "bottom-right",
            autoClose: 4000,
            pauseOnHover: true,
            draggable: true,
            theme: "light",
          });
        } else {
          toast.warn("Fill Form", {
            position: "bottom-right",
            autoClose: 4000,
            pauseOnHover: true,
            draggable: true,
            theme: "light",
          });
        }
      });
  };

  const [TitleTag, setTitleTage] = useState("Resource center");
  const [showMore, setShowMore] = useState(false);
  const [contentTag, setContentTag] = useState(
    "We understand that every business has unique logistics needs, and we are here to ensure that your goods are transported safely, efficiently, and on time."
  );

  const carouselImg = {
    width: "12rem",
    height: "10rem",
  };

  const imageStyle1 = {
    width: "15rem",
    height: "10rem",
  };

  const handleViewMore = () => {
    setShowMore(true);
  };

  return (
    <div className="home_main">
      {/* content on home main image  */}
      <div className="container home_about">
        {/* home main image */}
        <img src={HomePage1} alt="Background" className="home-back" />

        <div className="home-content">
          <div className="home-heading">
            <h1 className="text-dark">Putting</h1>
            <Link to="/about">
              {/* <img src={about_btn} alt="" className="aboutclickImg" />*/}
            </Link>
          </div>

          <div className="home-subheading text-dark">
            <h1>LOGIC INTO LOGISTICS</h1>
            <p>India's Premium Logistics Provider</p>
          </div>

          <div className="home-whitebox-main">
            <img src={whiteBox} alt="" className="home-whitebox-img" />
            <div className="home-whitebox-content">
              <h2 className="fs-2 mb-3" style={{ color: "black" }}>
                Get a Callback
              </h2>
              <div class="row" className="InputBtn">
                <div class="col-auto">
                  <input
                    type="text"
                    // class="form-control"
                    placeholder="Your Phone Number"
                    value={phoneNumber}
                    style={{
                      backgroundColor: "#ccc",
                      borderRadius: "13px",
                      border: "none",
                      padding: "6px",
                    }}
                    onChange={(event) => setPhoneNumber(event.target.value)}
                  />
                </div>
                <div class="col-auto">
                  <button
                    class="btn btn-danger"
                    style={{
                      backgroundColor: "orangered",
                      borderRadius: "13px",
                      border: "none",
                      width: "10rem",
                    }}
                    onClick={(e) => handleSubmit(e)}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />

      {/*.................... Card Section for different Servies................................ */}
      <div className="container home-card-section">
        <div className="row home-card-row">
          <div className="col-md-12 col-lg-12 home-card-col">
            <div className="home-card-display">
              {/* Click to Navigate to Service Page */}
              <div className="home-our-services">
                <p class="ms-2">
                  Committed to providing unparalleled logistics services to
                  businesses across India.{" "}
                </p>
                <Link to="/service">
                  <img src={service} alt="" />
                </Link>
              </div>

              {/* four cards for different services */}
              <div className="home-cards">
                <div className="row home-cards-outer">
                  {/* card-1 */}
                  <div
                    className="col-md-6 home-card-inner"
                    onClick={() => {
                      navigate("/transportservice");
                      window.scrollTo(0, 0);
                    }}
                  >
                    {/* Know more heading*/}
                    <div className="home-card-subinner mt-4">
                      <div className=" offset-8 fs-5 home-card-know-more">
                        <p>Know More</p>
                      </div>
                    </div>

                    {/* Card main */}
                    <div className="home-card-main">
                      <div className="home-card-items d-flex ms-4">
                        {/* Card content */}
                        <div className=" col-6 home-card-top ">
                          <div className="home-card-content">
                            <p className="fs-5 fw-bold">
                              Trailer Transport Services
                            </p>
                            <ul>
                              <li className="home-card-list">
                                Trailer Lengths: 40 ft and 50 ft
                              </li>
                              <li className="home-card-list">
                                Additional Trailers: 32ft JCB
                              </li>
                            </ul>
                          </div>
                        </div>

                        {/* card-image */}
                        <div className="col-6 home-card-bottom">
                          <div className="home-card-truckimg ps-2 ps-lg-0">
                            <img src={firstservice} alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* card-2 */}
                  <div
                    className="col-md-6 home-card-inner"
                    onClick={() => {
                      navigate("/product");
                      window.scrollTo(0, 0);
                    }}
                  >
                    {/* Know more heading*/}
                    <div className="home-card-subinner mt-4">
                      <div className=" offset-8 fs-5 home-card-know-more">
                        <p>Know More</p>
                      </div>
                    </div>

                    {/* Card main */}
                    <div className="home-card-main">
                      <div className="home-card-items d-flex ms-4">
                        {/* Card content */}
                        <div className="home-card-top col-6">
                          <div className="home-card-content">
                            <p className="fs-5 fw-bold">
                              Full Truck Load Services
                            </p>
                            <ul>
                              <li className="home-card-list">
                                Truck Lengths: 17 ft, 19 ft, 22 ft, and 24 ft
                              </li>
                              <li className="home-card-list">
                                Container Types: Single XL (7.5 ton) & Multi XL
                                (15 Ton)
                              </li>
                            </ul>
                          </div>
                        </div>

                        {/* card-image */}
                        <div className="home-card-bottom col-6">
                          <div className="home-card-truckimg ps-2 ps-lg-0">
                            <img src={secondservice} alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* card-3 */}
                  <div
                    className="col-md-6 home-card-inner"
                    onClick={() => {
                      navigate("/dimensional");
                      window.scrollTo(0, 0);
                    }}
                  >
                    {/* Know more heading*/}
                    <div className="home-card-subinner mt-4">
                      <div className=" offset-8 fs-5 home-card-know-more">
                        <p>Know More</p>
                      </div>
                    </div>

                    {/* Card main */}
                    <div className="home-card-main">
                      <div className="home-card-items d-flex ms-4">
                        {/* Card content */}
                        <div className="home-card-top col-6">
                          <div className="home-card-content">
                            <p className="fs-5 fw-bold">
                              Over-Dimensional Cargo Services
                            </p>
                            <ul>
                              <li className="home-card-list">
                                Trailer Types: 40ft Trailer & 50ft Trailer
                              </li>
                              <li className="home-card-list">
                                Trailer Varieties: High bed, low bed, semi-bed
                              </li>
                            </ul>
                          </div>
                        </div>

                        {/* card-image */}
                        <div className="home-card-bottom col-6">
                          <div className="home-card-truckimg ps-2 ps-lg-0">
                            <img src={thirdservice} alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* card-4 */}
                  <div
                    className="col-md-6 home-card-inner"
                    onClick={() => {
                      navigate("/projectbased");
                      window.scrollTo(0, 0);
                    }}
                  >
                    {/* Know more heading*/}
                    <div className="home-card-subinner mt-4">
                      <div className="offset-8 fs-5 home-card-know-more">
                        <p>Know More</p>
                      </div>
                    </div>

                    {/* Card main */}
                    <div className="home-card-main">
                      <div className="home-card-items d-flex ms-4">
                        {/* Card content */}
                        <div className="home-card-top col-6">
                          <div className="home-card-content">
                            <p className="fs-5 fw-bold">
                              Project-based Transportation Services
                            </p>
                            <ul>
                              <li className="home-card-list">
                                All types of Trucks
                              </li>
                              <li className="home-card-list">
                                All types of Trailers
                              </li>
                              <li className="home-card-list">
                                All types of Containers
                              </li>
                            </ul>
                          </div>
                        </div>

                        {/* card-image */}
                        <div className="home-card-bottom">
                          <div className="home-card-truckimg ps-2 ps-lg-0">
                            <img src={fourthservice} alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <br></br>
      <br></br>

      {/*............................truck video section..............................*/}
      <div className="container-fluid home-truck-section">
        <div className="row home-truck-row">
          <div className="col-12 d-flex home-truck-video">
            <video controls>
              <source src={video} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>

      {/* ................................trust section........................ */}
      <div className="container home-trust-section">
        <div className="row home-trust-row">
          <div className="col-lg-12 home-trust-col">
            <div className="row d-flex mt-4 home-under-trust">
              {/* Left Side trust section */}
              <div className="col-lg-6 home-left-trust">
                <h1>Expertise of</h1>
                <div className="trust-content d-flex">
                  <img
                    src={first}
                    alt=""
                    class="img-fluid w-75"
                    className="trust-red-image"
                  />
                  <h2 className="trust-number ms-5">50+ Years</h2>
                </div>
                <p className="offset-lg-1 offset-md-1 trust-paragraph">
                  We understand that every business has unique logistics needs,
                  and we are here to ensure that your goods are transported
                  safely, efficiently, and on time.
                </p>
              </div>

              {/* Right Side Corousal */}
              <div className="col-lg-6 home-trust-carousel">
                {/* Adjust interval as needed */}

                <Carousel controls interval={1000}>
                  {/* Carousel-1 */}
                  <Carousel.Item>
                    <div className="col-6 right-brand">
                      <div className="d-flex carosel-images">
                        <img src={Layer1} alt="" className="carouselImg p-2" />
                        <img src={Layer2} alt="" className="carouselImg p-2" />
                        <img src={Layer3} alt="" className="carouselImg p-2" />
                      </div>

                      <div className="d-flex carosel-images mt-2">
                        <img src={Layer4} alt="" className="carouselImg p-2" />
                        <img src={Layer5} alt="" className="carouselImg p-2" />
                        <img src={Layer6} alt="" className="carouselImg p-2" />
                      </div>
                    </div>
                  </Carousel.Item>

                  {/* Carousel-2 */}
                  <Carousel.Item>
                    <div className="col-6 right-brand">
                      <div className="d-flex carosel-images">
                        <img src={Layer7} alt="" className="carouselImg p-2" />
                        <img src={Layer8} alt="" className="carouselImg p-2" />
                        <img src={Layer9} alt="" className="carouselImg p-2" />
                      </div>

                      <div className="d-flex carosel-images mt-2">
                        <img src={Layer10} alt="" className="carouselImg p-2" />
                        <img src={Layer11} alt="" className="carouselImg p-2" />
                        <img src={Layer12} alt="" className="carouselImg p-2" />
                      </div>
                    </div>
                  </Carousel.Item>
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </div>

      <br></br>
      <br></br>

      {/*........................ People Section.......................... */}
      <div className="container mt-1 home-people-section">
        <div className="row home-people-row">
          <div className="row col-md-12 col-lg-12 home-people-col">
            {/* <!-- Column for the map image --> */}
            <div className="col-lg-8 home-people-col1">
              <img src={map} alt="Map" style={{ width: "100%" }} />
            </div>

            {/* <!-- Column for the carousels --> */}
            <div className="col-lg-4 home-people-col2">
              <div className="row">
                {/* <!-- First Carousel --> */}
                <div className="col-lg-12 done_hide_carousel">
                  <style>
                    {`
          .done_hide_carousel .carousel-control-prev-icon,
          .done_hide_carousel .carousel-control-next-icon {
            display: none;
          }
        `}
                  </style>
                  <CCarousel controls interval={1000}>
                    <CCarouselItem>
                      <div className="right-brand d-flex justify-content-center ">
                        <img
                          src={Test1}
                          alt="Review 1"
                          style={{ imageStyle1, width: "100%" }}
                        />
                      </div>
                    </CCarouselItem>

                    <CCarouselItem>
                      <div className="right-brand d-flex justify-content-center">
                        <img
                          src={Test2}
                          alt="Review 1"
                          style={{ imageStyle1, width: "100%" }}
                        />
                      </div>
                    </CCarouselItem>
                  </CCarousel>
                </div>

                {/* <!-- Second Carousel --> */}
                <div className="col-lg-12 done_hide_carousel">
                  <style>
                    {`
          .done_hide_carousel .carousel-control-prev-icon,
          .done_hide_carousel .carousel-control-next-icon {
            display: none;
          }
        `}
                  </style>
                  <CCarousel controls interval={1000}>
                    <CCarouselItem data-bs-ride="carousel">
                      <div className="right-brand d-flex justify-content-center">
                        <img
                          src={Test3}
                          alt="Review 2"
                          style={{ imageStyle1, width: "100%" }}
                        />
                      </div>
                    </CCarouselItem>

                    <CCarouselItem>
                      <div className="right-brand d-flex justify-content-center">
                        <img
                          src={Test4}
                          alt="Review 2"
                          style={{ imageStyle1, width: "100%" }}
                        />
                      </div>
                    </CCarouselItem>
                  </CCarousel>
                </div>

                {/* <!-- Third Carousel --> */}
                <div className="col-lg-12 done_hide_carousel">
                  <style>
                    {`
          .done_hide_carousel .carousel-control-prev-icon,
          .done_hide_carousel .carousel-control-next-icon {
            display: none;
          }
        `}
                  </style>
                  <CCarousel controls interval={1000}>
                    <CCarouselItem>
                      <div className="right-brand d-flex justify-content-center ">
                        <img
                          src={Test5}
                          alt="Review 3"
                          style={{ imageStyle1, width: "100%" }}
                        />
                      </div>
                    </CCarouselItem>

                    <CCarouselItem>
                      <div className="right-brand d-flex justify-content-center">
                        <img
                          src={Test6}
                          alt="Review 3"
                          style={{ imageStyle1, width: "100%" }}
                        />
                      </div>
                    </CCarouselItem>
                  </CCarousel>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-box mb-4">
        {/* <img src={redline} alt="" /> */}
        <div className="line1"></div>
        <div className=" contact-now">
          <form onSubmit={handleSubmit} className="contact-now">
            <input
              type="number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="Your Phone Number"
            />
            <button type="submit">Contact Now</button>
          </form>
        </div>
      </div>

      <br></br>
      <br></br>

      {/*....................... extensive network Section...................  */}
      <div className="home-extensive-section-gradient">
        <div className="container extensive-section">
          <div className="row extensive-row">
            <div className="col-12 extensive-col">
              {/* Section Heading */}
              <div className="heading">
                <h2>Where your Satisfaction</h2>
                <br />
                <h2>Is Our Top Priority</h2>
              </div>

              {/* Carousel */}
              <Carousel
                controls={true}
                interval={1000}
                className="custom-carousel"
              >
                {/* First */}
                <Carousel.Item>
                  <div className="circle-div">
                    <img src={small1} alt="" />
                  </div>
                  <div className="highway-container">
                    <h1>Extensive Network</h1>
                    <p>
                      Vast network of fleet owners, transporters, and drivers,
                      delivering logistics services PAN India safely.
                    </p>
                  </div>
                </Carousel.Item>

                {/* Second */}
                <Carousel.Item>
                  <div className="circle-div">
                    <img src={small2} alt="" />
                  </div>
                  <div className="highway-container">
                    <h1>Cost-Efficient Solutions</h1>
                    <p>
                      Streamline your logistics chain management without
                      compromising financial feasibility.
                    </p>
                  </div>
                </Carousel.Item>

                {/* Third */}
                <Carousel.Item>
                  <div className="circle-div">
                    <img src={small3} alt="" />
                  </div>
                  <div className="highway-container">
                    <h1>Time Efficiency</h1>
                    <p>
                      Managing transportation with minimal cost and maximum
                      efficiency through advanced operations and resources.
                    </p>
                  </div>
                </Carousel.Item>

                {/* Fourth */}
                <Carousel.Item>
                  <div className="circle-div">
                    <img src={small4} alt="" />
                  </div>
                  <div className="highway-container">
                    <h1>State-of-the-art Technology</h1>
                    <p>
                      Leveraging innovative software to simplify the logistics
                      process like online service bookings & real-time tracking
                      of goods.
                    </p>
                  </div>
                </Carousel.Item>

                {/* Fifth*/}
                <Carousel.Item>
                  <div className="circle-div">
                    <img src={small5} alt="" />
                  </div>
                  <div className="highway-container">
                    <h1>Customized Service</h1>
                    <p>
                      Catering to the varied requirements of businesses,
                      ensuring that our services are adaptable and flexible.
                    </p>
                  </div>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
      </div>

      <br></br>
      <br></br>

      {/*....................... Features Section......................... */}
      <div className="home-feature-section">
        <h1>Proud Collaborator</h1>
        <div className="images">
          {/* Orange Line */}
          <img src={orange_line} alt="" className="image1" />

          {/* Sliders */}
          <div className="brands">
            <Slider {...settings}>
              <div className="brands-div">
                <img src={logos1} alt="" />
              </div>
              <div className="brands-div">
                <img src={logos2} alt="" />
              </div>
              <div className="brands-div">
                <img src={logos3} alt="" />
              </div>
              <div className="brands-div">
                <img src={logos4} alt="" />
              </div>
              <div className="brands-div">
                <img src={logos5} alt="" />
              </div>
              <div className="brands-div ">
                <img src={logos6} alt="" />
              </div>
            </Slider>
          </div>

          {/* Orange Line */}
          <img src={orange_line} alt="" className="image3" />
        </div>
      </div>

      <br></br>

      {/* Blogs */}
      <div style={{ paddingTop: "3em" }}>
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
      </div>

      <br></br>
      <Transport />
    </div>
  );
}

export default Home;
