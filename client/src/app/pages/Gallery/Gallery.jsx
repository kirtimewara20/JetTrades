import React, { useState } from "react";
import "../Gallery/Gallery.scss";
import skyline1 from "../../assets/skyline1.jpg";
import skyline2 from "../../assets/skyline2.jpg";
import skyline3 from "../../assets/skyline3.jpg";
import skyline4 from "../../assets/skyline4.mp4";
import skyline5 from "../../assets/skyline5.jpg";
import skyline6 from "../../assets/skyline6.jpg";
import skyline7 from "../../assets/skyline7.jpg";
import skyline8 from "../../assets/skyline8.jpg";
import skyline9 from "../../assets/skyline9.jpg";
import Award1 from "../../assets/Award1.mp4";
import Award2 from "../../assets/Award2.jpg";
import Award3 from "../../assets/Award3.jpg";
import Award4 from "../../assets/Award4.jpg";
import Award7 from "../../assets/Award7.jpg";
import Award8 from "../../assets/Award8.jpg";
import Award13 from "../../assets/Award13.jpg";
import Award10 from "../../assets/Award10.jpeg";
import Award11 from "../../assets/Award11.jpeg";
import Award12 from "../../assets/Award12.jpeg";
import Award14 from "../../assets/Award14.JPG";
import Award15 from "../../assets/Award15.JPG";
import Award16 from "../../assets/Award16.JPG";
import Piaggio1 from "../../assets/Piaggio1.JPG";
import Piaggio2 from "../../assets/Piaggio2.JPG";
import Piaggio3 from "../../assets/Piaggio3.MP4";
import Piaggio5 from "../../assets/Piaggio5.MP4";
import Piaggio6 from "../../assets/Piaggio6.JPG";
import Piaggio7 from "../../assets/Piaggio7.JPG";
import Piaggio9 from "../../assets/Piaggio9.JPG";
import Piaggio10 from "../../assets/Piaggio10.JPG";
import Testimonial1 from "../../assets/Testimonial1.mp4"
import Testimonial2 from "../../assets/Testimonial2.mp4"
import Testimonial3 from "../../assets/Testimonial3.mp4"
import Testimonial4 from "../../assets/Testimonial4.mp4"
import Testimonial5 from "../../assets/Testimonial 5.mp4"
import video from "../../assets/Jet trade and logistics.mp4";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("Awards");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const renderGalleryItems = () => {
    switch (selectedCategory) {
      case "Awards":
        return (
          <>
            <div className="gallery-item">
              <video controls>
                <source src={Award1} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="gallery-item ">
              <img src={Award2} alt="Award 1" />
            </div>
            <div className="gallery-item ">
              <img src={Award3} alt="Award 2" />
            </div>
            <div className="gallery-item">
              <img src={Award4} alt="Award 3" />
            </div>
            <div className="gallery-item">
              <img src={Award7} alt="Award 5" />
            </div>
            <div className="gallery-item">
              <img src={Award8} alt="Award6" />
            </div>
            <div className="gallery-item">
              <img src={Award13} alt="Award6" />
            </div>
            <div className="gallery-item">
              <img src={Award10} alt="Award6" />
            </div>
            <div className="gallery-item">
              <img src={Award11} alt="Award6" />
            </div>
            <div className="gallery-item">
              <img src={Award12} alt="Award6" />
            </div>
            <div className="gallery-item">
              <img src={Award14} alt="Award6" />
            </div>
            <div className="gallery-item">
              <img src={Award15} alt="Award6" />
            </div>
            <div className="gallery-item">
              <img src={Award16} alt="Award6" />
            </div>
          </>
        );
      case "Skyline":
        return (
          <>
            <div className="gallery-item">
              <img src={skyline1} alt="Skyline 1" />
            </div>
            <div className="gallery-item">
              <img src={skyline2} alt="Skyline 2" />
            </div>
            <div className="gallery-item">
              <img src={skyline3} alt="Skyline 3" />
            </div>
            <div className="gallery-item">
              <video controls>
                <source src={skyline4} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="gallery-item">
              <img src={skyline5} alt="Skyline 4" />
            </div>
            <div className="gallery-item">
              <img src={skyline6} alt="Skyline 4" />
            </div>
            <div className="gallery-item">
              <img src={skyline7} alt="Skyline 4" />
            </div>
            <div className="gallery-item">
              <img src={skyline8} alt="Skyline 4" />
            </div>
            <div className="gallery-item">
              <img src={skyline9} alt="Skyline 4" />
            </div>
          </>
        );
      case "Piaggio":
        return (
          <>
            <div className="gallery-item">
              <img src={Piaggio1} alt="Piaggio 1" />
            </div>
            <div className="gallery-item">
              <img src={Piaggio2} alt="Piaggio 2" />
            </div>
            <div className="gallery-item">
              <video controls>
                <source src={Piaggio3} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="gallery-item">
              <video controls>
                <source src={Piaggio5} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="gallery-item">
              <img src={Piaggio6} alt="Piaggio 6" />
            </div>
            <div className="gallery-item">
              <img src={Piaggio7} alt="Piaggio 7" />
            </div>
            <div className="gallery-item">
              <img src={Piaggio9} alt="Piaggio 9" />
            </div>
            <div className="gallery-item">
              <img src={Piaggio10} alt="Piaggio 10" />
            </div>
          </>
        );
      case "Testimonial":
          return (
            <>
              <div className="gallery-item">
                <video controls>
                  <source src={Testimonial1} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="gallery-item">
                <video controls>
                  <source src={Testimonial2} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="gallery-item">
                <video controls>
                  <source src={Testimonial3} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="gallery-item">
                <video controls>
                  <source src={Testimonial4} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="gallery-item">
                <video controls>
                  <source src={Testimonial5} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </>
          );
      // Add cases for other categories
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="galley-content">
        <h1 className="text-center text-danger fw-bold">OUR GALLERY</h1>
      </div>
      <div className="top-content">
        <button onClick={() => handleCategoryChange("Awards")}>Awards</button>
        <button onClick={() => handleCategoryChange("Skyline")}>Skyline</button>
        <button onClick={() => handleCategoryChange("Piaggio")}>Piaggio</button>
        <button onClick={() => handleCategoryChange("Testimonial")}>Testimonial</button>
      </div>

      <div className="alternating-gallery">{renderGalleryItems()}</div>
    </div>
  );
};

export default Gallery;
