import React, { useState } from "react";
import Card from "../card";
import "./index.css";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";

const Carousel = ({ elements }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => prevIndex + 3);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 3, 0));
  };

  const visibleElements = elements.slice(currentIndex, currentIndex + 3);

  return (
    <ScrollAnimation animateIn="zoomIn">
      <div className="carousel">
        <div className="carousel-container">
          {visibleElements.map((element, index) => (
            <div className="carousel-item" key={index}>
              <Card
                heading={element.heading}
                description={element.description}
                duration={element.duration}
                btnName={element.btnName}
                imgSrc={element.imgSrc}
                imageTop={element.imageTop}
              />
            </div>
          ))}
        </div>
        <div className="carousel-buttons">
          <button onClick={handlePrev} disabled={currentIndex === 0}>
            <i className="fa-regular fa-circle-dot"></i>
          </button>
          <button
            onClick={handleNext}
            disabled={currentIndex + 3 >= elements.length}
          >
            <i className="fa-regular fa-circle-dot"></i>
          </button>
        </div>
      </div>
    </ScrollAnimation>
  );
};

export default Carousel;
