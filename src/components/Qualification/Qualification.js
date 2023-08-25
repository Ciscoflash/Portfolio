import React from "react";
import { FcGraduationCap } from "react-icons/fc";
import { BiBriefcaseAlt } from "react-icons/bi";
import { motion } from "framer-motion";
const Qualification = () => {
  return (
    <div>
      <div className="Qualification">
        <motion.h1
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          Qualification
        </motion.h1>
        <p>My personal journey</p>
        <div className="Education">
          <div>
            <FcGraduationCap size={27} />
            <motion.p
              initial={{ opacity: 0, translateX: -100 }}
              whileInView={{ opacity: 1, translateX: 0 }}
              transition={{ duration: 0.6 }}
            >
              Education
            </motion.p>
          </div>
          <div>
            <BiBriefcaseAlt size={27} />
            <motion.p
              initial={{ opacity: 0, translateX: 100 }}
              whileInView={{ opacity: 1, translateX: 0 }}
              transition={{ duration: 0.8 }}
            >
              Experience
            </motion.p>
          </div>
        </div>
      </div>
      <div class="timeline">
        <motion.div
          class="containers left"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div class="content">
            <h2>Frontend Developement</h2>
            <p>Rework Technologies</p>
            <span>2022 - 2023</span>
          </div>
        </motion.div>
        <motion.div
          class="containers right"
          initial={{ opacity: 0, translateX: 100 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div class="content">
            <h2>Backend Developement</h2>
            <p>Rework Technologies</p>
            <span>2022 - 2023</span>
          </div>
        </motion.div>
        <motion.div
          class="containers left"
          initial={{ opacity: 0, translateX: -100 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div class="content">
            <h2>UI/UX Design</h2>
            <p>Autocomm Technologies</p>
            <span>2021 Present</span>
          </div>
        </motion.div>
        <motion.div
          class="containers right"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div class="content">
            <h2>Database Design & Management</h2>
            <p>Autocomm Technologies</p>
            <span>2021 Present</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Qualification;
