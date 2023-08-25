import React from "react";
import { BiLogoGmail } from "react-icons/bi";
import { ImWhatsapp } from "react-icons/im";
import { BsLinkedin } from "react-icons/bs";
import { motion } from "framer-motion";
const Contact = () => {
  return (
    <div className="contact" id="contact">
      <motion.h1
        initial={{ opacity: 0, scale: 0, translateX: 100 }}
        whileInView={{ opacity: 1, scale: 1, translateX: 0 }}
        transition={{ duration: 0.9 }}
      >
        Contact Me
      </motion.h1>
      <p>Get in tourch</p>

      <div className="divs">
        <div className="left">
          <motion.div
            initial={{ opacity: 0, translateY: 100 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
          >
            <BiLogoGmail size={27} />
            <h2>Gmail</h2>
            <p>abrahamjude1999@gmail.com</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, translateY: 100 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
          >
            <ImWhatsapp size={27} />
            <h2>Whatsapp</h2>
            <p>+234 905 5504 7774</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, translateY: 100 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
          >
            <BsLinkedin size={27} />
            <h2>Linkedin</h2>
            <p>Abraham Jude</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
