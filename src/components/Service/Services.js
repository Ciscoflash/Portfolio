import React from "react";
import { CgWebsite } from "react-icons/cg";
import { AiOutlineArrowRight } from "react-icons/ai";
import { PiBracketsAngleBold } from "react-icons/pi";
import { TbBrandAsana } from "react-icons/tb";
import { IoMdClose } from "react-icons/io";
import { GrStatusGood } from "react-icons/gr";
import { useState } from "react";
import { motion } from "framer-motion";
const Services = () => {
  const [skillModal, setSkillModal] = useState(false);
  const [serviceMdal, setServiceModal] = useState({
    title: "",
    description: "",
  });
  const [webDesign, setWebDesign] = useState(false);
  return (
    <div>
      <div className="services" id="services">
        <div className="svs">
          <motion.h1
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            Services
          </motion.h1>
          <p>what i offer</p>
        </div>
        <div className="mainService">
          <motion.div
            initial={{ opacity: 0, translateX: -100 }}
            whileInView={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 0.6 }}
          >
            <CgWebsite size={25} />
            <h1>Web Designer</h1>
            <p
              className="hovers"
              onClick={() => {
                setSkillModal(true);
                setServiceModal({
                  title: "Web Designer",
                  description:
                    "Service with 1 year experience. Standard designing, building, and implementing your applications with MERN(Mongo Express React Js) Stack . for clients and companies.",
                });
              }}
            >
              view more <AiOutlineArrowRight className="views" />
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, translateY: 100 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.6 }}
          >
            <PiBracketsAngleBold size={25} />
            <h1>UI/UX Designer</h1>
            <p
              className="hovers"
              onClick={() => {
                setSkillModal(true);
                setServiceModal({
                  title: "UI/UX Designer",
                  description:
                    "Service with 1 year experience. Provding quality work for clients and companies.",
                });
              }}
            >
              view more <AiOutlineArrowRight className="views" />
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, translateX: 100 }}
            whileInView={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 0.8 }}
          >
            <TbBrandAsana size={25} />
            <h1>App Developement</h1>
            <p
              className="hovers"
              onClick={() => {
                setSkillModal(true);
                setServiceModal({
                  title: "Application Development",
                  description:
                    "Service with 1 year experience. Provding quality work for Both front-end and back-end technologies, understanding of the entire web development process, handling handle end-to-end application development and delivery of complete, integrated solutions.clients and companies.",
                });
              }}
            >
              view more <AiOutlineArrowRight className="views" />
            </p>
          </motion.div>
        </div>

        {skillModal && (
          <div className="modal">
            <div className="mainModal">
              <div
                className="closeBtn"
                onClick={() => {
                  setSkillModal(false);
                }}
              >
                <IoMdClose size={25} />
              </div>

              <div className="titleModal">
                <h1>{serviceMdal.title}</h1>
                <p>{serviceMdal.description}</p>
              </div>

              <div className="bullets">
                <div>
                  <GrStatusGood />
                  <p>i develope the user interface</p>
                </div>
                <div>
                  <GrStatusGood />
                  <p>web page development</p>
                </div>
                <div>
                  <GrStatusGood />
                  <p>i create high quality Api for your company</p>
                </div>
                <div>
                  <GrStatusGood />
                  <p>i position your company brand</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Services;
