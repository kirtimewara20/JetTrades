import React, { useState } from "react";
import "./ResourceCenter.scss";
import ResourceCenterPage from "../../assets/Truck/Resource Center Banner.webp";
import EBooks from "../../components/E-Books/EBooks";
import Blogs from "../../components/Blogs/Blogs";
import GetInTouch from "../../components/getInTouch/getInTouch";
import Transport from "../../components/transport/transport";
import CaseStudies from "../../components/casestudies/CaseStudies";

const ResourceCenter = () => {
  const [TitleTag, setTitleTage] = useState("E-Books");
  const [contentTag, setContentTag] = useState(
    "We understand that every business has unique logistics needs, and we are here to ensure that your goods are transported safely, efficiently, and on time."
  );

  const [TitleTagBlog, setTitleTageBlog] = useState("Blogs");
  const [contentTagBlog, setContentTagBlog] = useState(
    "We understand that every business has unique logistics needs, and we are here to ensure that your goods are transported safely, efficiently, and on time."
  );

  const [TitleTagCaseStudies, setTitleTageCaseStudies] =
    useState("Case Studies");
  const [contentTagCaseStudies, setContentTagCaseStudies] = useState(
    "We understand that every business has unique logistics needs, and we are here to ensure that your goods are transported safely, efficiently, and on time."
  );
  return (
    <>
      <div className="resource-center">
        <div className="container resource-about">
          <img
            src={ResourceCenterPage}
            alt="Background"
            className="resource-about-back"
          />

          <div className="resource-about-content">
            <h1 className="resource-about-heading ">Resource Center</h1>
            <p className="resource-about-paragraph">
              Explore our blogs for valuable insights on global logistics and
              trade. Our articles help you navigate shipping effortlessly.
            </p>
          </div>

        </div>

        <EBooks TitleTag={TitleTag} contentTag={contentTag} />

        <br></br>
        <br></br>

        <Blogs TitleTag={TitleTagBlog} contentTag={contentTagBlog} checkView={true}/>

        <br></br>
        <br></br>

        <CaseStudies TitleTag={TitleTagCaseStudies} contentTag={contentTagCaseStudies} />

        <br></br>
        <br></br>

        <GetInTouch />
        <Transport />
      </div>
    </>
  );
};

export default ResourceCenter;
