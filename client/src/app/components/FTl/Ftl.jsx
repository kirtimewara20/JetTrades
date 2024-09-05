import React from "react";
import "./Ftl.scss";
import truckimg from "../../assets/Group 437.png";
import card from "../../assets/Rectangle 203 (1).png";
import curveLine from "../../assets/Line 13.png";
import threecontainer from "../../assets/image 50.png";
import ftl_second_truck from "../../assets/PikPng 1.png";
import Award1 from "../../assets/Truck/Raneka.mp4";

const FTL = () => {
  return (
    <>
      <div className="container ftlservice-section">
        <div className="row ftlservice-row">

          <div className="col-lg-12 ftlservice-col">

            <h1>Why Choose</h1>

            <div className="heading">

              <h1>FTL Services?</h1>

              {/* curve line */}
              {/* <img src={curveLine} alt="" className="curve-line-product" /> */}


              <div className="row mt-4 heading-section">

                {/* FTL three types - LHS*/}
                <div className="col-lg-6 under-heading">

                  <h6>Faster Transit Times</h6>
                  <div className="white-container-02">
                    <p className="p1">
                      FTL shipments are given priority over less-than-truckload
                      (LTL) shipments, ensuring faster delivery times than LTL
                      shipments.
                    </p>
                  </div>

                  <h6>Faster Transit Times</h6>
                  <div className="white-container-02">
                    <p className="p1">
                      FTL shipments are usually transported by a single carrier,
                      providing greater control over the movement of the cargo.
                    </p>
                  </div>

                  <h6>Enviromentally Friendly Options</h6>
                  <div className="white-container-02">
                    <p className="p1">
                      FTL services offer a more streamlined journey from origin
                      to destination, which improves fuel efficiency.
                    </p>
                  </div>

                </div>

                {/* FLT truck Image - RHS*/}
                <div className="col-lg-6 under-truck">
                  <video controls>
                    <source src={Award1} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>

              </div>

            </div>

          </div>

        </div>
      </div>

      <div className="container ftlservice-second mt-4">
        <div className="row ftlservice-row">
          <div className="col-12 ftlservice-col">
            <h2 className="head-h2">Your Needs Are</h2>
            <h1>Our Command</h1>
            <div className="ftlservice-parent d-flex">
              <div className="col-6 ftlservice-contentt d-flex flex-column">
                <div className="ftlservice-text">
                  <h2>Raw Materials</h2>
                  <p>
                    We are adept at transporting bulk raw materials for
                    manufacturing industries, ensuring they reach their
                    destinations in a timely and efficient manner.
                  </p>
                </div>
                <div className="ftlservice-text">
                  <h2>Manufactured Goods</h2>
                  <p>
                    From finished products to components, we provide FTL
                    services for the transportation of manufactured goods,
                    leveraging their extensive network to ensure these items
                    reach their final destinations without delay.
                  </p>
                </div>
              </div>
              <div className="col-6 ftlservice-image">
                <img src={ftl_second_truck} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-12 ftlservice-third d-flex">
        <div className="col-md-6 ftlservice-image">
          <img src={threecontainer} alt="" />
        </div>
        <div className="col-md-6 ftlservice-box1 d-flex">
          <div className="main-child d-flex">
            <div className="ftlservice-box-subchild-1">
              <h1 className="text-danger">Heavy Equipment</h1>
              <p>
                We specialize in the transportation of heavy construction
                equipment, including machinery, tools, and large-scale building
                materials, utilizing specialized flatbeds and stake trucks for
                safe and secure delivery.
              </p>
            </div>
            <div className="ftlservice-box-subchild-2">
              <h1 className="text-danger">Building Materials</h1>
              <p>
                Experienced in handling a variety of construction goods like
                concrete, steel, and aggregates, ensuring they are delivered to
                construction sites in a timely and cost-effective manner.
              </p>
            </div>
          </div>

          <div className="sub-main-child">
            <div className="ftlservice-box-subchild-3 ">
              <h1 className="text-danger">Consumer Electronics</h1>
              <p className="">
                We are experienced in transporting consumer electronics,
                including televisions, computers, and other high-value items,
                ensuring they are delivered in a secure and timely manner.
              </p>
            </div>
            <div className="ftlservice-box-subchild-4">
              <h1 className="text-danger">Industrial Equipment</h1>
              <p className="">
                We also handle the transportation of industrial equipment,
                ensuring these critical assets are delivered on time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FTL;
