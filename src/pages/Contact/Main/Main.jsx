import React from "react";
import { Fade, Rotate, Zoom } from "react-reveal";
import "./main.scss";

export default function Main() {
  return (
    <>
      <div className="contact">
        <div className="contact_content">
          <Fade top duration={1000}>
            <h3>Contacts</h3>
          </Fade>
          <Fade bottom duration={1000} >
            <ul>
              <li>
                <i className="bx bx-envelope"></i>
                <a href="mailto:gayratjonabdijobborov@gmail.com">gayratjonabdijobborov@gmail.com</a>
              </li>
              <li>
                <i className="bx bx-phone"></i>
                Phone: +998 (94) 277 60 26
              </li>
              <li>
                <i className="bx bx-home"></i>
                Address: Tashekent, Uzbekistan
              </li>
              <Fade bottom  duration={1000}>
                <li className="social_networks">
                  <a href="https://twitter.com/gayratjon2003" target={'_blank'}>
                  <i className="bx bxl-twitter"></i>
                  </a>
                  <a href="https://www.facebook.com/abdujabborov.gayratbek/" target={'_blank'}>
                  <i className="bx bxl-facebook"></i>
                  </a>
                  <a href="https://www.youtube.com/@gayratjon2003" target={'_blank'}>
                  <i className="bx bxl-youtube"></i>
                  </a>
                  <a href="https://www.instagram.com/gayratjon_2003/" target={'_blank'}>
                  <i className="bx bxl-instagram"></i>
                  </a>
                </li>
              </Fade>
            </ul>
          </Fade>
        </div>
      </div>
    </>
  );
}
