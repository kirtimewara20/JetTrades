import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./CreateEbook.scss";
import { toast } from "react-toastify";

const CreateEbook = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("tokenjettraders");

  const history = useNavigate();
  const backToDashboard = () => {
    history("/dashboard");
  };

  const [image, setImage] = useState(null);
  const [title, setTitle] = useState();
  const [content, setContent] = useState("");
  const [pdf, setPdf] = useState(null);

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

  const convertPdfUrl = async () => {
    const formData = new FormData();
    formData.append("pdf", pdf);
    try {
      const response = await axios.post(
        process.env.REACT_APP_BASE_URL + "api/pdfFile",
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
    const pdfUrl = await convertPdfUrl();
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: process.env.REACT_APP_BASE_URL + "api/addEbook",
      headers: {
        authorization: token,
      },
      data: {
        title: title,
        image: imgUrl,
        content: content,
        pdf: pdfUrl,
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
          setImage();
          setPdf();

          // toast.success("E-Book Created successfully", {
          //   position: "bottom-right",
          //   autoClose: 4000,
          //   pauseOnHover: true,
          //   draggable: true,
          //   theme: "dark",
          // });
          navigate("/dashboard");
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
          } else {
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

  // const handlePdfDownload = () => {
  //   if (pdf) {
  //     const url = URL.createObjectURL(pdf);
  //     const a = document.createElement("a");
  //     a.href = url;
  //     a.download = "your_pdf_name.pdf";
  //     document.body.appendChild(a);
  //     a.click();
  //     document.body.removeChild(a);
  //   }
  // };

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
                <h1>Create EBook</h1>
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
                <br></br>
                <div className="form_input">
                  <label htmlFor="pdfFile">PDF</label>
                  <input
                    type="file"
                    onChange={(e) => setPdf(e.target.files[0])}
                    id="pdfFile"
                    name="pdfFile"
                    accept=".pdf"
                    required
                  />
                </div>
                {/* <button
                  className="btn"
                  onClick={handlePdfDownload}
                  style={{ backgroundColor: "#005C4B" }}
                >
                  Download PDF
                </button> */}

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
