import React from "react";
import pcis from "../../accests/about.jpg";
import { SlBadge, SlBag } from "react-icons/sl";
import { BiSupport } from "react-icons/bi";
import MyCV from "../../cv/mycv.pdf";
import { AiOutlineFileZip } from "react-icons/ai";
import { useState } from "react";
import { useContext } from "react";
import { HmsContext } from "../../Context/HmsContext";
const About = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = MyCV;
    link.setAttribute("download", "my-cv.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const { aboutLink, setAboutLink } = useContext(HmsContext);

  return (
    <div className="About" id={aboutLink}>
      <div className="topAbout">
        <h1>About Me</h1>
        <p>My Introduction</p>
      </div>
      <div className="bottomAbout">
        <div className="sidePic">
          <img src={pcis} alt="" />
        </div>
        <div className="infos">
          <div className="experiences">
            <div className="experience">
              <SlBadge size={30} />
              <p>Experience</p>
              <span>8 + Years</span>
            </div>
            <div className="completed">
              <SlBag size={30} />
              <p>Completed</p>
              <span>48 + Projects</span>
            </div>
            <div className="support">
              <BiSupport size={30} />
              <p>Support</p>
              <span>Online 24/7</span>
            </div>
          </div>
          <div className="descripts">
            <p>
              Experienced Full Stack Developer with a passion for crafting
              robust and scalable web applications. Proficient in both front-end
              and back-end technologies, adept at translating business
              requirements into high-quality software solutions. Strong
              problem-solving skills, collaborative mindset, and a drive for
              continuous learning. Committed to delivering efficient and
              user-friendly applications that exceed client expectations. Ready
              to contribute to innovative projects and help drive success
              through seamless end-to-end development.
            </p>
          </div>
          <div className="resume">
            <button type="btn" onClick={handleDownload}>
              Download cv
            </button>
            <AiOutlineFileZip size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
