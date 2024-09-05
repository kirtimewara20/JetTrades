import React from "react";
// import logo from "../../assets/jet-logo2.png";
import newlogo from "../../assets/Logo/newlogo.png";
import "./footer.scss";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="footer-section">
      <footer className="text-center text-lg-start bg-body-tertiary text-muted">
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"></section>

        <section className="container text-center text-md-start mt-md-5">
          <div className="row mt-4">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-0 mb-0">
              <h6
                className="text-uppercase fw-bold"
                style={{ marginTop: "-2rem" }}
              >
                <img src={newlogo} alt="" className="mt-0" />
              </h6>
              <h3 className="text-danger fw-bold ">Think Trailer,</h3>
              <h3 className="text-danger fw-bold ">Think Jet Trade</h3>

              <div className="mt-4">
                <div className="d-flex gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    class="bi bi-geo-alt-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                  </svg>
                  <p className="" style={{ color: "black" }}>
                    53/1, Lasudia Mori, Dewas Naka, Indore, Madhya Pradesh -
                    452010
                  </p>
                </div>
                <div className="d-flex gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-telephone-fill"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"
                    />
                  </svg>
                  <p className="" style={{ color: "black" }}>
                    9425633363, 9883853255
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4 text-danger fs-5">
                Company
              </h6>
              <p className="text-dark fw-bold">
                <Link
                  to="/contact"
                  className="text-reset"
                  onClick={scrollToTop}
                  style={{ textDecoration: "none" }}
                >
                  Contact Us
                </Link>
              </p>
              <p className="text-dark fw-bold">
                <Link
                  to="/about"
                  className="text-reset"
                  onClick={scrollToTop}
                  style={{ textDecoration: "none" }}
                >
                  About Us
                </Link>
              </p>
              <p className="text-dark fw-bold">
                <Link
                  to="/resource"
                  className="text-reset"
                  onClick={scrollToTop}
                  style={{ textDecoration: "none" }}
                >
                  Resourse Center
                </Link>
              </p>
              <p className="text-dark fw-bold">
                <Link
                  to="/gallery"
                  className="text-reset"
                  onClick={scrollToTop}
                  style={{ textDecoration: "none" }}
                >
                  Gallery
                </Link>
              </p>
              <p className="text-dark fw-bold">
                <Link
                  to="/service"
                  className="text-reset"
                  onClick={scrollToTop}
                  style={{ textDecoration: "none" }}
                >
                  Services
                </Link>
              </p>
              <p className="text-dark fw-bold">
                <Link
                  to="/privacyPolicy"
                  className="text-reset"
                  onClick={scrollToTop}
                  style={{ textDecoration: "none" }}
                >
                  Privacy Policy
                </Link>
              </p>
              <p className="text-dark fw-bold">
                <Link
                  to="/termsAndConditions"
                  className="text-reset"
                  onClick={scrollToTop}
                  style={{ textDecoration: "none" }}
                >
                  Terms And Conditions
                </Link>
              </p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4 text-danger fs-5">
                Services
              </h6>
              <p className="text-dark fw-bold">
                <Link
                  to="/transportservice"
                  className="text-reset"
                  onClick={scrollToTop}
                  style={{ textDecoration: "none" }}
                >
                  Trailer Transport
                </Link>
              </p>
              <p className="text-dark fw-bold">
                <Link
                  to="/product"
                  className="text-reset"
                  onClick={scrollToTop}
                  style={{ textDecoration: "none" }}
                >
                  Full Truck Load
                </Link>
              </p>
              <p className="text-dark fw-bold">
                <Link
                  to="/dimensional"
                  className="text-reset"
                  onClick={scrollToTop}
                  style={{ textDecoration: "none" }}
                >
                  Over-Dimensional Cargo
                </Link>
              </p>
              <p className="text-dark fw-bold">
                <Link
                  to="/projectbased"
                  className="text-reset"
                  onClick={scrollToTop}
                  style={{ textDecoration: "none" }}
                >
                  Project-Based Transporation
                </Link>
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4 mx-5 text-danger fs-5">
                Where are we
              </h6>
              <Link
                to="/contact"
                className="text-reset"
                onClick={scrollToTop}
                style={{ textDecoration: "none" }}
              >
                <div className="d-flex flex-row justify-content-evenly">
                  <div className="text-dark fw-bold">
                    <p>Indore</p>
                    <p>Delhi</p>
                    <p>Kolkata</p>
                  </div>
                  <div className="text-dark fw-bold">
                    <p>Pune</p>
                    <p>Bhopal</p>
                    <p>Vadodara</p>
                  </div>
                </div>
              </Link>
            </div>
            {/* <div className="col-12 text-end ">
              <button className="scroll-to-top " onClick={scrollToTop}>
                <FaAngleUp />
              </button>
            </div> */}
          </div>
        </section>
        <div className="d-flex justify-content-between align-items-center foot">
          <div
            className=" mx-5 d-flex align-items-center p-3"
            style={{ marginTop: "-10px" }}
          >
            <a
              href="https://www.linkedin.com/company/jet-trade-and-logistics-india-pvt-ltd2/?originalSubdomain=in"
              target="_blank"
              className="icon-link"
            >
              <FaLinkedin
                style={{
                  fontSize: "20px",
                  margin: "5px",
                  borderRadius: "50px",
                  color: "black",
                }}
                className="icon"
              />
            </a>
            <a
              href=" https://www.facebook.com/profile.php?id=100082829333012"
              target="_blank"
              className="icon-link"
            >
              <FaFacebookSquare
                style={{
                  fontSize: "20px",
                  margin: "5px",
                  borderRadius: "50px",
                  color: "black",
                }}
                className="icon"
              />
            </a>
            <a
              href="https://www.instagram.com/jettradeandlogistic/"
              target="_blank"
              className="icon-link"
            >
              <FaInstagramSquare
                style={{
                  fontSize: "20px",
                  margin: "5px",
                  borderRadius: "50px",
                  color: "black",
                }}
                className="icon"
              />
            </a>
            {/* <a
              href="https://www.instagram.com/jettradeandlogistic/"
              target="_blank"
              className="icon-link"
            >
              <FaSquareTwitter
                style={{
                  fontSize: "20px",
                  margin: "5px",
                  borderRadius: "50px",
                  color: "black",
                }}
                className="icon"
              />
            </a> */}
          </div>
          <div
            className="text-end p-2 mb-2 mx-5 d-flex justify-content-between"
            style={{ color: "black" }}
          >
            <div className="text-dark-imp fw-bold">
              Copyright © 2024 by Jet Trade Logistics. All Rights reserved
            </div>
            <p className="text-dark-imp fw-bold mb-0 ms-0 d-flex align-items-center">
              <span
                className="mx-4 border-start border-2 border-danger"
                style={{ height: "100%" }}
              ></span>
              <a
                href="https://www.ehawkers.co.in/"
                target="_blank"
                style={{ color: "black" }}
              >
                Powered by: e-Hawkers Marketing LLP, Indore
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
