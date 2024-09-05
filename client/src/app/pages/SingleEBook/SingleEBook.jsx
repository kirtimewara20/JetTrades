 import React, { useEffect, useState } from "react";
import "./SingleEBook.scss";
import back from "../../assets/Group 408 (1).png";
import RelatedPost from "../../components/RelatedPost/RelatedPost";
import GetInTouch from "../../components/getInTouch/getInTouch";
import Transport from "../../components/transport/transport";
import { useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { Modal, Button, Form } from "react-bootstrap";
import EBooks from "../../components/E-Books/EBooks";

const SingleEBook = () => {
  const [BlogsData, setBlogData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });
  let { id } = useParams();
  // const token = localStorage.getItem("token");
  const getBlogDetails = () => {
    const config = {
      url: process.env.REACT_APP_BASE_URL + `api/getEbookById/${id}`,
      method: "get",
    };

    axios
      .request(config)
      .then((response) => {
        console.log("Hello");
        console.log(response?.data);
        if (response?.data?.status == true) {
          console.log("dfghj", response?.data);
          setBlogData(response?.data?.data);
          // toast.success("Blog Get Successfully", {
          //   position: "bottom-right",
          //   autoClose: 4000,
          //   pauseOnHover: true,
          //   draggable: true,
          //   theme: "dark",
          // });
        }
        if (response?.data?.status == false) {
          if (response?.data?.response_code == 500) {
            toast.error("Problem With Data Fetching", {
              position: "bottom-right",
              autoClose: 4000,
              pauseOnHover: true,
              draggable: true,
              theme: "light",
            });
          } else if (response?.data?.response_code == 404) {
            toast.error("Problem With Data Fetching", {
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
          toast.warn("Problem With Data Fetching", {
            position: "bottom-right",
            autoClose: 4000,
            pauseOnHover: true,
            draggable: true,
            theme: "light",
          });
        }
      });
  };

  const sendDownloadData = () => {
    const config = {
      url: process.env.REACT_APP_BASE_URL + `api/addCaseStudyInc`,
      method: "post",
      data: {
        name: formData.name,
        email: formData.email,
        phonenumber: formData.phoneNumber,
      },
    };

    axios
      .request(config)
      .then((response) => {
        console.log("Hello");
        console.log(response?.data);
        if (response?.data?.status == true) {
          // toast.success("Blog Get Successfully", {
          //   position: "bottom-right",
          //   autoClose: 4000,
          //   pauseOnHover: true,
          //   draggable: true,
          //   theme: "dark",
          // });
        }
        if (response?.data?.status == false) {
          if (response?.data?.response_code == 500) {
            toast.error("Problem With Data Fetching", {
              position: "bottom-right",
              autoClose: 4000,
              pauseOnHover: true,
              draggable: true,
              theme: "light",
            });
          } else if (response?.data?.response_code == 404) {
            toast.error("Problem With Data Fetching", {
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
          toast.warn("Problem With Data Fetching", {
            position: "bottom-right",
            autoClose: 4000,
            pauseOnHover: true,
            draggable: true,
            theme: "light",
          });
        }
      });
  };

  const downloadFile = async () => {
    try {
      // Check if all required fields are filled
      if (formData.name && formData.email && formData.phoneNumber) {
        sendDownloadData();
        const fileUrl = BlogsData?.pdf;
        const link = document.createElement("a");
        link.href = fileUrl;
        link.setAttribute("download", "filename.pdf"); // Set desired filename
        document.body.appendChild(link);
        link.click();
        // Clean up
        link.parentNode.removeChild(link);
      } else {
        // Show modal if any field is missing
        setShowModal(true);
      }
    } catch (error) {
      console.error("Error downloading file:", error);
    }
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    getBlogDetails();
  }, []);

  const [TitleTag, setTitleTage] = useState("Related Posts");
  const [contentTag, setContentTag] = useState(
    "we understand that every business has unique logistics needs, and we are here to ensure that your goods are transported safely, efficiently, and on time"
  );
  return (
    <>
      <div class="container">
      <div className="single-ebook">
        <img
          src={BlogsData?.image}
          alt="Background"
          className="single-ebook-back"
        />
      </div>
    </div>

    <div className="container single-ebook-card">
        <div className="row single-ebook-body">
          <div className="col-10 single-ebook-content">
            <div className="single-ebook-whitebox">
              <div className="single-ebook-whitebox-content">
                <h1>{BlogsData?.title}</h1>
                <br></br>
                <p>{BlogsData?.content}</p>
              </div>
              
              {/*Ebook Download Button */}
              <div className="white-box-btn">
                <button
                  className="btn btn-primary"
                  onClick={() => downloadFile(BlogsData?.pdf)}
                >
                  Download
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* <div className="container single-box">
        <div className="row single-row">
          <div className="col-12 single-col">
            <div className="single-white-box">
              <div className="white-box-desc">
                <h1>{BlogsData?.title}</h1>
                <br></br>
                <p>{BlogsData?.content}</p>
              </div>
              <div className="white-box-btn">
                <button
                  className="btn btn-primary"
                  onClick={() => downloadFile(BlogsData?.pdf)}
                >
                  Download
                </button>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Enter Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Name:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Email:</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="formPhoneNumber">
              <Form.Label>Phone Number:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter phone number"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={downloadFile}>
            Download
          </Button>
        </Modal.Footer>
      </Modal>

      {/* <RelatedPost /> */}
      <EBooks TitleTag={TitleTag} contentTag={contentTag} />
      <br></br>
      <br></br>
      <GetInTouch />
      <Transport />
    </>
  );
};

export default SingleEBook;
