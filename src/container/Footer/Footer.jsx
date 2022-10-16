import React from "react";
import "./footer.scss";
import logo from "../../assets/img/logo.png";
import { Fade, Zoom } from "react-reveal";

export default function Footer() {
  return (
    <div className="footer" id="footer">
      <Fade left duration={2000}>
        <a href="#" className="footer_logo">
          <img src={logo} alt="error" />
        </a>
      </Fade>

      <div className="footer_content">
        <div className="footer_content-block">
          <Fade top duration={2000} >
            <h6>Contacts</h6>
          </Fade>
          <Zoom  duration={2000} cascade>
            <ul className="footer-dates">
              <li>
                <a href="mailto:undigitals@gmail.com">
                  Email: gayratjonabdijobborov@gmail.com{" "}
                </a>
              </li>
              <li>Phone: +998 (94) 277 60 26</li>
              {/* <li><a href=""></a></li> */}
            </ul>
          </Zoom>
          <Fade top duration={2000} cascade>
            <ul className="footer-socials">
              <li>
                <a href="https://twitter.com/gayratjon2003" target={'_blank'}>
                  <i className="bx bxl-twitter"></i>
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/abdujabborov.gayratbek/" target={'_blank'}>
                  <i className="bx bxl-facebook"></i>
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/" target={'_blank'}>
                  <i className="bx bxl-youtube"></i>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/gayratjon_2003/" target={'_blank'}>
                  <i className="bx bxl-instagram"></i>
                </a>
              </li>
            </ul>
          </Fade>
        </div>
        <div className="footer_content-block">
          <Fade right duration={2000}>
            <h6>Address</h6>
          </Fade>
          <Zoom duration={2000}>
            <p>Tashkent, Uzbekistan</p>
          </Zoom>
        </div>
      </div>
    </div>
  );
}

{
  /* <ul>
<li><a href="#">Home</a></li>
<li><a href="#">Blog</a></li>
<li><a href="#">Contact</a></li>
</ul> */
}
