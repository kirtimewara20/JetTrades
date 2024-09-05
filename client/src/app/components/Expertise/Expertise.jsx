import React from "react";
import "../Expertise/Expertise.scss";
import imgbox from "../../assets/Icon 01.webp";
import imgbox1 from "../../assets/Icon 02.webp";
import imgbox2 from "../../assets/Icon 03.webp";

const Expertise = () => {
  return (
    <div className="container expertise-section">
      <div className="row expertise-row">

        <div className="col-md-12 expertise-col">
          <h1 className="expertise fw-bold">Our Expertise</h1>
          <p className="paragraph-1 text-center mt-4 ">
            Our journey from a small company to a trusted leader in
            transportation solutions is a testament to our commitment to
            excellence and innovation.
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

        </div>
      </div>
    </div>
  );
};

export default Expertise;
