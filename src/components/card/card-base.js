import React from 'react';
import Carousel from "./../carousel/index.js";
import javascriptImg from "./../../Images/javascriptImg.png";
import pythonImg from "./../../Images/pythonImg.png";
import sqlImg from "./../../Images/sqlImg.jpg";
import reactImg from "./../../Images/reactImg.jpg";
import javaImg from "./../../Images/javaImg.jpg";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";
import Card from './../../components/card/index.js';




function CardBase() {
	return (
		<>
		<h1 className="heading">
        Recommended <span className="heading-span"> Cources</span>
      </h1>
      <ScrollAnimation animateIn="zoomIn">
        <main className="rec-main">
          <Card
            heading="Javascript"
            description="Dynamic web programming language, enables interactivity, runs in
              browsers (client-side), and used for web apps, games, UIs."
            duration="10 Lessons | 360 Hrs"
            price="₹2500"
            btnName="Explore"
            imgSrc={javascriptImg}
            imageTop={false}
          />
          <Card
            heading="Python"
            description="Versatile, readable language used for web dev, AI, automation.
              Large standard library, popular among developers."
            duration="10 Lessons | 360 Hrs"
            price="₹4999"
            btnName="Explore"
            imgSrc={pythonImg}
            imageTop={false}
          />
        </main>
      </ScrollAnimation>

      <h1 className="heading">
        Other <span className="heading-span">Courses</span>
      </h1>
      <div>
        <Carousel
          elements={[
            {
              heading: "Sql",
              description:
                "  SQL (Structured Query Language) is a standardized programming language used to manage and manipulate relational databases.",
              duration: "10 Lessons | 360 Hrs",
              btnName: "Explore",
              imgSrc: sqlImg,
              imageTop: true,
            },
            {
              heading: "Reactjs",
              description:
                "  React.js is an open-source JavaScript library for building user interfaces and front-end web applications. ",
              duration: "10 Lessons | 360 Hrs",
              btnName: "Explore",
              imgSrc: reactImg,
              imageTop: true,
            },
            {
              heading: "Java",
              description:
                " Java is one of the most widely used languages today!Java is a high-level,programming language known for its platform-independent applications.",
              duration: "10 Lessons | 360 Hrs",
              btnName: "Explore",
              imgSrc: javaImg,
              imageTop: true,
            },
            {
              heading: "Java",
              description:
                " Java is one of the most widely used languages today!Java is a high-level,programming language known for its platform-independent applications.",
              duration: "10 Lessons | 360 Hrs",
              btnName: "Explore",
              imgSrc: javaImg,
              imageTop: true,
            },
            {
              heading: "Reactjs",
              description:
                "  React.js is an open-source JavaScript library for building user interfaces and front-end web applications. ",
              duration: "10 Lessons | 360 Hrs",
              btnName: "Explore",
              imgSrc: reactImg,
              imageTop: true,
            },
            {
              heading: "Sql",
              description:
                "  SQL (Structured Query Language) is a standardized programming language used to manage and manipulate relational databases.",
              duration: "10 Lessons | 360 Hrs",
              btnName: "Explore",
              imgSrc: sqlImg,
              imageTop: true,
            },
          ]}
        />
      </div>
		
		</>
	);
}

export default CardBase;
