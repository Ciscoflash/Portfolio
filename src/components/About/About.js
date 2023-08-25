import React from "react";
import pcis from "../../accests/pf.jpg";
import { SlBadge, SlBag } from "react-icons/sl";
import { BiSupport } from "react-icons/bi";
import MyCV from "../../cv/mycv.pdf";
import { AiOutlineFileZip } from "react-icons/ai";
import { motion } from "framer-motion";
const About = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = MyCV;
    link.setAttribute("download", "my-cv.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="About" id="about">
      <div className="topAbout">
        <motion.h1
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, translateZ: 300 }}
          whileInView={{ opacity: 1, translateZ: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Introduction
        </motion.p>
      </div>
      <div className="bottomAbout">
        <div className="sidePic">
          <motion.img
            src={pcis}
            alt=""
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          />
        </div>
        <div className="infos">
          <div className="experiences">
            <div className="experience">
              <SlBadge size={30} />
              <p>Experience</p>
              <span>2 + Years</span>
            </div>
            <div className="completed">
              <SlBag size={30} />
              <p>Completed</p>
              <span>26 + Projects</span>
            </div>
            <div className="support">
              <BiSupport size={30} />
              <p>Support</p>
              <span>Online 24/7</span>
            </div>
          </div>
          <div className="descripts">
            <motion.p
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              Experienced Full Stack Developer with a passion for crafting
              robust and scalable web applications. Proficient in both front-end
              and back-end technologies, adept at translating business
              requirements into high-quality software solutions. Strong
              problem-solving skills, collaborative mindset, and a drive for
              continuous learning. Committed to delivering efficient and
              user-friendly applications that exceed client expectations. Ready
              to contribute to innovative projects and help drive success
              through seamless end-to-end development.
            </motion.p>
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
