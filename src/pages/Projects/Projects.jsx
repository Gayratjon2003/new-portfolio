import React, { useState } from "react";
import "./projects.scss";
import "swiper/css";

import { projectsData } from "./projectsData";
import { Fade } from "react-reveal";

export default function Projects() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(
          currentSlide > 0 ? currentSlide - 1 : projectsData.length - 1
        )
      : setCurrentSlide(
          currentSlide < projectsData.length - 1 ? currentSlide + 1 : 0
        );
  };

  return (
    <div className="projects projects-container">
      <Fade bottom duration={2000}>
        <h1 className="project-header">Projects</h1>
      </Fade>

      <div className="projects-box ">
        <div
          className="slider"
          style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
        >
          {projectsData.map((data, ind) => {
            return (
              <div className="slider-child" key={ind}>
                <div className="project-blog">
                  <Fade right duration={2000}>
                    <div
                      className="project-left"
                      style={{
                        backgroundImage: `url(${require(`../../assets/img/${data?.img}`)})`,
                      }}
                      key={ind}
                    >
                      <a href={data.url} target="_blank"></a>
                    </div>
                  </Fade>
                  <div className="project-right">
                    <Fade left duration={1500}>
                      <p className="project-right-title">Featured Project</p>
                    </Fade>
                    <Fade left duration={2000}>
                      <h3>
                        {" "}
                        <a href={data.url} target="_blank">
                          {data.title}
                        </a>{" "}
                      </h3>
                    </Fade>
                    <Fade left duration={2000}>
                      <div className="project-decsription">
                        <p>{data.desc}</p>
                      </div>
                    </Fade>
                    <Fade left duration={2000}>
                      <ul>
                        {data.tools.map((item,ind) => {
                          return <li key={ind}>{item}</li>;
                        })}
                      </ul>
                    </Fade>
                    <Fade left duration={2000}>
                      <div className="project-link">
                        <a href={data.github} target="_blank">
                          <i className="bx bxl-github"></i>
                        </a>
                        <a href={data?.url} target="_blank">
                          <i className="bx bx-link-external"></i>
                        </a>
                      </div>
                    </Fade>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <i
          className="bx bx-chevron-left arrow left"
          onClick={() => handleClick("left")}
        ></i>
        <i
          className="bx bx-chevron-right arrow right"
          onClick={() => handleClick("right")}
        ></i>
      </div>
    </div>
  );
}
