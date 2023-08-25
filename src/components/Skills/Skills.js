import React from "react";
import { motion } from "framer-motion";
const Skills = () => {
  return (
    <div className="skills" id="skills">
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h1>Skills</h1>
        <p className="tss">My technical level</p>
      </motion.div>
      <div className="devs">
        <motion.div
          className="front"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <p>Frontend developer</p>
          <div className="fronts">
            <div>
              <span>HTML</span>
              <p>Advanced</p>
            </div>
            <div>
              <span>Scss</span>
              <p>Intermediate</p>
            </div>
          </div>
          <div className="fronts">
            <div>
              <span>Css</span>
              <p>Advanced</p>
            </div>
            <div>
              <span>Git</span>
              <p>Intermediate</p>
            </div>
          </div>
          <div className="fronts">
            <div>
              <span>Javascript</span>
              <p>Intermediate</p>
            </div>
            <div>
              <span>React</span>
              <p>Intermediate</p>
            </div>
          </div>
          <div className="fronts">
            <div>
              <span>Bootsrap</span>
              <p>Intermediate</p>
            </div>
            <div>
              <span>Tailwind</span>
              <p>Begginner</p>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="back"
          initial={{ opacity: 0, translateX: 100 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p>Backend developer</p>
          <div className="backs">
            <div className="fronts">
              <div>
                <span>Node js</span>
                <p>Intermediate</p>
              </div>
              <div>
                <span>Express js</span>
                <p>Intermediate</p>
              </div>
            </div>
            <div className="fronts">
              <div>
                <span>Mongodb</span>
                <p>Intermediate</p>
              </div>
              <div>
                <span>Mysql</span>
                <p>Intermediate</p>
              </div>
            </div>
            <div className="fronts">
              <div>
                <span>Nest js</span>
                <p>Begginner</p>
              </div>
              <div>
                <span>Typescript</span>
                <p>Begginner</p>
              </div>
            </div>
            <div className="fronts">
              <div>
                <span>Ducker</span>
                <p>Begginner</p>
              </div>
              <div>
                <span>Prisma</span>
                <p>Begginner</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
