import React, { useState } from "react";
import "../transportService/transportService.scss";
import TTSPage from "../../assets/Truck/TTS Banner.webp";
import Expertise from "../../components/Expertise/Expertise";
import redline from "../../assets/Rectangle 202.png";
import contact from "../../assets/Group 337.png";
import FTLService from "../../components/ftlService/ftlService";
import FTLServiceSecond from "../../components/FtlServiceSecond/FtlServiceSecond";
import FleetTrailer from "../../components/fleetTrailor/fleetTrailor";
import GetInTouch from "../../components/getInTouch/getInTouch";
import LatestNews from "../../components/latestNews/latestNews";
import Transport from "../../components/transport/transport";
import firstservice from "../../assets/Truck Icon 01.webp";
import secondservice from "../../assets/Truck Icon 02.webp";
import thirdservice from "../../assets/Truck Icon 003 (1).webp";
import fourthservice from "../../assets/Truck Icon 04.webp";
import { useNavigate } from "react-router-dom";
import Blogs from "../../components/Blogs/Blogs";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";

const TransportServices = () => {
  const [TitleTag, setTitleTage] = useState("Resource center");
  const [contentTag, setContentTag] = useState(
    "We understand that every business has unique logistics needs, and we are here to ensure that your goods are transported safely, efficiently, and on time"
  );
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const config = {
      url: process.env.REACT_APP_BASE_URL + "api/addUserMessage",
      method: "post",
      data: {
        name: "From Transport Service Page",
        email: "From Transport Service Page",
        phoneNumber,
        message: "From Transport Service Page",
        city: "From Transport Service Page",
        company: "From Transport Service Page",
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
          // toast.warn("Fill Form", {
          //   position: "bottom-right",
          //   autoClose: 4000,
          //   pauseOnHover: true,
          //   draggable: true,
          //   theme: "light",
          // });
        }
      });
  };
  const navigate = useNavigate();
  return (
    <div className="main-transport">
      <div className=" container transport-about">
        <img src={TTSPage} alt="Background" className="transport-about-back" />

        <div className="transport-about-content">
          <h1 className="transport-about-heading">
            Trailer Transport Services
          </h1>
          <div className="transport-load-white-container-01">
            <ul>
              <li> Trailer Types: 40ft & 50ft</li>
              <li>Additional Trailers: 32ft JCB</li>
            </ul>
          </div>
        </div>
      </div>

      <Expertise />

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

      <FTLService />
      <FTLServiceSecond />
      <FleetTrailer />
      <GetInTouch />

      <div className="container-fluid card-section mt-5">
        <div className="row card-row">
          <div className="col-lg-12 card-col">
            <div className="card-display">
              <div className="jet-main">
                <div className="jet-outer row">
                  {/* card-1 */}
                  <div
                    className="jet-inner col-lg-4 col-sm-6 mb-4"
                    onClick={() => {
                      navigate("/product");
                      window.scrollTo(0, 0);
                    }}
                  >
                    <div className="jet-sub-inner">
                      <div className="know-more-1">
                        <p>Know More</p>
                      </div>
                    </div>
                    <div className="bottom">
                      <div className="bottom-inner d-flex ps-3">
                        <div className="part-1 col-6">
                          <div className="head">
                            <p className="fs-5 fw-bold">
                              Full Truck Load Services
                            </p>
                            <ul>
                              <li className="p-1" style={{ fontSize: "16px" }}>
                                Truck Lengths: 17 ft, 19 ft, 22 ft, and 24 ft
                              </li>
                              <li className="p-1" style={{ fontSize: "16px" }}>
                                Container Types: Single XL (7.5 ton) & Multi XL
                                (15 Ton)
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="part-2 col-6 align-self-center">
                          <div className="img-outer ps-2">
                            <img
                              style={{ width: "38vh" }}
                              src={secondservice}
                              alt=""
                              className="img-fluid"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* card-2 */}
                  <div
                    className="jet-inner col-lg-4 col-sm-6 mb-4"
                    onClick={() => {
                      navigate("/dimensional");
                      window.scrollTo(0, 0);
                    }}
                  >
                    <div className="jet-sub-inner">
                      <div className="know-more-1">
                        <p>Know More</p>
                      </div>
                    </div>
                    <div className="bottom">
                      <div className="bottom-inner d-flex ps-3">
                        <div className="part-1 col-6">
                          <div className="head">
                            <p className="fs-5 fw-bold">
                              Over-Dimensional Cargo Services
                            </p>
                            <ul>
                              <li className="p-1" style={{ fontSize: "16px" }}>
                                Trailer Types: 40ft Trailer & 50ft Trailer
                              </li>
                              <li className="p-1" style={{ fontSize: "16px" }}>
                                Trailer Varieties: High bed, low bed, semi-bed
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="part-2 col-6 align-self-center">
                          <div className="img-outer-1 ps-2">
                            <img
                              style={{ width: "35vh" }}
                              src={thirdservice}
                              alt=""
                              className="img-fluid"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* card-3 */}
                  <div
                    className="jet-inner col-lg-4 col-sm-6  mb-4"
                    onClick={() => {
                      navigate("/transportservice");
                      window.scrollTo(0, 0);
                    }}
                  >
                    <div className="jet-sub-inner">
                      <div className="know-more-1">
                        <p>Know More</p>
                      </div>
                    </div>
                    <div className="bottom">
                      <div className="bottom-inner d-flex ps-3">
                        <div className="part-1 col-6">
                          <div className="head">
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
                        <div className="part-2 col-6 align-self-center">
                          <div className="img-outer-1 ps-2">
                            <img
                              src={firstservice}
                              alt=""
                              className="img-fluid"
                            />
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
      {/* <LatestNews /> */}
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
      <ToastContainer />
    </div>
  );
};

export default TransportServices;
