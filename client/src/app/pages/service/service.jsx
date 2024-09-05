import React from "react";
import "./service.scss";
import ServicePage from "../../assets/Truck/Services Banner.webp";
import mini1 from "../../assets/Truck Icon 01 (1).webp";
import mini2 from "../../assets/Truck Icon 02 (1).webp";
import mini3 from "../../assets/Truck Icon 03 (1).webp";
import mini4 from "../../assets/Truck Icon 04 (1).webp";
import icon1 from "../../assets/icon5 (1).png";
import icon2 from "../../assets/icon5 (2).png";
import icon3 from "../../assets/icon5 (3).png";
import icon4 from "../../assets/icon5 (4).png";
import icon5 from "../../assets/icon5 (5).png";
import Transport from "../../components/transport/transport";
import new1 from "../../assets/Truck Image 01 (2).webp";
import new2 from "../../assets/Truck Image 02 (2).webp";
import new3 from "../../assets/Truck Image 03.webp";
import new4 from "../../assets/Truck Image 04.webp";
import new5 from "../../assets/Truck Image 05.webp";
import new6 from "../../assets/Truck Image 06.webp";
import GetInTouch from "../../components/getInTouch/getInTouch";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import truckk1 from "../../assets/Truck/Truck1.png";
import truckk2 from "../../assets/Truck/Truck2.png";
import truck3 from "../../assets/Truck/Truck3.png";
import truck4 from "../../assets/Truck/Truck4.png";
import truck5 from "../../assets/Truck/Truck5.png";
import truck6 from "../../assets/Truck/Truck6.png";
import tr001 from "../../assets/Serv/ttt001.jpg";
import tr002 from "../../assets/Serv/002.jpg";
import tr003 from "../../assets/Serv/003.jpg";
import { useNavigate } from "react-router-dom";

const Service = () => {
  const navigate = useNavigate();
  var settings = {
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
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
  const trailor = [
    {
      image: tr001,
    },
    {
      image: tr002,
    },
    {
      image: tr003,
    },
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
  ];
  return (
    <div className="service_main">
      {/* content on service main image */}
      <div className="container service_about">
        {/* service main image */}
        <img src={ServicePage} alt="Background" className="service-back" />

        {/* service text */}
        <div className="service-content">
          <h1 className="service-heading">Services</h1>
          <p className="service-paragraph">
            We provide all-inclusive logistics solutions: Freight Forwarding,
            Customs Clearance, Warehousing, Transportation, Supply Chain
            Management, Project Cargo, Documentation Assistance. Trust us to
            deliver your shipments safely and on time.
          </p>
        </div>
      </div>

      {/* complete section */}
      <div class="container service-complete">
        <div class="row complete-row">
          <div class="col-12 complete-row-2">
            <div className="complete-section">
              <h1 className="complete-heading text-center fs-1 fw-bold ">
                Complete End-to-End Logistics Solution
              </h1>
              <p className="complete-para text-center fs-4">
                Destination for Full Truck Load (FTL) services, World Class
                Trailer Transport<br></br> Services, and Over Dimensional Cargo
                (ODC) services.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* four card container box */}

      <div className="four-card d-flex justify-content-center">
        {/* 1 card */}
        <div className="border card-container mx-3 mt-5">
          <div className=" d-flex card-1 ">
            <img src={mini1} alt="" className="truck-img"></img>
            <h5 className="card-name">
              Trailer Transport
              <br /> Services
            </h5>
          </div>
          <p className="card-para fs-5">
            A variety of trailer sizes to accommodate all your needs, from small
            shipments to large-scale operations. Our commitment to quality and
            customer satisfaction means that your goods are always in good
            hands.
          </p>
          <div
            onClick={() => {
              navigate("/transportservice");
              window.scrollTo(0, 0);
            }}
          >
            <button className="card-button ">View More</button>
          </div>
        </div>

        {/* 2 card */}
        <div className="border card-container mx-3 mt-5">
          <div className=" d-flex card-1 ">
            <img src={mini2} alt="" className="truck-img"></img>
            <h5 className="card-name">
              Full Truck Load
              <br />
              (FTL) Services
            </h5>
          </div>
          <p className="card-para fs-5">
            Offering the most efficient way to transport goods. Delivering
            shipments directly to your destination, eliminating the need for
            multiple stops and ensuring not only to save time and money but also
            that your goods arrive in perfect condition.
          </p>
          <div
            onClick={() => {
              navigate("/product");
              window.scrollTo(0, 0);
            }}
          >
            <button className="card-button">View More</button>
          </div>
        </div>
      </div>

      <div className="four-card1 d-flex justify-content-center">
        {/* 3 card */}
        <div className="border card-container mx-3 mt-5">
          <div className=" d-flex card-1 ">
            <img src={mini3} alt="" className="truck-img"></img>
            <h5 className="card-name">
              Over-Dimensional <br />
              Cargo Services
            </h5>
          </div>
          <p className="card-para fs-5">
            Expertise in the shipment of large cargo, offering a range of
            solutions to accommodate your specific needs, including custom
            packaging and specialized handling equipment.
          </p>
          <div
            onClick={() => {
              navigate("/dimensional");
              window.scrollTo(0, 0);
            }}
          >
            <button className="card-button ">View More</button>
          </div>
        </div>

        {/* 4 card */}
        <div className="border card-container mx-3 mt-5">
          <div className=" d-flex card-1 ">
            <img src={mini4} alt="" className="truck-img"></img>
            <h5 className="card-name">
              Project-based <br /> Transportation Services
            </h5>
          </div>
          <p className="card-para fs-5">
            Industry relocations require meticulous planning and execution to
            minimize downtime and ensure the safe and timely transfer of
            equipment, machinery, and materials. At Jet Traders, we have a
            proven track record of successfully managing complex industry
            relocation projects across various sectors, including but not
            limited to.
          </p>
          <div
            onClick={() => {
              navigate("/projectbased");
              window.scrollTo(0, 0);
            }}
          >
            <button className="card-button">View More</button>
          </div>
        </div>
      </div>

      {/* who should partner */}
      <div className="mt-5">
        <h1 className="text-center fs-1 fw-bold display-1">
          Who Should Partner
        </h1>
        <h1 className="text-center text-danger fw-bold ">With Us!</h1>
      </div>

      {/* 1section */}
      <div class="container mt-5 new">
        <div class="row new-1 ">
          <div class="col-md-7 new-2">
            <div class="left-content-2 ">
              <h2 className="new-heading ">Construction Companies:</h2>
              <div class="content-1 border mt-4 p-2 w-100 rounded-3  new-main">
                <h3 className="text-danger p-2 ">Optimize Logistics Costs:</h3>
                <p className="p-2 ">
                  Reduce the need for investing in your own fleet and optimize
                  logistics costs.
                </p>
                <h3 className="text-danger p-2 ">Safety Compliance:</h3>
                <p className=" p-2">
                  We adhere to safety regulations and industry standards,
                  ensuring a secure working environment.
                </p>
                <h3 className="text-danger p-2">Scalability:</h3>
                <p className="p-2 ">
                  Scale your operations according to project requirements
                  without the burden of managing logistics internally.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-5">
            <div class="right-content">
              <img
                src={new1}
                alt="Image"
                class="img-fluid"
                className=" w-100 mt-5 w-100 rounded-3"
              />
            </div>
          </div>
        </div>
      </div>

      {/* 2section */}
      <div class="container mt-5 new">
        <div class="row new-1 ">
          <div class="col-md-5 new-2">
            <div class="right-content">
              <img
                src={new2}
                alt="Image"
                class="img-fluid"
                className=" mt-5 w-100 rounded-3"
              />
            </div>
          </div>
          <div class="col-md-7">
            <div class="left-content-2">
              <h2 className="new-heading text-start">Dealers and Traders:</h2>
              <div class="border mt-4 w-100 p-4 rounded-3 new-main">
                <h3 className="text-danger p-2 ">Prompt Delivery:</h3>
                <p className="p-2">
                  Ensure prompt delivery of goods to maintain customer
                  satisfaction and loyalty.
                </p>
                <h3 className="text-danger p-2">Flexibility:</h3>
                <p className="p-2">
                  Access a variety of transportation options to adapt to
                  fluctuating demand and market variations.
                </p>
                <h3 className="text-danger p-2">Reputation Building:</h3>
                <p>
                  Reliable transportation services contribute to a positive
                  reputation for your business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3section */}
      <div class="container mt-5 new">
        <div class="row new-1 ">
          <div class="col-md-7 new-2">
            <div class="left-content-2 ">
              <h2 className="new-heading">Manufacturers:</h2>
              <div class="content-1 border mt-4 w-100 p-3 rounded-3 new-main">
                <h3 className="text-danger p-2">Market Reach:</h3>
                <p className="p-2">
                  Access a network of transportation routes to reach a broader
                  market.
                </p>
                <h3 className="text-danger p-2">Focus on Core Activities:</h3>
                <p className="p-2">
                  Allow you to focus on production and innovation while we
                  handle transportation logistics.
                </p>
                <h3 className="text-danger p-2">Detailed Reporting:</h3>
                <p className="p-2">
                  Provide detailed tracking and reporting capabilities to pass
                  on to your end customers.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-5">
            <div class="right-content">
              <img
                src={new3}
                alt="Image"
                class="img-fluid"
                className=" mt-5 w-100 rounded-3"
              />
            </div>
          </div>
        </div>
      </div>

      {/* 4section */}
      <div class="container mt-5 new">
        <div class="row new-1 ">
          <div class="col-md-5 new-2">
            <div class="right-content">
              <img
                src={new4}
                alt="Image"
                class="img-fluid"
                className=" mt-5 w-100 rounded-3"
              />
            </div>
          </div>
          <div class="col-md-7">
            <div class="left-content-2 ">
              <h2 className="new-heading text-start">Rental Companies:</h2>
              <div class="content-1 border mt-4 w-100 p-3 rounded-3 new-main">
                <h3 className="text-danger p-2">Versatility:</h3>
                <p className="p-2">
                  Handle various types of equipment and vehicles, including
                  specialized or oversized items.
                </p>
                <h3 className="text-danger p-2 ">Market Expansion:</h3>
                <p className="p-2">
                  Expand your reach to new geographic areas or markets with our
                  transportation services.
                </p>
                <h3 className="text-danger p-2">Risk Mitigation:</h3>
                <p className="p-2">
                  Insurance coverage and risk management protocols help mitigate
                  transportation-related risks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <br></br>
      <br></br>

      {/* corousal */}
      <div className="">
        <div className="">
          <Slider {...settings}>
            {trailor.map((item) => {
              return (
                <div className="ms-md-4 ms-sm-0 ">
                  <div className="mx-4">
                    <img
                      src={item.image}
                      className="w-100 border rounded-3"
                      alt=""
                    />
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>

      {/* nothired */}
      <div className="mt-5">
        <h1 className="text-center fw-bold fs-1">Who Should Not Partner</h1>
        <h1 className="text-center text-danger fw-bold fs-1">With Us!</h1>
      </div>

      {/* 2sectionofnothired */}
      <div class="container">
        <div class="row">
          <div class="col-md-7">
            <div class="left-content">
              <div class="content-1 border rounded-3 mt-5 w-100 p-4">
                <h4 className="text-danger mt-2">
                  Those Without a Safety-First Mentality:
                </h4>
                <p className="mt-3 fs-5">
                  We prioritize safety above all else and maintain stringent
                  safety protocols throughout our operations.
                </p>
                <h4 className="text-danger mt-2">
                  Those Lacking Commitment to Professionalism:
                </h4>
                <p className="mt-3 fs-5">
                  Our company upholds high standards of professionalism and
                  conducts business with integrity.
                </p>
                <h4 className="text-danger mt-2">
                  Those Neglecting Customer Satisfaction:
                </h4>
                <p className="mt-3 fs-5">
                  We aim to build strong and mutually beneficial relationships
                  with our customers by delivering exceptional service.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-5">
            <div class="right-content">
              <img
                src={new5}
                alt="Image"
                class="img-fluid"
                className=" mt-5 w-100"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-5">
            <div class="left-content">
              <div class="right-content">
                <img
                  src={new6}
                  alt="Image"
                  class="img-fluid"
                  className=" w-100 mt-5"
                />
              </div>
            </div>
          </div>
          <div class="col-md-7">
            <div class="content-1 border rounded-3 mt-5 w-100 p-4">
              <h4 className="text-danger mt-2  ">
                Those Ignoring Attention to Detail:
              </h4>
              <p className="mt-3 fs-5">
                Meticulous attention to detail is fundamental to our operations,
                ensuring precise planning and execution.
              </p>
              <h4 className="text-danger mt-2">
                Those Who Don't Practice Ethical Business:
              </h4>
              <p className="mt-3 fs-5">
                We adhere to strict ethical standards in all dealings, including
                transparent pricing and fair treatment of employees.
              </p>
              <h4 className="text-danger mt-2">
                Those Resistant to Continuous Improvement:
              </h4>
              <p className="mt-3 fs-5">
                Dedicated to continuous improvement and innovation, we evolve
                our services to meet evolving customer needs.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* choose */}
      <div className="choose-class container-fluid mt-5">
        <h1 className="text-center mt-5">
          Why <span className="choose">Choose</span> jet Trade Logistics?
        </h1>
      </div>

      <div class="container mt-5">
        <div class="row">
          <div class="col-md-6">
            <div class="left-content">
              <p>
                Choose Jet Trade Logistics because we make shipping easy,
                reliable and a hassle free process. Our experienced team ensures
                your goods reach their destination safely and on time. We offer
                personalized service tailored to your needs, making sure you
                feel supported at every step of the way.
              </p>
              <p>
                With our budget friendly rates and transparent communication,
                you can trust us with your logistics needs. Experience
                hassle-free shipping with Jet Trade Logistics today!
              </p>
            </div>
          </div>
          <div class="col-md-6">
            <div class="right-content">
              <div class="row">
                <div class="col-12 d-flex mx-md-5 p-md-2 mx-sm-0 border-bottom">
                  <img src={icon5} alt="" className="" />
                  <h3 className="mx-4">Experience and Expertise</h3>
                </div>
                <div class="col-12 d-flex mx-md-5 p-md-2 mx-sm-0 border-bottom">
                  <img src={icon4} alt="" />
                  <h3 className="mx-4">Priced Just Right</h3>
                </div>
                <div class="col-12 d-flex mx-md-5 p-md-2 mx-sm-0 border-bottom">
                  <img src={icon3} alt="" />
                  <h3 className="mx-4">Customer-Centric Approach</h3>
                </div>
                <div class="col-12 d-flex mx-md-5 p-md-2 mx-sm-0 border-bottom">
                  <img src={icon2} alt="" />
                  <h3 className="mx-4">Innovative Solutions</h3>
                </div>
                <div class="col-12 d-flex mx-md-5 p-md-2 mx-sm-0 border-bottom">
                  <img src={icon1} alt="" />
                  <h3 className="mx-4">Transparency and Communication</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="getintouch mt-5">
        <GetInTouch />
      </div> */}
      <br></br>
      <br></br>
      <GetInTouch />
      <Transport />
    </div>
  );
};

export default Service;
