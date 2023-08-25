import React from "react";
import { IoLogoInstagram } from "react-icons/io";
import { BsPinterest } from "react-icons/bs";
import { VscGithubInverted } from "react-icons/vsc";
import hand from "../../accests/hand.svg";
import send from "../../accests/send.svg";
import { LuMouse } from "react-icons/lu";
import { BsFileArrowDownFill } from "react-icons/bs";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const Main = () => {
  return (
    <div className="hmm">
      <div className="Main">
        <div className="tops">
          <IoLogoInstagram size={35} className="bounce dounce" />
          <BsPinterest size={35} className="bounce dounce" />
          <Link to={"https://github.com/Ciscoflash"}>
            <VscGithubInverted
              size={35}
              color="black"
              className="bounce dounce"
            />{" "}
          </Link>
        </div>
        <div className="middle">
          <div>
            <motion.h1
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              Abraham Jude
            </motion.h1>
            <motion.img src={hand} alt="" whileHover={{ scale: 1.1 }} />
          </div>
          <div className="dashes">
            <p className="dash"></p>
            <motion.p
              initial={{ opacity: 0, translateX: 200 }}
              whileInView={{ opacity: 1, translateX: 0 }}
              transition={{ duration: 0.6 }}
            >
              Fullstack Developer
            </motion.p>
          </div>
          <div>
            <motion.span
              initial={{ opacity: 0, translateY: 100 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 0.6 }}
            >
              i'm a creative designer based in Abuja Nigeria, and i'm very
              passionate and dedicated to my work...
            </motion.span>
          </div>
          <div className="hiBtn">
            <motion.button
              type="btn"
              whileTap={{ scale: 1.2 }}
              animate={{ x: [0, 50, 0] }}
              transition={{ delay: 0.1 }}
            >
              Say Hello
            </motion.button>
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
