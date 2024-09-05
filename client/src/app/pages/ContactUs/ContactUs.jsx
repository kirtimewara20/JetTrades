import react, { useState } from "react";
import "./ContactUs.scss";
import { Link } from "react-router-dom";
import axios from "axios";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutubeSquare } from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css"; // Import the CSS
import { ToastContainer, toast } from "react-toastify";
// import contactBack from "../../assets/contact-back.png";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState();
  const [message, setMessage] = useState("");
  const [city, setCity] = useState("");
  const [company, setCompany] = useState("");

  const onChangeInputHandler = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "number":
        setPhoneNumber(value);
        break;
      case "message":
        setMessage(value);
        break;
      case "city":
        setCity(value);
        break;
      case "company":
        setCompany(value);
        break;
      default:
        break;
    }
  };

  const handleContact = (e) => {
    e.preventDefault();
    const config = {
      url: process.env.REACT_APP_BASE_URL + "api/addUserMessage",
      method: "post",
      data: {
        name,
        email,
        phoneNumber,
        message,
        city,
        company,
      },
    };

    axios
      .request(config)
      .then((response) => {
        if (response?.data?.status == true) {
          console.log("dfghj", response.data);
          setName("");
          setEmail("");
          setPhoneNumber("");
          setMessage("");
          setCity("");
          setCompany("");
          toast.success("Message Send successfully", {
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
          toast.warn("Fill Form", {
            position: "bottom-right",
            autoClose: 4000,
            pauseOnHover: true,
            draggable: true,
            theme: "light",
          });
        }
      });
  };

  return (
    <div>
      <div className="contact-main">
        <div className="contact-submain row">
          <div className="lets-talk-outer col-12">
            <div className="lets-talk-inner">
              <div className="lets-talk-text">
                <h1>Let's Talk!</h1>
                <p>
                  Get in touch with us using the enquiry form or contact details
                  below.
                </p>
              </div>
              <div className="lets-talk-form">
                <div className="lets-talk-form-inner row">
                  <div className="name col-sm-4">
                    <h6>Name</h6>
                    <input
                      type="text"
                      name="name"
                      value={name}
                      onChange={onChangeInputHandler}
                      placeholder="Name"
                    />
                  </div>
                  <div className="name col-sm-4">
                    <h6>Email</h6>
                    <input
                      type="text"
                      name="email"
                      value={email}
                      onChange={onChangeInputHandler}
                      placeholder="Email"
                    />
                  </div>
                  <div className="name col-sm-4">
                    <h6>Number</h6>
                    <input
                      type="tel"
                      name="number"
                      value={phoneNumber}
                      onChange={onChangeInputHandler}
                      placeholder="Number"
                    />
                  </div>
                  <div className="name col-sm-4">
                    <h6>City</h6>
                    <textarea
                      type="text"
                      name="city"
                      value={city}
                      onChange={onChangeInputHandler}
                      placeholder="City"
                    />
                  </div>
                  <div className="name col-sm-8">
                    <h6>Company</h6>
                    <textarea
                      type="text"
                      name="company"
                      value={company}
                      onChange={onChangeInputHandler}
                      placeholder="Company"
                    />
                  </div>
                  <div className="name col-sm-12">
                    <h6>Message</h6>
                    <textarea
                      type="text"
                      name="message"
                      value={message}
                      onChange={onChangeInputHandler}
                      placeholder="Message"
                    />
                  </div>
                  <div className="send-button" onClick={handleContact}>
                    <button>Send</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-side col-12">
            <div className="contact-side-outer row">
              <div className="location d-flex flex-row  col-sm-6 col-12">
                <i class="bi bi-geo-alt"></i>
                <div className="location-text">
                  <h5>Our Locations</h5>
                  <p>
                    Indore - 8 & 9, Sanghi Colony, Old Palasia (Opposite to
                    Industry House), Indore, Madhya Pradesh - 452001
                  </p>
                  <br />
                  <p>
                    Indore - 53/1, Lasudia Mori, Dewas Naka, Indore, Madhya
                    Pradesh - 452010
                  </p>
                  <br />
                  <p>
                    Pithampur - Jet Trade and Logistics, Shop No. 20, Patel
                    Palace near Badgaon Police Station, Pithampur, Sector-3 -
                    454775
                  </p>
                  <br />
                  <p>
                    Hyderabad - 5-8-457/89/8, Chirag Ali Ln, Chirag Ali Lane,
                    Abids, Hyderabad, Telangana - 500001
                  </p>
                  <br />
                  <p>
                    Kolkata - C/o, P-9 New C.I.T Road, Floor-1st, Kolkata -
                    700073
                  </p>
                  <br />
                  <p>
                    Vadodara - C3/10, Nageshwar Shopping Center vip road,
                    Vadodara - 390022
                  </p>
                  <br />
                  <p>
                    Delhi - 5/2, D. B. Gupta Road, 102, 1st Floor, Rajnigandha,
                    Paharganj, New Delhi - 110055
                  </p>
                </div>
              </div>
              <div className="location d-flex flex-row col-sm-6 col-12">
                <i class="bi bi-envelope"></i>
                <div className="location-text">
                  <h5>Quick Contact</h5>
                  <p>
                    {/* <span>Email: </span> */}
                    <Link to="mailto:contact@jettradelogistics.in">
                      contact@jettradelogistics.in
                    </Link>
                    <br />
                    <Link to="mailto:contact@jettradelogistics.in">
                      jettradeitdepartmnet@gmail.com
                    </Link>
                  </p>
                </div>
              </div>
              <div className="location d-flex flex-row  col-sm-6 col-12">
                <i class="bi bi-telephone"></i>
                <div className="location-text">
                  <h5>Phone Number</h5>
                  <Link to="tel:+919425633363">9425633363</Link>
                  <br />
                  <Link to="tel:+9883853255">9883853255</Link>
                </div>
              </div>
              <div className="follow-us  col-sm-6 col-12">
                <h4>Follow Us</h4>
                <div className="logo">
                  {/* <div className="logo-in">
                    <Link to="#">
                      <FaSquareTwitter
                        style={{
                          fontSize: "20px",
                          borderRadius: "50px",
                          color: "black",
                        }}
                      />
                    </Link>
                  </div> */}
                  <div className="logo-in">
                    <Link to="https://www.linkedin.com/company/jet-trade-and-logistics-india-pvt-ltd2/?originalSubdomain=in">
                      <FaLinkedin
                        style={{
                          fontSize: "20px",
                          margin: "5px",
                          borderRadius: "50px",
                          color: "black",
                        }}
                      />
                    </Link>
                  </div>
                  <div className="logo-in">
                    <Link to="https://www.facebook.com/profile.php?id=100082829333012">
                      <FaFacebookSquare
                        style={{
                          fontSize: "20px",
                          margin: "5px",
                          borderRadius: "50px",
                          color: "black",
                        }}
                      />
                    </Link>
                  </div>
                  <div className="logo-in">
                    <Link to="https://www.instagram.com/jettradeandlogistic/">
                      <FaInstagramSquare
                        style={{
                          fontSize: "20px",
                          margin: "5px",
                          borderRadius: "50px",
                          color: "black",
                        }}
                      />
                    </Link>
                  </div>
                  {/* <div className="logo-in">
                    <Link to="https://www.youtube.com/@jettradeandlogistic">
                      <FaYoutubeSquare
                        style={{
                          fontSize: "20px",
                          margin: "5px",
                          borderRadius: "50px",
                          color: "black",
                        }}
                      />
                    </Link>
                    // idjfoi adskf oifh 
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Contact;
