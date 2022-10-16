import React from "react";
import { Fade } from "react-reveal";
import "./expertise.scss";

export default function Expertise() {
  return (
    <div className="expertise container" id="expertise">
      <div className="introduce">
        <Fade bottom duration={2000}>
          <h2>Hi, I’m G'ayratjon</h2>
        </Fade>
        <Fade bottom delay={500} duration={1500}>
          <p>
            I have been learning IT for 3 years. I have been learning web
            programming since last year, august. I know Html, Css, Sass,
            Bootstrap, JavaScript, ReactJs, Redux and i create backend in
            Strapi for API. I study part-time at TUIT Fergana branch 
          </p>
        </Fade>
      </div>
      <div className="skills">
        <Fade bottom duration={2000} delay={500}>
          <div className="skills-box">
            <div className="card card-1">
              <div className="blog">
                <div className="blog-top">
                  <span>
                    <i className="bx bx-desktop"></i>
                  </span>
                  <h2>Software Engineer</h2>
                  <p>
                    I value simple content structure, clean design patterns, and
                    thoughtful interactions.
                  </p>
                </div>
                <div className="blog-center">
                  <p className="blog-center-title">Things I enjoy designing:</p>
                  <p className="blog-center-text">
                   JavaScript, TypeScript, ReactJs
                  </p>
                </div>
              </div>
            </div>
            <div className="card card-3">
              <div className="blog">
                <div className="blog-top">
                  <span>
                    <i className="bx bx-code-alt"></i>
                  </span>
                  <h2>Frontend Developer</h2>
                  <p>
                    I like to code things from scratch, and enjoy bringing ideas
                    to life in the browser.
                  </p>
                </div>
                <div className="blog-center">
                  <p className="blog-center-title">Languages I speak:</p>
                  <p className="blog-center-text">
                    Html, Css, Sass, Bootstrap, JavaScript, ReactJs
                  </p>
                </div>
              </div>
            </div>
            {/* <div className="card card-3">
              <div className="blog">
                <div className="blog-top">
                  <span>
                    <i className="bx bxl-react"></i>
                  </span>
                  <h2>React Native Developer</h2>
                  <p>
                    I genuinely care about people, and love helping fellow
                    designers work on their craft.
                  </p>
                </div>
                <div className="blog-center">
                  <p className="blog-center-title">Experiences I draw from:</p>
                  <p className="blog-center-text">
                    UX/UI, Product design, Freelancing
                  </p>
                </div>
              </div>
            </div> */}
          </div>
        </Fade>
      </div>
    </div>
  );
}
