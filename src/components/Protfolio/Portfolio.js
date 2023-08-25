import React from "react";
import pead from "../../accests/pead2.jpeg";
import { AiOutlineGithub } from "react-icons/ai";
import { Link } from "react-router-dom";
import { BiLink } from "react-icons/bi";
import Gavo from "../../accests/gavo2.png";
import looplab from "../../accests/lopvis.png";
import socials from "../../accests/socials.png";
import prompt from "../../accests/PromptopiaImg.png";
import { motion } from "framer-motion";
const Portfolio = () => {
  return (
    <div className="portfolio" id="portfolio">
      <motion.h1
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9 }}
      >
        Portfolio
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, translateX: 100 }}
        whileInView={{ opacity: 1, translateX: 0 }}
        transition={{ duration: 1 }}
      >
        Most recent Work
      </motion.p>

      <div className="ports">
        <motion.div
          className="grid"
          initial={{ opacity: 0, scale: 0, translateX: -100 }}
          whileInView={{ opacity: 1, scale: 1, translateX: 0 }}
          whileHover={{ translateX: -10, translateY: -10 }}
          transition={{ duration: 0.9 }}
        >
          <img src={pead} alt="" />
          <h1>PEADPAY API</h1>
          <p>
            The Pead Pay API is a RESTful API that allows you to make and
            receive payments for medical services. The API uses Paystack, a
            Nigeria-based payment processor, to facilitate payments.
          </p>
          <div className="stack">
            <span>Node Express js</span>
            <span>Mongo Db</span>
            <span>Treblle For Security Test</span>
            <Link
              to={"https://github.com/Ciscoflash/Pead-pay-api"}
              className="gitss"
            >
              <AiOutlineGithub size={25} />
            </Link>
          </div>
        </motion.div>
        <motion.div
          className="grid"
          initial={{ opacity: 0, scale: 0, translateX: -100 }}
          whileInView={{ opacity: 1, scale: 1, translateX: 0 }}
          whileHover={{ translateX: 10, translateY: -10 }}
          transition={{ duration: 0.9 }}
        >
          <img src={Gavo} alt="" />
          <h1>Complete Hospital Management System</h1>
          <p>
            Gavo is a complete Hospital Management System built with React js,
            Node Express js and Mongo Db for Database Management. It is built to
            aid the Management of Patients Data, Doctor Data and the Hospital
            Management in general.
          </p>
          <div className="stack">
            <span>Node Express js</span>
            <span>Mongo Db</span>
            <span>React js</span>
            <span>Scss</span>
            <Link
              to={"https://github.com/uvegh/Hms-interface"}
              className="gitss"
            >
              <AiOutlineGithub size={25} />
            </Link>
            <Link to={"https://gavohms.netlify.app/"} className="gitss">
              <BiLink size={25} />
            </Link>
          </div>
        </motion.div>
        <motion.div
          className="grid"
          initial={{ opacity: 0, scale: 0, translateX: -100 }}
          whileInView={{ opacity: 1, scale: 1, translateX: 0 }}
          whileHover={{ translateX: 10, translateY: 10 }}
          transition={{ duration: 0.9 }}
        >
          <img src={looplab} alt="" />
          <h1>Looplab</h1>
          <p>Looplab is a cloned website template built with Bootstrap</p>
          <div className="stack">
            <span>Html</span>
            <span>Css</span>
            <span>Bootstrap</span>
            <Link
              to={"https://github.com/Ciscoflash/LoopLab"}
              className="gitss"
            >
              <AiOutlineGithub size={25} />
            </Link>
            <Link to={"https://looplabclone.netlify.app/"} className="gitss">
              <BiLink size={25} />
            </Link>
          </div>
        </motion.div>
        <motion.div
          className="grid"
          initial={{ opacity: 0, scale: 0, translateX: -100 }}
          whileInView={{ opacity: 1, scale: 1, translateX: 0 }}
          whileHover={{ translateX: -10, translateY: 10 }}
          transition={{ duration: 0.9 }}
        >
          <img src={socials} alt="" />
          <h1>SocialX</h1>
          <p>
            SocialX is a company clone app built for companies to easily
            customise and use to enhance there Productivity
          </p>
          <div className="stack">
            <span>React js</span>
            <span>Css</span>
            <span>AOS</span>
            <Link
              to={"https://github.com/Ciscoflash/SocialX"}
              className="gitss"
            >
              <AiOutlineGithub size={25} />
            </Link>
            <Link to={""} className="gitss">
              <BiLink size={25} />
            </Link>
          </div>
        </motion.div>
        <motion.div
          className="grid"
          initial={{ opacity: 0, scale: 0, translateX: -100 }}
          whileInView={{ opacity: 1, scale: 1, translateX: 0 }}
          whileHover={{ translateX: 10, translateY: 10 }}
          transition={{ duration: 0.9 }}
        >
          <img src={prompt} alt="" />
          <h1>Promptopia</h1>
          <p>
            Promptopia is an open-source AI prompting tool for modern world to
            discover, create and share creative Prompts
          </p>
          <div className="stack">
            <span>Next js</span>
            <span>Tailwind</span>
            <span>Mongodb</span>
            <Link
              to={"https://github.com/Ciscoflash/project_ai_prompts"}
              className="gitss"
            >
              <AiOutlineGithub size={25} />
            </Link>
            <Link
              to={"https://project-ai-prompts.vercel.app/"}
              className="gitss"
            >
              <BiLink size={25} />
            </Link>
          </div>
        </motion.div>
        <motion.div
          className="grid"
          initial={{ opacity: 0, scale: 0, translateX: -100 }}
          whileInView={{ opacity: 1, scale: 1, translateX: 0 }}
          whileHover={{ rotateY: 30, rotateX: -30 }}
          transition={{ duration: 0.9 }}
        >
          <img src={socials} alt="" />
          <h1>SocialX</h1>
          <p>
            SocialX is a company clone app built for companies to easily
            customise and use to enhance there Productivity
          </p>
          <div className="stack">
            <span>React js</span>
            <span>Css</span>
            <span>AOS</span>
            <Link
              to={"https://github.com/Ciscoflash/SocialX"}
              className="gitss"
            >
              <AiOutlineGithub size={25} />
            </Link>
            <Link to={""} className="gitss">
              <BiLink size={25} />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Portfolio;
