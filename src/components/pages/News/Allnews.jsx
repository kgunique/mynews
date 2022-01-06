import React from "react";
import { Link } from "react-router-dom";

const Allnews = ({ news }) => {
  return (
    <section className="card_container">
      {news.map((eachnews, index) => (
        <div className="card" key={index + 1}>
          <div className="card_content">
            <img src={eachnews.image_1} alt="bulb" />
            <h6>{eachnews.title}</h6>
            <p>{eachnews.s_description}</p>
            <h1>Hello</h1>
            <Link
              className="btn btn-danger btn-sm"
              to={`/news/view/${eachnews.id}`}
            >
              Read More
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Allnews;
