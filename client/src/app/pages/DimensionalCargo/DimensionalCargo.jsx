import React, { useState } from "react";
import ODCPage from "../../assets/Truck/ODCS Banner.webp";
import "../product/product.scss";
import redline from "../../assets/Rectangle 202.png";
import contact from "../../assets/Group 337.png";
import "./dimensionalCargo.scss";
import imgbox from "../../assets/Icon 01 (1).webp";
import imgbox1 from "../../assets/Icon 02 (1).webp";
import imgbox2 from "../../assets/Icon 03 (1).webp";
import FtlJetLogistics from "../../components/FtlJetlogistics/FtlJetLogistics";
import GetInTouch from "../../components/getInTouch/getInTouch";
import LatestNews from "../../components/latestNews/latestNews";
import Transport from "../../components/transport/transport";
import firstservice from "../../assets/Truck Icon 01.webp";
import secondservice from "../../assets/Truck Icon 02.webp";
import thirdservice from "../../assets/Truck Icon 04.webp";
import fourthservice from "../../assets/Truck Icon 04.webp";
import { useNavigate } from "react-router-dom";
import Blogs from "../../components/Blogs/Blogs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const DimensionalCargo = () => {
  const [TitleTag, setTitleTage] = useState("Resource center");
  const [contentTag, setContentTag] = useState(
    "we understand that every business has unique logistics needs, and we are here to ensure that your goods are transported safely, efficiently, and on time"
  );
  const navigate = useNavigate();
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

          toast.success("Your phone number has been sent successfully", {
            position: "bottom-right",
            autoClose: 4000,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
          setPhoneNumber("");
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
  return (
    <div className="main-dimensional">
      {/* Dimensional main content */}

      <div className="container dimensional-about">
        <img
          src={ODCPage}
          alt="Background"
          className="dimensional-about-back"
        />

        <div className="dimensional-about-content">
          <h1 className="dimensional-about-heading">
            Over Dimensional Cargo Services
          </h1>
          <div className="dimensional-load-white-container-01">
            <ul>
              <li> Trailer Types: 40ft Trailer & 50ft Trailer</li>
              <li>Trailer Varieties: High bed, low bed, semi-bed</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container expertise-section">
        <div className="row expertise-row">
          <div className="col-md-12 expertise-col">
            <h1 className="expertise fw-bold">
              {" "}
              How ODC Services Benefit Your Supply Chain
            </h1>
            <p className="paragraph-1 text-center mt-4 ">
              As the global logistics landscape continues to evolve, we
              understand the unique challenges that come with transporting
              oversized and overweight cargo.
            </p>

            <div className="mt-5 expertise-containers1">
              <div className="col-md-4 expertise-col1">
                <h1 className="paragraph">Reduced Operating Costs</h1>
                <div className="para-div">
                  <p className="paras">
                    Our expertise in ODC transportation allows us to identify
                    cost-effective solutions, such as optimizing routes and
                    utilizing the most efficient transportation methods.
                  </p>
                  {/* <img src={imgbox} alt="" className="image-3"/> */}
                </div>
                <img src={imgbox} alt="" className="image-3" />
              </div>

              <div className="col-md-4 expertise-col1 ">
                <h1 className="paragraph">Improved Customer Service</h1>
                <div className="para-div">
                  <p className="paras">
                    With our ODC services, we ensure that your products are
                    delivered seamlessly, creating memorable moments for
                    customers from purchase to delivery.
                  </p>
                  {/* <img src={imgbox1} alt="" className="image-3" /> */}
                </div>
                <img src={imgbox1} alt="" className="image-3" />
              </div>

              <div className="col-md-4 expertise-col1 ">
                <h1 className="paragraph">Asset Utilization</h1>
                <div className="para-div">
                  <p className="paras">
                    By efficiently managing the transportation of ODC, we help
                    you make better use of your assets, ensuring that they are
                    always available for your business needs.
                  </p>
                  {/* <img src={imgbox2} alt="" className="image-3" /> */}
                </div>
                <img src={imgbox2} alt="" className="image-3 " />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* contact section */}
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
        <ToastContainer />
      </div>

      {/* Why choose section */}
      <FtlJetLogistics />

      {/* get in touxh section */}
      <GetInTouch />

      {/* card section */}
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
                            <p className="fs-6 fw-bold">
                              Full Truck Load Services
                            </p>
                            <ul>
                              <li className="p-1" style={{ fontSize: "15px" }}>
                                Truck Lengths: 17 ft, 19 ft, 22 ft, and 24 ft
                              </li>
                              <li className="p-1" style={{ fontSize: "15px" }}>
                                Container Types: Single XL (7.5 ton) & Multi XL
                                (15 Ton)
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="part-2 col-6 align-self-center">
                          <div className="img-outer ps-2">
                            <img
                              style={{ position: "relative", top: "-2.3rem" }}
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
                      navigate("/projectbased");
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
                            <p className="fs-6 fw-bold">
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
                              style={{ position: "relative", top: "-2.3rem" }}
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
                    className="jet-inner col-lg-4 col-sm-6 mb-4"
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
                            <p className="fs-6 fw-bold">
                              Trailer Transport Service
                            </p>
                            <ul>
                              <li className="p-1" style={{ fontSize: "15px" }}>
                                Trailer Length: 40ft and 50ft
                              </li>
                              <li className="p-1" style={{ fontSize: "15px" }}>
                                Additional Trailers: 32ft JCB
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
        <ToastContainer />
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

export default DimensionalCargo;
