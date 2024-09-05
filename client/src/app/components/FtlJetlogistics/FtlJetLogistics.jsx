import React from "react";
import "./ftljetlogistics.scss";
import truckimg from "../../assets/Image 01.webp";
import card from "../../assets/Rectangle 203 (1).png";
import curveLine from "../../assets/Line 13 (2).png";

const FtlJetLogistics = () => {
  return (
    <div>
      <div className="container dim-ftlservice-section">
        <div className="row dim-ftlservice-row">
          <div className="col-12 dim-ftlservice-col">
            <h1>Why</h1>
            <div className="dim-heading ">
              <h1>Jet Trade Logistics?</h1>

              {/* <img src={curveLine} alt="" className="curve-line-1" /> */}

              <div className="col-12 mt-4 heading-section d-flex justify-content-between">
                <div className="col-sm-6 under-heading">
                  <h6>Experience</h6>
                  <div className="white-container-04">
                    <p className="p1">
                      Our team is well-versed in the intricacies of ODC
                      transportation, from planning and sourcing to
                      manufacturing and delivery.
                    </p>
                  </div>
                  <h6>Planning</h6>
                  <div className="white-container-05">
                    <p className="p2">
                      We employ advanced logistics, lean management, and
                      optimization techniques to ensure the most efficient,
                      cost-effective, and sustainable transportation of your
                      ODC.
                    </p>
                  </div>
                  <h6>Paramount Safety</h6>
                  <div className="white-container-06">
                    <p className="p3">
                      From route surveys to the deployment of specialty carriers
                      that are up to the demands and challenges that come with
                      each ODC consignment, we ensure all-around safety
                    </p>
                  </div>
                  <h6>Competitive Pricing</h6>
                  <div className="white-container-07">
                    <p className="p4">
                      We offer prices that are competitive without compromising
                      on service.
                    </p>
                  </div>
                </div>
                <div className="col-sm-6 under-truck">
                  <img src={truckimg} class="w-75" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FtlJetLogistics;
