import React from "react";
import { FcGraduationCap } from "react-icons/fc";
import { BiBriefcaseAlt } from "react-icons/bi";
const Qualification = () => {
  return (
    <div>
      <div className="Qualification">
        <h1>Qualification</h1>
        <p>My personal journey</p>
        <div className="Education">
          <div>
            <FcGraduationCap size={27} />
            <p>Education</p>
          </div>
          <div>
            <BiBriefcaseAlt size={27} />
            <p>Experience</p>
          </div>
        </div>
      </div>
      <div class="timeline">
        <div class="containers left">
          <div class="content">
            <h2>Frontend Developement</h2>
            <p>Rework Technologies</p>
            <span>2022 - 2023</span>
          </div>
        </div>
        <div class="containers right">
          <div class="content">
            <h2>Backend Developement</h2>
            <p>Rework Technologies</p>
            <span>2022 - 2023</span>
          </div>
        </div>
        <div class="containers left">
          <div class="content">
            <h2>UI/UX Design</h2>
            <p>Autocomm Technologies</p>
            <span>2021 Present</span>
          </div>
        </div>
        <div class="containers right">
          <div class="content">
            <h2>Database Design & Management</h2>
            <p>Autocomm Technologies</p>
            <span>2021 Present</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Qualification;
