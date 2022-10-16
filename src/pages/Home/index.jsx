import React from "react";

import Navbar from "../../container/Navbar/Navbar";
import Header from './Header/Header'
import Experience from "./Experience/Experience";
import Expertise from "./Expertise/Expertise";
import Projects from "../Projects/Projects";
import Testimonals from "./Testimonals/Testimonals";
import Footer from "../../container/Footer/Footer";
// import Works from "../Works/Works";

function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <Expertise />
      <Experience />
      <Projects />
      <Testimonals />
      {/* <Works /> */}
      <Footer />
    </>
  );
}

export default Home;
