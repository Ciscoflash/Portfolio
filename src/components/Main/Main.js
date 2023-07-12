import React from "react";
import { IoLogoInstagram } from "react-icons/io";
import { BsPinterest } from "react-icons/bs";
import { VscGithubInverted } from "react-icons/vsc";
import hand from "../../accests/hand.svg";
import send from "../../accests/send.svg";
import { LuMouse } from "react-icons/lu";
import { BsFileArrowDownFill } from "react-icons/bs";
const Main = () => {
  return (
    <div>
      <div className="Main">
        <div className="tops">
          <IoLogoInstagram size={32} className="bounce" />
          <BsPinterest size={32} className="bounce" />
          <VscGithubInverted size={32} className="bounce" />
        </div>
        <div className="middle">
          <div>
            <h1>Abraham Jude</h1>
            <img src={hand} alt="" />
          </div>
          <div className="dashes">
            <p className="dash"></p>
            <p>Fullstack Developer</p>
          </div>
          <div>
            <span>
              i'm a creative designer based in Abuja Nigeria, and i'm very
              passionate and dedicated to my work...
            </span>
          </div>
          <div className="hiBtn">
            <button type="btn">Say Hello</button>
            <img src={send} alt="" className="bounce" />
          </div>
        </div>
        <div className="last d"></div>
      </div>
      <div className="scrolls">
        <LuMouse size={35} className="bounce" />
        <p>Scroll down </p>
        <BsFileArrowDownFill size={22} />
      </div>
    </div>
  );
};

export default Main;
