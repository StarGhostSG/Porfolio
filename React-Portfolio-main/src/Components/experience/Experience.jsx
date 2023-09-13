import React from "react";
import "./experience.css";
import { AiOutlineHtml5 } from "react-icons/ai";
import { FaCss3 } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { FaReact } from "react-icons/fa";

import { DiMongodb } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { SiVite } from "react-icons/si";
import { FaAngular } from "react-icons/fa"

const Experience = () => {
  return (
    <section id="experience">
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <AiOutlineHtml5 className="experience__details-icon" />
              <div>
                <h4>HTML</h4>
              </div>
            </article>
            <article className="experience__details">
              <FaCss3 className="experience__details-icon" />
              <div>
                <h4>CSS</h4>
              </div>
            </article>
            <article className="experience__details">
              <DiJavascript1 className="experience__details-icon" />
              <div>
                <h4>JavaScript</h4>
              </div>
            </article>
            <article className="experience__details">
              <FaReact className="experience__details-icon" />
              <div>
                <h4>React</h4>

              </div>
            </article>
            <article className="experience__details">
              <div>
                <article className="experience__details">
                <FaAngular className="experience__details-icon" /> 
                <div>
                <h4>Angular</h4>
                </div>
                </article>

              </div>
            </article>
            <article className="experience__details">
              <SiVite className="experience__details-icon" />
              <div>
                <h4>ViteJS</h4>
              </div>
            </article>
          </div>
        </div>

        {/* END OF FRONTEND */}

        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
           
           
            <article className="experience__details">
              <DiMongodb className="experience__details-icon" />
              <div>
                <h4>MongoDB</h4>
              </div>
              <br />
            </article>
            <article className="experience__details">
              <FaNodeJs className="experience__details-icon" />
              <div>
                <h4>NodeJS</h4>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
