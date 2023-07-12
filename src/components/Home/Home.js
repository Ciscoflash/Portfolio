import React from "react";
import Nav from "../Nav/Nav";
import Main from "../Main/Main";
import About from "../About/About";
import Skills from "../Skills/Skills";
import Services from "../Service/Services";
import Qualification from "../Qualification/Qualification";
import Portfolio from "../Protfolio/Portfolio";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
const Home = () => {
  return (
    <div className="layout">
      <Nav />
      <Main />
      <About />
      <Skills />
      <Services />
      <Qualification />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
