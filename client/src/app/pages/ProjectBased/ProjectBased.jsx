import React, { useState } from "react";
import "./ProjectBased.scss";
import PBTSPage from "../../assets/Truck/PBTS Banner.webp";
import img from "../../assets/Icon 01 (2).webp";
import img1 from "../../assets/Icon 02 (2).webp";
import img2 from "../../assets/Icon 03 (2).webp";
import img3 from "../../assets/Icon 04.webp";
// import image4 from '../../assets/symbol (4).png'
import news1 from "../../assets/latest1.png";
import news2 from "../../assets/latest2.png";
import news3 from "../../assets/latest3.png";
import GetInTouch from "../../components/getInTouch/getInTouch";
import Transport from "../../components/transport/transport";
import bigTruck from "../../assets/Banner 01.webp";
import firstservice from "../../assets/Truck Icon 01.webp";
import secondservice from "../../assets/Truck Icon 02.webp";
import thirdservice from "../../assets/Truck Icon 003 (1).webp";
import fourthservice from "../../assets/Truck Icon 04.webp";
import { useNavigate } from "react-router-dom";
import Blogs from "../../components/Blogs/Blogs";
import { Link } from "react-router-dom";

const ProjectBased = () => {
  const navigate = useNavigate();
  const [TitleTag, setTitleTage] = useState("Resource center");
  const [contentTag, setContentTag] = useState(
    "we understand that every business has unique logistics needs, and we are here to ensure that your goods are transported safely, efficiently, and on time"
  );

  return (
    <div className="projectbased_main">

      <div className=" container projectbased-about">
        <img
        // class="img-fluid"
          src={PBTSPage}
          alt="Background"
          className="project-about-back"
        />

        <div className="project-about-content">
          <h1 className="project-about-heading fw-bold">
            Project-Based Transportation Services
          </h1>
          <div className="project-load-white-container-01">
            <ul>
              <li className="home-card-list">All types of Trucks</li>
              <li className="home-card-list">All types of Trailers</li>
              <li className="home-card-list">All types of Containers</li>
            </ul>
          </div>
        </div>

      </div>

      {/* Project-based expertise */}
      <div className=" container pb-expertise">
        <h1 className="pb-expertise-heading fs-1 text-center">
          Industry Relocation Expertise.
        </h1>
        <p className="pb-expertise-paragraph fs-5 text-center">
          Industry relocations require meticulous planning and execution to
          minimize downtime and ensure the safe and timely transfer of
          equipment, machinery, and materials. At Jet Traders, we have a proven
          track record of successprojecty managing complex industry relocation
          projects across various sectors, including but not limited to:
        </p>
        <p></p>
      </div>

      {/* project-based workslist */}
      <section class="pt-3 pb-3 border border-2 radius mx-5 main-worklist">
        <div class="row">
          <div class="col-lg-3 col-md-6 mb-4 mb-md-0 border-2 border-property custom-border-end">
            <ul class="list mb-0 px-5" style={{ listStyle: "square" }}>
              <li class="p-2 text-danger fs-5">Engineering</li>
              <li class="p-2 fs-5">Boilers</li>
              <li class="p-2 text-danger fs-5">Fertillizers</li>
              <li class="p-2 fs-5">Transmission Lines/TLT</li>
            </ul>
          </div>

          <div class="col-lg-3 col-md-6 mb-4 mb-md-0 border-2 border-property custom-border-end">
            <ul class="list mb-0 px-5" style={{ listStyle: "square" }}>
              <li class="p-2 text-danger fs-5">Cement</li>
              <li class="p-2 fs-5">Iron and Steel</li>
              <li class="p-2 text-danger fs-5">Power Plants</li>
              <li class="p-2 fs-5">Material Handling Equipment (MHE)</li>
            </ul>
          </div>
          <div class="col-lg-3 col-md-6 mb-4 mb-md-0 border-2 border-property custom-border-end">
            <ul class="list mb-0 px-5" style={{ listStyle: "square" }}>
              <li class="p-2 text-danger fs-5">Chemicals</li>
              <li class="p-2 fs-5">Sponge Iron</li>
              <li class="p-2 text-danger fs-5">Sugars</li>
              <li class="p-2 fs-5">Breweries</li>
            </ul>
          </div>
          <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
            <ul class="list mb-0 px-5" style={{ listStyle: "square" }}>
              <li class="p-2 text-danger fs-5">Structrals</li>
              <li class="p-2 fs-5">Petrochemicals</li>
              <li class="p-2 text-danger fs-5">Distilleries</li>
              <li class="p-2 fs-5">Paper</li>
            </ul>
            <h5 class="text-center mt-4 fs-5 text-danger">and more.</h5>
          </div>
        </div>
      </section>

      {/* approach */}
      <div className="mt-5 text-center approach-section">
        <h1>
          Our <span className="text-danger fw-bold">Approach</span>
        </h1>
      </div>

      {/* Responsive Container */}
      <div class="responsive-container border border-2 ">
        <div class="responsive-item border-bottom border-2">
          <img src={img} alt="" class="responsive-img" />
          <p class="responsive-text">
            <span class="highlight-text">Comprehensive Planning:</span>
            We work closely with our clients to develop detailed transportation
            plans that address every aspect of the relocation process.
          </p>
        </div>
        <div class="responsive-item border-bottom border-2">
          <img src={img1} alt="" class="responsive-img" />
          <p class="responsive-text">
            <span class="highlight-text">Specialized Equipment:</span>
            Our fleet of specialized trailers and equipment ensures that even
            the most oversized or heavy cargo can be safely transported to its
            destination.
          </p>
        </div>
        <div class="responsive-item border-bottom border-2">
          <img src={img2} alt="" class="responsive-img" />
          <p class="responsive-text">
            <span class="highlight-text">Efficiency and Timeliness:</span>
            We understand the importance of minimizing downtime during
            relocations. Our team is committed to executing projects with
            precision and efficiency to meet tight deadlines and keep your
            operations running smoothly.
          </p>
        </div>
        <div class="responsive-item">
          <img src={img3} alt="" class="responsive-img" />
          <p class="responsive-text">
            <span class="highlight-text">Safety and Compliance:</span>
            Safety is our top priority. We adhere to the highest safety
            standards and regulatory requirements to protect both our team
            members and your valuable assets throughout the transportation
            process.
          </p>
        </div>
      </div>

      {/* Industry section */}
      <div className="mx-5 industry-section">
        <h1 className="text-center mt-5 industry-section-1">
          Industry Relocation Expertise
        </h1>
        <p className="mt-4 fs-5 w-100 text-center industry-section-para ">
          Partner with Jet Traders for your next industry relocation project and
          experience the difference of working with a trusted transportation
          partner. Contact us today to learn more about our project-based
          transportation services and how we can support your relocation needs.
        </p>
      </div>

      {/* Industry section Truck Image */}
      <div className="d-flex p-3 mx-5">
        <img src={bigTruck} alt="" className="w-100 mt-3" />
      </div>

      <GetInTouch />
      
      <div className="container-fluid card-section mt-5">
        <div className="row card-row">
          <div className="col-lg-12 card-col">
            <div className="card-display">
              <div className="jet-main">
                <div className="jet-outer row">
                  {/* card-1 */}
                  <div
                    className="jet-inner col-lg-4 mb-4"
                    onClick={() => {
                      navigate("/product");
                      window.scrollTo(0,0)
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
                              style={{
                                position: "relative",
                                marginTop: "-3rem",
                              }}
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
                    className="jet-inner col-lg-4  mb-4"
                    onClick={() => {
                      navigate("/dimensional");
                      window.scrollTo(0,0)
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
                              style={{
                                position: "relative",
                                marginTop: "-3rem",
                              }}
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
                    className="jet-inner col-lg-4  mb-4"
                    onClick={() => {
                      navigate("/transportservice");
                      window.scrollTo(0,0)
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
                              Trailer Transport Services
                            </p>
                            <ul>
                              <li className="p-1" style={{ fontSize: "16px" }}>
                                Trailer Length: 40ft and 50ft
                              </li>
                              <li className="p-1" style={{ fontSize: "16px" }}>
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
      </div>

      <br></br>

      <Blogs TitleTag={TitleTag} contentTag={contentTag} checkView={false}/>
      <div
          style={{
            justifyContent: "center",
            display: "flex",
          }}
          onClick={() => {
            navigate("/resource");
            window.scrollTo(0,0)
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

export default ProjectBased;
