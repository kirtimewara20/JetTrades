import React from "react";
import news1 from "../../assets/Group 372.png";
import news2 from "../../assets/Group 372 (1).png";
import news3 from "../../assets/Group 372 (2).png";
import "./latestNews.scss";

const latestData = [
  {
    id: 1,
    image: news1,
    title: "Latest News",
    description:
      "We understand that every business has unique logistics needs, and we are here to ensure that your goods are transported safely, efficiently.",
  },
  {
    id: 2,
    image: news2,
    title: "Latest News",
    description:
      "We understand that every business has unique logistics needs, and we are here to ensure that your goods are transported safely, efficiently.",
  },
  {
    id: 3,
    image: news3,
    title: "Latest News",
    description:
      "We understand that every business has unique logistics needs, and we are here to ensure that your goods are transported safely, efficiently.",
  },
];

const LatestNews = () => {
  const truncateDescription = (description) => {
    const words = description.split(" ");
    const truncated = words.slice(0, 50).join(" ");
    return truncated + (words.length > 50 ? "..." : "");
  };
  return (
    <div className="container latest-section">
      <div className="row latest-row">
        <div className="col-12 latest-col">
          <h1>Latest News</h1>
          <p className="mt-3">
            we understand that every business has unique logistics needs, and we
            are here to ensure that your goods are transported safely,
            efficiently, and on time
          </p>
        </div>
      </div>

      <div className="row mt-5 mx-5">
        {latestData.map((ebook) => (
          <div className="col-sm-4" key={ebook.id}>
            <div
              className="card card-1"
              style={{
                width: "20rem",
                height: "50vh",
                backgroundColor: "#F5F5F5",
                borderRadius: "30px",
                marginTop: "15px",
                textDecoration: "none",
              }}
            >
              <img
                src={ebook.image}
                alt="Card image cap"
                style={{ width: "17rem", height: "20vh" }}
                className="mx-4 mt-3"
              />
              <div className="card-body">
                <h5 className="text-center text-body">{ebook.title}</h5>
                <p className="text-center text-body">
                  {truncateDescription(ebook.description)}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestNews;
