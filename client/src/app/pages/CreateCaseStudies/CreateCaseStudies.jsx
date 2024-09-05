import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./CreateCaseStudies.scss";
import { toast } from "react-toastify";

const CreateEbook = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("tokenjettraders");

  useEffect(() => {
    if (token) {
      navigate("/createCaseStudies");
    } else {
      navigate("/login");
    }
  }, []);

  const history = useNavigate();
  const backToDashboard = () => {
    history("/dashboard");
  };

  const [image, setImage] = useState(null);
  const [title, setTitle] = useState();
  const [content, setContent] = useState("");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleInputChange = (e) => {
    const { value } = e.target;
    setContent(value);
  };

  const convertImgUrl = async () => {
    console.log("->>>>>>>", image);
    const formData = new FormData();
    formData.append("image", image);
    try {
      const response = await axios.post(
        process.env.REACT_APP_BASE_URL + "api/blogImage",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            authorization: token,
          },
        }
      );
      console.log("response: ", response?.data);
      if (response?.data?.success) {
        return response?.data?.url;
        // Do something with the URL if needed
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getMyListing = async () => {
    const imgUrl = await convertImgUrl();
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: process.env.REACT_APP_BASE_URL + "api/addCaseStudy",
      headers: {
        authorization: token,
      },
      data: {
        title: title,
        image: imgUrl,
        content: content,
      },
    };
    // }

    await axios
      .request(config)
      .then((response) => {
        if (response?.data?.status == true) {
          console.log("dfghj", response.data);
          setTitle("");
          setContent("");
          setImage("");

          // toast.success("Case Study Created successfully", {
          //   position: "bottom-right",
          //   autoClose: 4000,
          //   pauseOnHover: true,
          //   draggable: true,
          //   theme: "dark",
          // });
          navigate("/dashboard");
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

  return (
    <>
      <div className="createBlog">
        <section>
          {
            <div className="form_data">
              <div className="cross" onClick={backToDashboard}>
                <i class="bi bi-file-x-fill"></i>
              </div>
              <div className="form_heading">
                <h1>Create CaseStudies</h1>
              </div>

              <form>
                <div className="form_input">
                  <label htmlFor="title">Title</label>
                  <input
                    type="text"
                    onChange={handleTitleChange}
                    value={title}
                    id="title"
                    name="title"
                    placeholder="Title"
                  />
                </div>
                <div className="form_input">
                  <label htmlFor="subtitle">Message</label>
                  <textarea
                    type="text"
                    name="content"
                    value={content}
                    onChange={(e) => handleInputChange(e)}
                    placeholder="Content"
                  />
                </div>
                <div className="form_input">
                  <label for="productImage">Image</label>
                  <input
                    type="file"
                    id="productImage"
                    onChange={(e) => setImage(e.target.files[0])}
                    name="productImage"
                    required
                  />
                </div>
                <div className="btn" onClick={getMyListing}>
                  Create Resource Center
                </div>
              </form>
            </div>
          }
        </section>
      </div>
    </>
  );
};

export default CreateEbook;
