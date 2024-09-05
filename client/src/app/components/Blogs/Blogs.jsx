import React, { useEffect, useState } from "react";
import news1 from "../../assets/Group 372.png";
import news2 from "../../assets/Group 372 (1).png";
import news3 from "../../assets/Group 372 (2).png";
//now
import "./Blogs.scss";
import axios from "axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
//  kjdjfkdgit add  need to work on done
const Blogs = (props) => {
  const navigate = useNavigate();
  const [showMore, setShowMore] = useState(false);
  const [BlogsData, setBlogData] = useState([]);

  console.log(BlogsData);

  const { TitleTag, contentTag, checkView } = props;

  const token = localStorage.getItem("tokenjettraders");
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
          setBlogData(response?.data?.data);
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
  const handleViewMore = () => {
    setShowMore(true);
    window.scrollTo(0, 0);
  };

  const handleViewLess = () => {
    setShowMore(false);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    getBlogDetails();
  }, []);

  const truncateDescription = (description) => {
    if (!description) {
      return "";
    }
    try {
      const words = description.split(" ");
      const truncated = words.slice(0, 12).join(" ");
      console.log(truncated);
      return truncated + (words.length > 12 ? "..." : "");
    } catch (error) {
      console.error("Error in truncateDescription:", error);
      return "";
    }
  };

  return (
    <div class="container">
      {/* Blogs and Content - main */}
      <div>
        <div>
          <h1 class="fw-bold text-center">{TitleTag}</h1>
          <p class="mt-3 fs-4 text-center">{contentTag}</p>
        </div>
      </div>

      {!showMore && (
        <div class="container mt-4">
          <div class="row ">
            {BlogsData.slice(0, showMore ? BlogsData?.length : 3).map(
              (ebook) => (
                <div class="col-md-4 col-sm-6 mb-4" key={ebook?._id}>
                  <div
                    onClick={() => {
                      navigate(`/blog/${ebook?._id}`);
                    }}
                    style={{ textDecoration: "none" }}
                    class="h-100"
                  >
                    <div
                      class="card text-center h-100"
                      style={{
                        borderRadius: "30px",
                        backgroundColor: "#F5F5F5",
                      }}
                    >
                      <img
                        src={ebook?.news1}
                        class="card-img-top img-fluid p-3"
                        style={{ borderRadius: "30px" }}
                        alt="Card"
                      />
                      <div class="card-body">
                        <h5 class="card-title ">{ebook?.title}</h5>
                        <p class="card-text text-dark ">
                          {truncateDescription(ebook?.content).slice(0, 200)}
                        </p>
                      </div>
                      <button
                        class="btn btn-primary align-self-center"
                        onClick={handleViewMore}
                        style={{
                          backgroundColor: "red",
                          border: "none",
                          width: "40%",
                          borderRadius: "10px",
                        }}
                      >
                        Read More
                      </button>
                      <br />
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      )}

      {checkView && !showMore && BlogsData.length > 3 && (
        <div className="text-center mt-3">
          <button
            className="btn btn-primary"
            style={{ backgroundColor: "red", border: "none" }}
            onClick={handleViewMore}
          >
            View More
          </button>
        </div>
      )}

      {checkView && showMore && (
        <div className="container mt-4">
          <div className="row ">
            {BlogsData.map((ebook) => (
              <div className="col-md-4 col-sm-6 mb-4 " key={ebook?._id}>
                <Link
                  to={`/blog/${ebook?._id}`}
                  style={{ textDecoration: "none" }}
                  class="h-100"
                >
                  <div
                    class="card h-100 text-center"
                    style={{
                      backgroundColor: "#F5F5F5",
                      borderRadius: "30px",
                    }}
                  >
                    <img
                      src={ebook?.image}
                      class="card-img-top img-fluid p-3"
                      style={{ borderRadius: "30px" }}
                      alt="Card"
                    />
                    <div class="card-body ">
                      <h5 class="card-title  text-dark">{ebook?.title}</h5>
                      <p class="card-text  text-dark">
                        {truncateDescription(ebook?.content).slice(0, 200)}
                      </p>
                      {/* <button class="btn btn-primary blog-card-button" onClick={handleViewMore} >Read More</button> */}
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
          <button
            className="btn btn-secondary"
            style={{ backgroundColor: "red", border: "none" }}
            onClick={handleViewLess}
          >
            View Less
          </button>
        </div>
      )}
    </div>
  );
};

export default Blogs;
