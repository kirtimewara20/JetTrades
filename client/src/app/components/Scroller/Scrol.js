import React, { useEffect, useState } from "react";
import { FaAngleUp } from "react-icons/fa";
import "./Scrol.scss";

function Scrol() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    showButton && (
      <div className="scrollBtn">
        <button className="scroll_to_top" onClick={scrollToTop}>
          <FaAngleUp />
        </button>
      </div>
    )
  );
}

export default Scrol;
