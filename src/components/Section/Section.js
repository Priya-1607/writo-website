import React from "react";
import './Style.css'


function Section() {
  const url = "https://files.codingninjas.com/group-4457-9843.svg";
  return (
    <>
      <div className="parent-box">
        <div className="container">
          <div className="container-child-1">
            <p className="sub-child-1">Why Join Us?</p>
            <p className="sub-child-2">Great students deserve the best jobs</p>
            <p className="sub-child-3">Writo Education Makes it Happen...</p>
          </div>
          <div className="container-child-2">
            <div className="hexagon-box-1">
              <div className="poster-box-1">
                <div className="box-img">
                  <p className="box-img-num">150+</p>
                  <p className="box-img-text">
                    students are working at FAANG MNC's
                  </p>
                </div>
                <div className="box-img">
                  <p className="box-img-num">10</p>
                  <p className="box-img-text">
                    students are working at FAANG MNC's
                  </p>
                </div>
              </div>
              <div className="poster-box-1 box-relative">
                <div className="box-img">
                  <p className="box-img-num">50+</p>
                  <p className="box-img-text">
                    students are working at FAANG MNC's
                  </p>
                </div>
                <div className="box-img">
                  <p className="box-img-num">100+</p>
                  <p className="box-img-text">students working in FAANG </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="image-box-X1">
          <img
            src={url}
            alt="blur"
          ></img>
        </div>
        <div className="image-box-X2">
          <img
            src={url}
            alt="blur"
          ></img>
          <img src="group.svg" alt="blur"></img>
        </div>
      </div>
    </>
  );
}

export default Section;
