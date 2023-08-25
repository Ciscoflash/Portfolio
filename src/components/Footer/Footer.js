import React from "react";
import { FaFacebook } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { motion } from "framer-motion";
const Footer = () => {
  return (
    <div className="Footer">
      <motion.h1
        initial={{ opacity: 0, translateY: -100 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ delay: 0.4, duration: 1 }}
      >
        Abraham
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, translateY: 100 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ delay: 0.4, duration: 1 }}
      >
        <p>About</p>
        <p>Project</p>
        <p>Service</p>
      </motion.div>

      <div>
        <FaFacebook size={27} />
        <BsInstagram size={27} />
        <AiFillTwitterCircle size={30} />
      </div>

      <motion.div
        className="copy"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
      >
        &copy; Copyright 2023, Designed by Abraham Jude. All rights reserved
      </motion.div>
    </div>
  );
};

export default Footer;
