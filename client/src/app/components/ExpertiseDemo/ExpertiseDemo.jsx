import React from "react";
import "../ExpertiseDemo/ExpertiseDemo.scss";
import imgbox from "../../assets/Icon 01.webp";
import imgbox1 from "../../assets/Icon 02.webp";
import imgbox2 from "../../assets/Icon 03.webp";

const ExpertiseDemo = () => {
  return (
    <div className="container expertise-section-demo ">
      <div className="row expertise-row-demo">

        <div className="col-12 expertise-col-demo">
          <h1 className="expertise-demo fw-bold">Our Expertise</h1>
          <p className="new-para-1 text-center mt-4 ">
            Full Truck Load (FTL) is a shipping mode where a dedicated truck
            carries a single shipment for a single customer, utilizing the
            entire shipment space of the truck.
          </p>
          <p className="new-para-2">
            Ideal for industries such as manufacturing, construction, and
            automotive, where large, dedicated shipments are essential.
          </p>

          <div className="mt-5 expertise-containers1">

            <div className="col-md-4 expertise-col1">
              <h1 className="paragraph">Dedicated Carriers</h1>
              <div className="para-div">
                <p className="paras">
                  Tailored to your unique requirements like transporting
                  manufacturing materials, large equipment, or bulk products.
                </p>
                {/* <img src={imgbox} alt="" className="image-3"/> */}
              </div>
              <img src={imgbox} alt="" className="image-3"/>
            </div>

            <div className="col-md-4 expertise-col1 ">
              <h1 className="paragraph">Real-Time Tracking</h1>
              <div className="para-div">
                <p className="paras">
                  Our services combined with real-time tracking technology, allows
                  you to monitor your shipment on any given day.
                </p>
                {/* <img src={imgbox1} alt="" className="image-3" /> */}
              </div>
              <img src={imgbox1} alt="" className="image-3" /> 
            </div>

            <div className="col-md-4 expertise-col1 ">
              <h1 className="paragraph">Risk Mitigation</h1>
              <div className="para-div">
                <p className="paras">
                  Our dedicated trucks ensure that your shipment is transported
                  directly from the point of origin to the destination.
                </p>
                {/* <img src={imgbox2} alt="" className="image-3" /> */}
              </div>
              <img src={imgbox2} alt="" className="image-3 " />
            </div>

          </div>

          {/* <div className="container colda mt-5">
            <div className="row g-4 expertise-containers">
              <div className="col-md-4  text-center expertise-col1-demo">
                <div className="para-section">
                  <h1 className="paragraph-demo">Dedicated Carriers</h1>
                  <p className="paras-demo">
                    Tailored to your unique requirements like transporting
                    manufacturing materials, large equipment, or bulk products.
                  </p>
                </div>
                <img
                  src={imgbox}
                  alt="Dedicated Carriers"
                  className="image-demo img-fluid"
                />
              </div>
              <div className="col-md-4 text-center expertise-col1-demo">
                <div className="para-section">
                  <h1 className="paragraph-demo">Real-Time Tracking</h1>
                  <p className="paras-demo">
                    Our services, combined with real-time tracking technology,
                    allow you to monitor your shipment on any given day.
                  </p>
                </div>

                <img
                  src={imgbox1}
                  alt="Real-Time Tracking"
                  className="image-demo img-fluid"
                />
              </div>
              <div className="col-md-4 text-center expertise-col1-demo">
                <div className="para-section">
                  <h1 className="paragraph-demo">Risk Mitigation</h1>
                  <p className="paras-demo">
                    Our dedicated trucks ensure that your shipment is
                    transported directly from the point of origin to the
                    destination.
                  </p>
                </div>
                <img
                  src={imgbox2}
                  alt="Risk Mitigation"
                  className="image-demo img-fluid"
                />
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ExpertiseDemo;
