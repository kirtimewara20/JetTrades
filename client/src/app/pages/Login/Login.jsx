import React, { useEffect, useState } from "react";
import "./Login.scss";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css"; // Import the CSS
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const navigation = useNavigate();
  // const [inputHandler, setInputHandler] = useState({
  //   email: "",
  //   password: "",
  // });
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const token = localStorage.getItem("tokenjettraders");

  useEffect(() => {
    if (token) {
      navigation("/dashboard");
    } else {
      navigation("/login");
    }
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "phoneNumber":
        setPhoneNumber(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const config = {
      url: process.env.REACT_APP_BASE_URL + "api/SignIn",
      method: "post",
      data: {
        phoneNumber,
        password,
      },
    };

    axios
      .request(config)
      .then((response) => {
        if (response?.data?.status == true) {
          toast.success("Login successfully", {
            position: "bottom-right",
            autoClose: 4000,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
          setPhoneNumber("");
          setPassword("");
          console.log("->>>>>>>>>>>>>>>>..", response?.data);
          console.log("->>>>>>>>>>>>>>>>..", response?.data?.data?.tokens);
          localStorage.setItem("tokenjettraders", response?.data?.data?.tokens);
          localStorage.setItem("user", response?.data?.data);
          navigation("/dashboard");
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
          toast.warn("Phone Number and Password is not Match", {
            position: "bottom-right",
            autoClose: 4000,
            pauseOnHover: true,
            draggable: true,
            theme: "light",
          });
        }
      });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   console.log(inputHandler);
  //   if (inputHandler.email === "") {
  //     alert("Please enter your email");
  //   } else if (inputHandler.password === "") {
  //     alert("Please enter your password");
  //   } else {
  //     const data = await axios
  //       .post("http://localhost:8081/auth/login", {
  //         phoneNumber: phoneNumber,
  //         password: inputHandler.password,
  //       })
  //       .then((res) => {
  //         console.log(res.data);
  //         alert("user login sucessfully");
  //         localStorage.setItem("token", res.data.token);
  //         localStorage.setItem("user", JSON.stringify(res.data.user));
  //         setInputHandler({
  //           email: "",
  //           password: "",
  //         });
  //         navigation("/dashboard");
  //       })
  //       .catch((err) => {
  //         console.log(err.response.data.message);
  //         alert(err.response.data.message);
  //       });
  //   }
  // };
  return (
    <div className="login">
      <div className="login-outer w-100">
        <div className="login-inner">
          <div className="login-form">
            <div className="login-text">
              <h1>Login</h1>
            </div>
            <div className="inputs">
              <div className="login-name">
                <label>
                  <h6>Phone Number</h6>
                </label>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={phoneNumber}
                  onChange={handleInputChange}
                  placeholder="Enter your phone number"
                />
              </div>
              <div className="login-password">
                <label>
                  <h6>Password</h6>
                </label>
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={handleInputChange}
                  placeholder="Enter your Password"
                />
              </div>
            </div>
            <div className="login-button-outer">
              <div className="login-button" onClick={handleSubmitForm}>
                <h4>Login</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
