import React, { useEffect, useState } from "react";
import "./SingleBlog.scss";
import back from "../../assets/Group 408 (1).png";
import RelatedPost from "../../components/RelatedPost/RelatedPost";
import GetInTouch from "../../components/getInTouch/getInTouch";
import Transport from "../../components/transport/transport";
import { useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import Blogs from "../../components/Blogs/Blogs";

const SingleBlog = () => {
  const [BlogsData, setBlogData] = useState([]);

  let { id } = useParams();
  const token = localStorage.getItem("tokenjettraders");
  const getBlogDetails = () => {
    const config = {
      url: process.env.REACT_APP_BASE_URL + `api/getBlogById/${id}`,
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

  useEffect(() => {
    getBlogDetails();
  }, []);

  const [TitleTag, setTitleTage] = useState("Related Posts");
  const [contentTag, setContentTag] = useState(
    "We understand that every business has unique logistics needs, and we are here to ensure that your goods are transported safely, efficiently, and on time"
  );
  return (
    <>
      <div class="container">
        <div className="single-blog">
          <img
            src={BlogsData?.image}
            alt="Background"
            className="single-blog-back"
          />
        </div>

        <div className="single-blog-card">
          <div className="row single-blog-body">
            <div className="col-10 single-blog-content">
              <div className="single-blog-whitebox">
                <div className="single-blog-whitebox-content">
                  <h1>{BlogsData?.title}</h1>
                  <br></br>
                  <p>{BlogsData?.content}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <br/>
      <br/>

      {/* <RelatedPost /> */}
      <Blogs TitleTag={TitleTag} contentTag={contentTag} checkView={true}/>
      <br></br>
      <br></br>
      <GetInTouch />
      <Transport />
    </>
  );
};

export default SingleBlog;
