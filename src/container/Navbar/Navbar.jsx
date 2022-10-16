import React, { useState } from "react";
import "./Navbar.scss";
import logo from "../../assets/img/logo.png";
import { Link } from "react-router-dom";
import { Fade } from "react-reveal";
import Spin from 'react-reveal/Spin';
import cx from 'classname';

function Navbar() {
  const [navMenu, setNavMenu] = useState(true);
  const navMenuClass = cx({
    'bx bx-menu hamburger-menu': true,
    "bx-x" : !navMenu,
})

  const navList = cx({
    'display-none': navMenu,
  })
  return (
    <div className="navbar">
      <Spin duration={1000} >
        <Link to="/"> <img src={logo} alt="logo" className="logo" /> </Link>
      </Spin>
      <Fade top cascade duration={1000}>
        <ul className={"navbar__list " + navList}>
          <li className="navbar__list-link">
            <Link to="/">// Home</Link>
          </li>
          {/* <li className="navbar__list-link">
            <Link to="/blog">// Blog</Link>
          </li> */}
          <li className="navbar__list-link">
            <Link to="/contact">// Contact</Link>
          </li>
          <li className="navbar__list-link resume">
            <a
              href={require("../../assets/gayratjon_resume.pdf")}
              download="Gayratjon's Resume"
            >
              Resume
            </a>
          </li>
        </ul>
        <span className="hamburger-menu">
        <i className={navMenuClass} onClick={()=> navMenu ? setNavMenu(!navMenu) : setNavMenu(!navMenu)}></i>
        </span>
      </Fade>
    </div>
  );
}

export default Navbar;
