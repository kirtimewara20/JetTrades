import React, { useState } from "react";
import "./Dashboard.scss";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import pdflogo from "../../assets/pdflogo.webp";
// done
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  overflow: "auto",
  maxHeight: "80vh",
};

const Dashboard = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState(0);

  const [contactDetail, setContactDetail] = useState();
  const [enquiryDetails, setEnquiryDetails] = useState([]);
  const [productContactDetail, setProductContactDetail] = useState();
  const [inquiry, setInquiry] = useState();
  const [searchTerm, setSearchTerm] = useState("");
  const token = localStorage.getItem("tokenjettraders");

  useEffect(() => {
    if (token) {
      navigate("/dashboard");
    } else {
      navigate("/login");
    }
  }, []);
  // kjfd f

  const enquiryHandler = () => {
    setSearchTerm("");
    setValue(2);
  };
  const ContactUsDetailsHandler = () => {
    setSearchTerm("");
    setValue(3);
  };

  const ProductContactDetailsHandler = () => {
    setSearchTerm("");
    setValue(5);
  };

  const BlogHandler = () => {
    setSearchTerm("");
    setValue(4);
  };

  const DownloadPDF = () => {
    setSearchTerm("");
    setValue(7);
  };

  const handleLogout = () => {
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: process.env.REACT_APP_BASE_URL + "api/logOut",
      headers: {
        authorization: token,
      },
      data: { token },
    };
    axios
      .request(config)
      .then((response) => {
        console.log(response);
        localStorage.clear();
        if (response?.data?.status == true) {
          if (response?.data?.response_code == 200) {
            localStorage.clear();
            navigate("/");
          }
        } else if (response?.data?.status == false) {
          if (response?.data?.response_code == 401) {
            localStorage.clear();
            navigate("/");
          }
        }
      })
      .catch((error) => {
        console.log(error);
        localStorage.clear();
        navigate("/");
      });
  };

  const [filteredBlogs, setFilteredBlogs] = useState([]);

  //////////////////////////////////////////////////////////////////////////\

  // this one for blog
  const handleDeleteBlog = (e, itemId) => {
    // Call the handleDelete function with the itemId
    // handleDelete(itemId);
    const updatedBlogs = filteredBlogs.filter((blog) => blog._id !== itemId);
    setFilteredBlogs(updatedBlogs);
    const config = {
      url: process.env.REACT_APP_BASE_URL + `api/deleteBlog/${itemId}`,
      headers: {
        authorization: token,
      },
      method: "delete",
    };

    axios
      .request(config)
      .then((response) => {
        console.log("Hello");
        console.log(response?.data);
        if (response?.data?.status == true) {
          console.log("dfghj", response.data);
          // toast.success("Blog Delete Successfully", {
          //   position: "bottom-right",
          //   autoClose: 4000,
          //   pauseOnHover: true,
          //   draggable: true,
          //   theme: "dark",
          // });
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
          toast.warn("Internal Server Error", {
            position: "bottom-right",
            autoClose: 4000,
            pauseOnHover: true,
            draggable: true,
            theme: "light",
          });
        }
      });
  };
  const getBlogDetails = () => {
    const config = {
      url: process.env.REACT_APP_BASE_URL + `api/getAllBlogs`,
      headers: {
        authorization: token,
      },
      method: "get",
    };

    axios
      .request(config)
      .then((response) => {
        console.log("Hello");
        console.log(response?.data);
        if (response?.data?.status == true) {
          console.log("dfghj", response?.data);
          setFilteredBlogs(response?.data?.data);
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

  // get Contact info
  const getContactDetails = () => {
    const config = {
      url: process.env.REACT_APP_BASE_URL + `api/getMessage`,
      headers: {
        authorization: token,
      },
      method: "get",
    };

    axios
      .request(config)
      .then((response) => {
        console.log("Hello");
        console.log(response?.data);
        if (response?.data?.status == true) {
          console.log("dfghj", response?.data);
          setContactDetail(response?.data?.data);
          // toast.success("Contact Info get Successfully", {
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

  //get Case Study info
  const getCaseStudyInfo = () => {
    const config = {
      url: process.env.REACT_APP_BASE_URL + `api/getAllCaseStudy`,
      headers: {
        authorization: token,
      },
      method: "get",
    };

    axios
      .request(config)
      .then((response) => {
        console.log("Hello");
        console.log(response?.data);
        if (response?.data?.status == true) {
          console.log("dfghj", response?.data);
          setEnquiryDetails(response?.data?.data);
          // toast.success("Case Study get Successfully", {
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
  const deleteCaseStudyInfo = (itemId) => {
    const updatedBlogs = enquiryDetails.filter((blog) => blog._id !== itemId);
    setEnquiryDetails(updatedBlogs);
    const config = {
      url: process.env.REACT_APP_BASE_URL + `api/deleteCaseStudy/${itemId}`,
      headers: {
        authorization: token,
      },
      method: "delete",
    };

    axios
      .request(config)
      .then((response) => {
        console.log("Hello");
        console.log(response?.data);
        if (response?.data?.status == true) {
          console.log("dfghj", response.data);
          // toast.success("Blog Delete Successfully", {
          //   position: "bottom-right",
          //   autoClose: 4000,
          //   pauseOnHover: true,
          //   draggable: true,
          //   theme: "dark",
          // });
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
          toast.warn("Internal Server Error", {
            position: "bottom-right",
            autoClose: 4000,
            pauseOnHover: true,
            draggable: true,
            theme: "light",
          });
        }
      });
  };

  //get E-book study info
  const getEbookStudyInfo = () => {
    const config = {
      url: process.env.REACT_APP_BASE_URL + `api/getAllEbook`,
      headers: {
        authorization: token,
      },
      method: "get",
    };

    axios
      .request(config)
      .then((response) => {
        console.log("Hello");
        console.log(response?.data);
        if (response?.data?.status == true) {
          console.log("dfghj", response?.data);
          setProductContactDetail(response?.data?.data);
          // toast.success("E-Book get Successfully", {
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

  const deleteEbookInfo = (itemId) => {
    const updatedBlogs = productContactDetail.filter(
      (blog) => blog._id !== itemId
    );
    setProductContactDetail(updatedBlogs);
    const config = {
      url: process.env.REACT_APP_BASE_URL + `api/deleteEbook/${itemId}`,
      headers: {
        authorization: token,
      },
      method: "delete",
    };

    axios
      .request(config)
      .then((response) => {
        console.log("Hello");
        console.log(response?.data);
        if (response?.data?.status == true) {
          console.log("dfghj", response.data);
          // toast.success("E-book Delete Successfully", {
          //   position: "bottom-right",
          //   autoClose: 4000,
          //   pauseOnHover: true,
          //   draggable: true,
          //   theme: "dark",
          // });
        } else if (response?.data?.status == false) {
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
          toast.warn("Internal Server Error", {
            position: "bottom-right",
            autoClose: 4000,
            pauseOnHover: true,
            draggable: true,
            theme: "light",
          });
        }
      });
  };

  // handle inquiry
  const getInquiryData = () => {
    const config = {
      url: process.env.REACT_APP_BASE_URL + `api/getAllInquiry`,
      headers: {
        authorization: token,
      },
      method: "get",
    };

    axios
      .request(config)
      .then((response) => {
        console.log("Hello");
        console.log(response?.data);
        if (response?.data?.status == true) {
          console.log("dfghj", response?.data);
          setInquiry(response?.data?.data);
          // toast.success("E-Book get Successfully", {
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

  console.log(enquiryDetails);

  // navigate
  const createBlognavigate = () => {
    navigate("/createBlog");
  };

  const createCaseStudies = () => {
    navigate("/createCaseStudies");
  };

  const createEBook = () => {
    navigate("/createEbook");
  };
  useEffect(() => {
    getBlogDetails();
    getContactDetails();
    getCaseStudyInfo();
    getEbookStudyInfo();
    getInquiryData();
  }, []);

  return (
    <>
      <div className="dashboard-main mt-4 mb-2">
        <div className="dashboard-header row">
          <div className={`col dash-inner ${value === 2 ? "active-tab" : ""}`}>
            <div className="gift" onClick={enquiryHandler}>
              <p>Case Studies</p>
            </div>
          </div>
          <div className={`col dash-inner ${value === 5 ? "active-tab" : ""}`}>
            <div
              className="gift text-center"
              onClick={ProductContactDetailsHandler}
            >
              <p>E-Books</p>
            </div>
          </div>
          <div className={`col dash-inner ${value === 3 ? "active-tab" : ""}`}>
            <div className="gift" onClick={ContactUsDetailsHandler}>
              <p> Contact Details</p>
            </div>
          </div>

          <div className={`col dash-inner ${value === 4 ? "active-tab" : ""}`}>
            <div className="gift" onClick={BlogHandler}>
              <p> Blogs</p>
            </div>
          </div>
          {/* <div className={`col dash-inner ${value === 6 ? "active-tab" : ""}`}>
            <div className="gift" onClick={CallBackHandler}>
              <p>CallBack</p>
            </div>
          </div> */}
          <div className={`col dash-inner ${value === 7 ? "active-tab" : ""}`}>
            <div className="gift" onClick={DownloadPDF}>
              <p>E-Books Enquiry</p>
            </div>
          </div>
          <div className={`col dash-inner`}>
            <div className="logout" onClick={handleLogout}>
              <p>Logout</p>
            </div>
          </div>
        </div>
        {/* Blogs create button */}
        {value == 4 && (
          <div className="dashboard-value0">
            <div className="p-4 d-flex align-items-center justify-content-between dashboard-value0-outer">
              <button className="create-product" onClick={createBlognavigate}>
                Create
              </button>
              {/* <input
                type="text"
                className="style"
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder="Search Results"
              /> */}
            </div>
          </div>
        )}

        {/* Case studies create button */}
        {value == 2 && (
          <div className="dashboard-value0">
            <div className="p-4 d-flex align-items-center justify-content-between dashboard-value0-outer">
              <button className="create-product" onClick={createCaseStudies}>
                Create
              </button>
              {/* <input
                type="text"
                className="style"
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder="Search Results"
              /> */}
            </div>
          </div>
        )}

        {/* E-books create button */}
        {value == 5 && (
          <div className="dashboard-value0">
            <div className="p-4 d-flex align-items-center justify-content-between dashboard-value0-outer">
              <button className="create-product" onClick={createEBook}>
                Create
              </button>
              {/* <input
                type="text"
                className="style"
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder="Search Results"
              /> */}
            </div>
          </div>
        )}

        {value === 2 && (
          <div className="dashboard-container-enquiry">
            <div className="responses">
              <div className="resonse-head w-100 m-0 row">
                <div className="response-name col-md-2 col-2">
                  <div className="name-head d-flex justify-content-center">
                    <h6>TITLE</h6>
                  </div>
                </div>
                <div className="response-purpose col-md-4">
                  <div className="name-head d-flex justify-content-center">
                    <h6>MESSAGE</h6>
                  </div>
                </div>
                <div className="response-company col-md-3 ">
                  <div className="name-head d-flex justify-content-center">
                    <h6>IMAGE</h6>
                  </div>
                </div>
                <div className="response-company col-md-3 ">
                  <div className="name-head d-flex justify-content-center">
                    <h6>DELETE</h6>
                  </div>
                </div>
              </div>
              <hr className="line-main-head" />
              {enquiryDetails?.map((item, index) => {
                return (
                  <div className="about-response row m-0" key={index}>
                    <div className="about-response-name-outer col-md-2 col-2">
                      <div className="about-response-name ">
                        <p>{item?.title}</p>
                      </div>
                    </div>
                    <div className="about-response-company-outer col-4">
                      <div className="about-response-company ">
                        <p className="text-center">{item?.content}</p>
                      </div>
                    </div>
                    <div className="about-response-purpose-outer col-3">
                      <div className="about-response-purpose ">
                        <img
                          src={item?.image}
                          alt=""
                          style={{ width: "100%" }}
                        />
                      </div>
                    </div>
                    <div className="about-response-purpose-outer product-action align-self-center col-3">
                      <div className="about-response-purpose .action-button">
                        <button
                          onClick={() => deleteCaseStudyInfo(item?._id)}
                          className="delete-text"
                          style={{
                            backgroundColor: "#f1f3fc",
                            padding: "4%",
                            border: "1px black solid",
                            borderRadius: "10px",
                            boxShadow:
                              "5px 10px 10px rgba(128, 128, 128, 0.496)",
                          }}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
              <hr className="line-main" />
            </div>
          </div>
        )}
        {value === 3 && (
          <div className="dashboard-container-contact">
            <div className="responses">
              <div className="resonse-head w-100 m-0 row">
                <div className="response-name col-1">
                  <div className="name-head d-flex justify-content-center">
                    <h6>NAME</h6>
                  </div>
                </div>
                <div className="response-contact col-2">
                  <div className="name-head d-flex justify-content-center">
                    <h6>EMAIL</h6>
                  </div>
                </div>
                <div className="response-contact col-2">
                  <div className="name-head d-flex justify-content-center">
                    <h6>NUMBER</h6>
                  </div>
                </div>
                <div className="response-purpose col-2">
                  <div className="name-head d-flex justify-content-center">
                    <h6>CITY</h6>
                  </div>
                </div>
                <div className="response-purpose col-2">
                  <div className="name-head d-flex justify-content-center">
                    <h6>COMPANY</h6>
                  </div>
                </div>
                <div className="response-purpose col-3">
                  <div className="name-head d-flex justify-content-center">
                    <h6>MESSAGE</h6>
                  </div>
                </div>
              </div>
              <hr className="line-main-head" />
              {contactDetail?.map((item, index) => {
                return (
                  <div key={index} className="about-response row">
                    <div className="about-response-name-outer col-1">
                      <div className="about-response-name ">
                        <p>{item?.name}</p>
                      </div>
                    </div>
                    <div className="about-response-contact-outer col-2">
                      <div className="about-response-contact ">
                        <p>
                          {item?.email?.length > 15 ? (
                            <p>{item?.email.substring(0, 15)}...</p>
                          ) : (
                            <p>{item?.email}</p>
                          )}
                        </p>
                      </div>
                    </div>
                    <div className="about-response-contact-outer col-2">
                      <div className="about-response-contact ">
                        <p>{item?.phoneNumber}</p>
                      </div>
                    </div>
                    <div className="about-response-contact-outer col-2">
                      <div className="about-response-contact ">
                        <p>{item?.city}</p>
                      </div>
                    </div>
                    <div className="about-response-contact-outer col-2">
                      <div className="about-response-contact ">
                        <p>{item?.company}</p>
                      </div>
                    </div>
                    <div className="about-response-purpose-outer col-3">
                      <div className="about-response-purpose ">
                        <p>
                          {item?.message?.length > 10 ? (
                            <p className="text-center">
                              {item?.message.substring(0, 10)}...
                            </p>
                          ) : (
                            <p>{item?.message}</p>
                          )}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
              <hr className="line-main" />

              <hr className="line-main" />
            </div>
          </div>
        )}
        {value === 4 && (
          <div className="dashboard-container-blog">
            <div className="product">
              <div className="about-product-head w-100 row">
                <div className="product-image col-2 col-md-2">
                  <div className="image-head d-flex justify-content-center">
                    <h6>TITLE</h6>
                  </div>
                </div>
                <div className="product-action col-5 col-md-5 d-flex align-items-center justify-content-center">
                  <div className="action">
                    <h6>DESCRIPTION</h6>
                  </div>
                </div>
                <div className="product-action col-3 col-md-3 d-flex align-items-center justify-content-center">
                  <div className="action">
                    <h6>IMAGE</h6>
                  </div>
                </div>
                <div className="product-action col-2 col-md-2 d-flex align-items-center justify-content-center">
                  <div className="action">
                    <h6>DELETE</h6>
                  </div>
                </div>
              </div>
              <hr className="line-main-head" />

              {filteredBlogs.length === 0 ? (
                <div className="about-no-product-main">
                  <p>No Blogs found.</p>
                </div>
              ) : (
                <div className="about-product-main">
                  {filteredBlogs.map((item, index) => {
                    return (
                      <div className="about-product">
                        <div className="about-response-name-outer col-md-2 col-2">
                          <div className="about-response-name ">
                            <p className="text-center">{item.title}</p>
                          </div>
                        </div>
                        <div className="about-response-purpose-outer col-5">
                          <div className="about-response-purpose ">
                            <p className="text-center">{item.content}</p>
                          </div>
                        </div>
                        <div className="about-response-company-outer col-3">
                          <div className="about-response-company ">
                            <img
                              src={item.image}
                              alt=""
                              style={{ width: "100%" }}
                            />
                          </div>
                        </div>

                        {/* button */}
                        <div className="product-action col-2 col-md-2 d-flex align-items-center justify-content-center">
                          <div className="action-button d-flex flex-column">
                            <button
                              className="delete-item"
                              onClick={() => {
                                handleDeleteBlog(index, item._id);
                              }}
                            >
                              <i className="bi bi-trash"></i>
                              <div className="delete-text">Delete</div>
                            </button>
                            {/* <button
                              className="edit-item"
                              onClick={() => {
                                editBlogHandler(item._id);
                              }}
                            >
                              <i className="bi bi-pencil-square"></i>
                              <div className="edit-text">Edit</div>
                            </button> */}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

              <hr className="line-main" />
            </div>
          </div>
        )}
        {value === 5 && (
          <div className="dashboard-container-contact">
            <div className="responses">
              <div className="resonse-head m-0 w-100 row">
                <div className="response-name col-2">
                  <div className="name-head d-flex justify-content-center">
                    <h6>TITLE</h6>
                  </div>
                </div>
                <div className="response-contact col-4">
                  <div className="name-head d-flex justify-content-center">
                    <h6>MESSAGE</h6>
                  </div>
                </div>
                <div className="response-purpose col-2">
                  <div className="name-head d-flex justify-content-center">
                    <h6>PDF</h6>
                  </div>
                </div>
                <div className="response-contact col-2">
                  <div className="name-head d-flex justify-content-center">
                    <h6>IMAGE</h6>
                  </div>
                </div>
                <div className="response-contact col-2">
                  <div className="name-head d-flex justify-content-center">
                    <h6>Delete</h6>
                  </div>
                </div>

                <hr />
                {productContactDetail?.map((item, index) => {
                  return (
                    <div key={index} className="about-response row">
                      <div className="about-response-name-outer col-2">
                        <div className="about-response-name ">
                          <p>{item?.title}</p>
                        </div>
                      </div>
                      <div className="about-response-contact-outer col-4">
                        <div className="about-response-contact ">
                          <p>{item?.content}</p>
                        </div>
                      </div>
                      <div className="about-response-purpose-outer col-2">
                        <div className="about-response-purpose ">
                          <a href={item?.pdf} download="filename.pdf">
                            <img
                              src={pdflogo}
                              alt="PDF Icon"
                              style={{ width: "70%" }}
                            />
                          </a>
                        </div>
                      </div>
                      <div className="about-response-purpose-outer col-2">
                        <div className="about-response-purpose ">
                          <img
                            src={item?.image}
                            alt="Img"
                            style={{ width: "100%" }}
                          />
                        </div>
                      </div>
                      <div className="about-response-purpose-outer col-2">
                        <div className="about-response-purpose ">
                          <button
                            onClick={() => deleteEbookInfo(item?._id)}
                            style={{
                              backgroundColor: "#f1f3fc",
                              padding: "4%",
                              border: "1px black solid",
                              borderRadius: "10px",
                              boxShadow:
                                "5px 10px 10px rgba(128, 128, 128, 0.496)",
                            }}
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
        {value === 7 && (
          <div className="dashboard-container-contact">
            <div className="responses">
              <div className="resonse-head m-0 w-100 row">
                <div className="response-name col-3">
                  <div className="name-head d-flex justify-content-center">
                    <h6>NAME</h6>
                  </div>
                </div>
                <div className="response-contact col-3">
                  <div className="name-head d-flex justify-content-center">
                    <h6>NUMBER</h6>
                  </div>
                </div>
                <div className="response-contact col-5">
                  <div className="name-head d-flex justify-content-center">
                    <h6>EMAIL</h6>
                  </div>
                </div>
                {/* <div className="response-contact col-5">
                  <div className="name-head d-flex justify-content-center">
                    <h6>CITY</h6>
                  </div>
                </div>
                <div className="response-contact col-5">
                  <div className="name-head d-flex justify-content-center">
                    <h6>COMPANY</h6>
                  </div>
                </div> */}

                <hr />
                {inquiry?.map((item, index) => {
                  return (
                    <div key={index} className="about-response row">
                      <div className="about-response-name-outer col-3">
                        <div className="about-response-name ">
                          <p>{item?.name}</p>
                        </div>
                      </div>
                      <div className="about-response-contact-outer col-3">
                        <div className="about-response-contact ">
                          <p>{item?.phonenumber}</p>
                        </div>
                      </div>
                      <div className="about-response-purpose-outer col-5">
                        <div className="about-response-purpose ">
                          <p className="text-center">{item?.email}</p>
                        </div>
                      </div>
                      <div className="about-response-purpose-outer col-5">
                        <div className="about-response-purpose ">
                          <p className="text-center">{item?.city}</p>
                        </div>
                      </div>
                      <div className="about-response-purpose-outer col-5">
                        <div className="about-response-purpose ">
                          <p className="text-center">{item?.company}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Dashboard;
