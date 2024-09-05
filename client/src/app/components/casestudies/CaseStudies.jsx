import React, { useEffect, useState } from "react";
import "./CaseStudies.scss";
import axios from "axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const CaseStudies = (props) => {
  const [showMore, setShowMore] = useState(false);
  const [CaseStudiesData, setCaseStudiesData] = useState([]);

  const { TitleTag, contentTag } = props;
  
  const handleViewMore = () => {
    setShowMore(true);
    window.scrollTo(0,0)
  };

  const handleViewLess = () => {
    setShowMore(false);
    window.scrollTo(0,0)
  };

  const getCaseStudyInfo = () => {
    const config = {
      url: process.env.REACT_APP_BASE_URL + `api/getAllCaseStudy`,
      method: "get",
    };

    axios
      .request(config)
      .then((response) => {
        console.log("Hello");
        console.log(response?.data);
        if (response?.data?.status == true) {
          console.log("dfghj", response?.data);
          setCaseStudiesData(response?.data?.data);
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

  const truncateDescription = (description) => {
    if (!description) {
      return ""; // Return an empty string if description is undefined or null
    }
    try {
      const words = description.split(" ");
      const truncated = words.slice(0, 12).join(" ");
      return truncated + (words.length > 12 ? "..." : "");
    } catch (error) {
      console.error("Error in truncateDescription:", error);
      return ""; // Return an empty string in case of error
    }
  };

  useEffect(() => {
    getCaseStudyInfo();
  }, []);

  return (
    <div class="container">

      {/* CaseStudy and Content - main */}
      <div>
        <div>
          <h1 class="fw-bold text-center">{TitleTag}</h1>
          <p class="mt-3 fs-4 text-center">{contentTag}</p>
        </div>
      </div>

      {/* casestudies */}
      {!showMore && (
        <div class="container mt-4">
          <div class="row ">
          {CaseStudiesData.slice(0, showMore ? CaseStudiesData?.length : 3).map(
            (caseStudy) => (
              <div class="col-md-4 col-sm-6 mb-4" key={caseStudy?._id}>
                <Link
                  to={`/caseStudy/${caseStudy?._id}`}
                  style={{ textDecoration: "none" }}
                  class="h-100"
                >

                      <div class="card h-100 text-center" style={{borderRadius: "30px", backgroundColor:"#F5F5F5"}}>
                        <img src={caseStudy?.image} class="card-img-top img-fluid p-3" style={{borderRadius: "30px"}} alt="Card" />
                        <div class="card-body">
                          <h5 class="card-title text-dark">{caseStudy?.title}</h5>
                          <p class="card-text text-dark">{truncateDescription(caseStudy?.content).slice(0,200)}</p>
                        </div>
                        <button
                            class="btn btn-primary align-self-center"
                            onClick={handleViewMore}
                            style={{backgroundColor:"red", border:"none", width:"40%", borderRadius: "10px"}}
                          >
                            Read More
                        </button>
                        <br/>
                      </div>
                </Link>
              </div>
            )
          )}
        </div>
        </div>
      )}

      {!showMore && CaseStudiesData.length > 3 && (
        <div class="text-center mt-3">
          <button class="btn btn-primary" style={{backgroundColor:"red" ,border:"none"}} onClick={handleViewMore}>
            View More
          </button>
        </div>
      )}

      {showMore && (
        <div class="container mt-4">
        <div class="row ">
          {CaseStudiesData.map((caseStudy) => (
            <div class="col-md-4 col-sm-6 mb-4 " key={caseStudy?._id}>
              <Link
                to={`/caseStudy/${caseStudy?._id}`}
                style={{ textDecoration: "none" }}
                class="h-100"
              >
                 <div class="card h-100 text-center" style={{backgroundColor: "#F5F5F5",borderRadius: "30px"}}>
                    <img src={caseStudy?.image} class="card-img-top img-fluid p-3 " style={{borderRadius: "30px"}} alt="Card" />
                    <div class="card-body">
                      <h5 class="card-title  text-dark">{caseStudy?.title}</h5>
                      <p class="card-text  text-dark">{truncateDescription(caseStudy?.content).slice(0,200)}</p>
                      {/* <button class="btn btn-primary casestudy-card-button" onClick={handleViewMore}>Read More</button> */}
                    </div>
                  </div>
              </Link>
            </div>
          ))}
        </div>
        </div>
      )}

      {showMore && (
        <div className="text-center mt-3">
          <button className="btn btn-secondary"style={{backgroundColor:"red" ,border:"none"}}  onClick={handleViewLess}>
            View Less
          </button>
        </div>
      )}
    </div>
  );
};

export default CaseStudies;
