import React, { useState } from "react";
import news1 from "../../assets/Group 372.png";
import news2 from "../../assets/Group 372 (1).png";
import news3 from "../../assets/Group 372 (2).png";
import "./RelatedPost.scss";

const RelatedPost = () => {
  const [showMore, setShowMore] = useState(false);

  const handleViewMore = () => {
    setShowMore(true);
  };

  const handleViewLess = () => {
    setShowMore(false);
  };
  return (
    <div className="container latest-sectionane">
      <div className="row latest-row">
        <div className="col-12 latest-col">
          <h1>Related Posts</h1>
          <p className="mt-3">
            we understand that every business has unique logistics needs, and we
            are here to ensure that your goods are transported safely,
            efficiently, and on time
          </p>
        </div>
      </div>

      {/* Static content */}
      <div className="row mt-5 mx-5 ">
        <div className="col-sm-4">
          <div
            className="card card-1"
            style={{ width: "20rem", backgroundColor: "#F3F3F3" }}
          >
            <img
              src={news1}
              alt="Card image cap"
              style={{ width: "17rem" }}
              className="mx-4 mt-2"
            />
            <div className="card-body ">
              <h5 className="text-center">Latest News</h5>
              <p className="text-center">
                we understand that every business has unique logistics needs,
                and we are here to ensure that your goods are transported
                safely, efficiently.
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div
            className="card"
            style={{ width: "20rem", backgroundColor: "#F3F3F3" }}
          >
            <img
              src={news2}
              alt="Card image cap"
              style={{ width: "17rem" }}
              className="mx-4 mt-2"
            />
            <div className="card-body">
              <h5 className="text-center">Latest News</h5>
              <p className="text-center">
                we understand that every business has unique logistics needs,
                and we are here to ensure that your goods are transported
                safely, efficiently.
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div
            className="card"
            style={{ width: "20rem", backgroundColor: "#F3F3F3" }}
          >
            <img
              src={news3}
              alt="Card image cap"
              style={{ width: "17rem" }}
              className="mx-4 mt-2"
            />
            <div className="card-body">
              <h5 className="text-center">Latest News</h5>
              <p className="text-center">
                we understand that every business has unique logistics needs,
                and we are here to ensure that your goods are transported
                safely, efficiently.
              </p>
            </div>
          </div>
        </div>
      </div>

      {showMore && (
        // Static content
        <div className="row mt-3 mx-3">
          <div className="row mt-5 mx-3 ">
            <div className="col-sm-4">
              <div
                className="card card-1"
                style={{ width: "20rem", backgroundColor: "#F3F3F3" }}
              >
                <img
                  src={news1}
                  alt="Card image cap"
                  style={{ width: "17rem" }}
                  className="mx-4 mt-2"
                />
                <div className="card-body ">
                  <h5 className="text-center">Latest News</h5>
                  <p className="text-center">
                    we understand that every business has unique logistics
                    needs, and we are here to ensure that your goods are
                    transported safely, efficiently.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div
                className="card"
                style={{ width: "20rem", backgroundColor: "#F3F3F3" }}
              >
                <img
                  src={news2}
                  alt="Card image cap"
                  style={{ width: "17rem" }}
                  className="mx-4 mt-2"
                />
                <div className="card-body">
                  <h5 className="text-center">Latest News</h5>
                  <p className="text-center">
                    we understand that every business has unique logistics
                    needs, and we are here to ensure that your goods are
                    transported safely, efficiently.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div
                className="card"
                style={{ width: "20rem", backgroundColor: "#F3F3F3" }}
              >
                <img
                  src={news3}
                  alt="Card image cap"
                  style={{ width: "17rem" }}
                  className="mx-4 mt-2"
                />
                <div className="card-body">
                  <h5 className="text-center">Latest News</h5>
                  <p className="text-center">
                    we understand that every business has unique logistics
                    needs, and we are here to ensure that your goods are
                    transported safely, efficiently.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="text-center mt-3">
        {!showMore ? (
          <button className="btn btn-primary" onClick={handleViewMore}>
            View More
          </button>
        ) : (
          <button className="btn btn-secondary" onClick={handleViewLess}>
            View Less
          </button>
        )}
      </div>
    </div>
  );
};

export default RelatedPost;
