import React from "react";
import "./index.css";

const Card = (props) => {
  if (props.imageTop) {
    return (
      <section className="other-course">
        <img src={props.imgSrc} alt="sql logo" className="other-img" />
        <section>
          <h2>{props.heading}</h2>
          <p className="other-text">{props.description}</p>
          <button className="btn-other">{props.btnName}</button>
        </section>
      </section>
    );
  }

  const starStyle = {
    color: "#fcd303",
  };

  return (
    <section className="rec-course">
      <section>
        <h1>{props.heading}</h1>
        <p>{props.description}</p>
        <span className="duration">{props.duration}</span>

        <div className="star-rating">
          <h5>Ratings (5/5)</h5>
          <i className="fa-solid fa-star" style={starStyle}></i>
          <i className="fa-solid fa-star" style={starStyle}></i>
          <i className="fa-solid fa-star" style={starStyle}></i>
          <i className="fa-solid fa-star" style={starStyle}></i>
          <i className="fa-solid fa-star" style={starStyle}></i>
        </div>

        <button className="btn-rec">{props.btnName}</button>

        <p className="price">{props.price}</p>
      </section>
      <img src={props.imgSrc} className="rec-img" alt="javascript" />
    </section>
  );
};

export default Card;
