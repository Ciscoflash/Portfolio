import React from "react";
import pead from "../../accests/pead2.jpeg";
import { AiOutlineGithub } from "react-icons/ai";
import { Link } from "react-router-dom";
import { BiLink } from "react-icons/bi";
import Gavo from "../../accests/gavo2.png";
import looplab from "../../accests/lopvis.png";
import socials from "../../accests/socials.png";
const Portfolio = () => {
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <p>Most recent Work</p>

      <div className="ports">
        <div className="grid">
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
        </div>
        <div className="grid">
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
        </div>
        <div className="grid">
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
        </div>
        <div className="grid">
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
        </div>
        <div className="grid">
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
        </div>
        <div className="grid">
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
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
