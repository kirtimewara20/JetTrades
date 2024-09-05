import React from "react";
import truckimg from "../../assets/Group 407 (1).png";
import card from "../../assets/Rectangle 203 (1).png";
import curveLine from "../../assets/Line 13 (1).png";
import container from "../../assets/Red Container 1.png";
import "./ftlService.scss";

const FTLService = () => {
  return (
    <>
      <div className="container ftlservice-section-1">
        <div className="row ftlservice-row-1">

          <div className="col-lg-12 ftlservice-col-1">

            <h1>Why Choose</h1>

            <div className="heading">

              <h1>Trailer Transport Services</h1>
              
              {/* <img src={curveLine} alt="" className="curve-line" /> */}

              <div className="row mt-4 heading-section2">

               
                <div className="col-lg-6 under-heading2">

                  <h6>50 Years of Experience</h6>
                  <div className="white-container-03">
                    <p className="p1">
                      With half a century in the transport industry, Railer Transport Service has a proven track record of reliability and expertise. Our deep industry knowledge ensures efficient and effective transportation solutions.
                    </p>
                  </div>

                  <h6>Experienced Drivers</h6>
                  <div className="white-container-03">
                    <p className="p1">
                      Our drivers are seasoned professionals with extensive training and experience. Their expertise ensures that your goods are handled with the utmost care and delivered safely to their destination.
                    </p>
                  </div>

                  <h6>BS6 Compliant Fleet</h6>
                  <div className="white-container-03">
                    <p className="p1">
                      All our vehicles comply with BS6 emission standards, which means they produce significantly lower emissions. This not only helps in reducing pollution but also aligns with our commitment to environmental sustainability.
                    </p>
                  </div>

                  <h6>Enhanced Safety Measures</h6>
                  <div className="white-container-03">
                    <p className="p1">
                      We prioritize the safety of your goods through meticulous belting and latching procedures. This ensures that your cargo is secure and protected throughout the journey.
                    </p>
                  </div>

                  <h6>Pan-India Service</h6>
                  <div className="white-container-03">
                    <p className="p1">
                     We offer comprehensive transportation services across India. No matter where you need your goods to go, we have the infrastructure and network to deliver.
                    </p>
                  </div>

                </div>

                
                <div className="col-lg-6 under-truck">
                  <img src={truckimg} alt="" />
                </div>

              </div>
            </div>
          </div>

        </div>
      </div> 

      <div className="container ftlservice-second-1 mt-5">
        <div className="row fltservice-1-content">
          <div className="col-md-12 ftlservice-image">
            <img src={container} alt="" />
          </div>
          <div className="col-md-12 ftlservice-heading">
            <h1 className="head">
              Your Solution For Diverse<br></br>
              <span>Cargo Shipment</span>
            </h1>
            <div className="ftlservice-box">
              <h1>General Cargo</h1>
              <p>
                Dry Van Trailers are ideal for a wide range of non-perishable
                goods, offering protection from weather and theft due to their
                enclosed structure. This makes them a versatile choice for general
                cargo transportation.
              </p>
            </div>
            <div className="ftlservice-box">
              <h1>
                Oversized and Irregularly <br></br>Shaped Cargo
              </h1>
              <p>
                Standard Flatbed Trailers are best suited for large or irregularly
                shaped cargo. Their open design facilitates easy loading and
                unloading.
              </p>
            </div>
            <div></div>
          </div> 
        </div>
      </div>
    </>
  );
};

export default FTLService;
