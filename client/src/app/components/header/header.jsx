import React, { useState, useEffect } from "react";
import logo from "../../assets/Jet Trade Logistics Logo.png";
import newlogo from "../../assets/Logo/newlogo.png";
import { Link, useNavigate } from "react-router-dom";
import "./header.scss";

const Header = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("tokenjettraders");
  const [showDashboard, setShowDashboard] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isNavbarCollapsed, setIsNavbarCollapsed] = useState(true); // State to track navbar collapse
  const [isServiceDropdownOpen, setIsServiceDropdownOpen] = useState(false); // State to track service dropdown

  useEffect(() => {
    let timeout;
    if (isHovering) {
      setIsServiceDropdownOpen(true);
    } else {
      timeout = setTimeout(() => {
        setIsServiceDropdownOpen(false);
      }, 400);
    }
    return () => clearTimeout(timeout);
  }, [isHovering]);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const handleServiceClick = (route) => {
    setIsNavbarCollapsed(true);
    navigate(route);
    setIsServiceDropdownOpen(false);
  };

  const handleNavLinkClick = (route) => {
    setIsHovering(false);
    setIsNavbarCollapsed(true);
    setIsServiceDropdownOpen(false); // Close the service dropdown
    navigate(route);
  };

  const handleNavbarToggle = () => {
    setIsNavbarCollapsed(!isNavbarCollapsed);
  };

  return (
    /* Navbar */
    <nav className="navbar navbar-expand-lg navbar-light w-100 header">
      <div className="container header-container">
        <a href="/">
          <img src={newlogo} alt="" style={{ zIndex: "1", width: "7.5rem", paddingBottom:"1rem" }} />
        </a>
        <button
          className="navbar-toggler "
          type="button"
          onClick={handleNavbarToggle}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse justify-content-center ${
            isNavbarCollapsed ? "" : "show"
          }`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                to="/"
                className="nav-link active"
                onClick={() => handleNavLinkClick("/")}
              >
                Home
              </Link>
            </li>
            <li
              className={`nav-item dropdown ${
                isHovering || isServiceDropdownOpen ? "show" : ""
              }`}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <a
                className="nav-link active dropdown-toggle"
                role="button"
                aria-expanded={isHovering || isServiceDropdownOpen ? "true" : "false"}
              >
                Services
              </a>
              <div
                className={`dropdown-menu ${
                  isHovering || isServiceDropdownOpen ? "show" : ""
                }`}
                aria-labelledby="navbarDropdown"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className="dropdown-item"
                  onClick={() => handleServiceClick("/service")}
                >
                  All Services
                </button>
                <button
                  className="dropdown-item"
                  onClick={() => handleServiceClick("/transportservice")}
                >
                  Trailer Transport
                </button>
                <button
                  className="dropdown-item"
                  onClick={() => handleServiceClick("/product")}
                >
                  Full Truck Load (FTL)
                </button>
                <button
                  className="dropdown-item"
                  onClick={() => handleServiceClick("/dimensional")}
                >
                  Over-Dimensional Cargo (ODC)
                </button>
                <button
                  className="dropdown-item"
                  onClick={() => handleServiceClick("/projectbased")}
                >
                  Project-based Transportation
                </button>
              </div>
            </li>
            <li className="nav-item">
              <Link
                to="/about"
                className="nav-link active"
                onClick={() => handleNavLinkClick("/about")}
              >
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/resource"
                className="nav-link active"
                onClick={() => handleNavLinkClick("/resource")}
              >
                Resource Center
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/gallery"
                className="nav-link active"
                onClick={() => handleNavLinkClick("/gallery")}
              >
                Gallery
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact"
                className="nav-link active"
                onClick={() => handleNavLinkClick("/contact")}
              >
                Contact
              </Link>
            </li>
            {showDashboard && (
              <li className="nav-item">
                <Link to="/dashboard" className="nav-link btn btn-dark">
                  Dashboard
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
