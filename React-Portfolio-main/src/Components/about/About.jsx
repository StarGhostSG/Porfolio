import React from "react";
import "./about.css";
// import mois from "../../Assets/mois.jpg";
import { FaAward } from "react-icons/fa";
import { BsClockHistory } from "react-icons/bs";
import { AiFillFolderOpen } from "react-icons/ai";

const About = () => {
  return (
    <section id="about">
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            {/* <img src={mois} alt="Moi" /> */}
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h4>Experience</h4>
              <small>
                <ul className="check-list">
                  <li>+2 ans de code</li>
                  <li>Frontend</li>
                  <li>Backend</li>
                  <li>Web Hooks</li>
                  <li></li>
                </ul>
              </small>
            </article>

            <article className="about__card">
              <BsClockHistory className="about__icon" />
              <h4>Hobbies</h4>
              <small>
                <ul className="check-list">
                  <li>Nature</li>
                  <li>Gaming</li>
                  <li>Developing</li>
                  <li>Technology</li>
                  <li>Anime</li>
                </ul>
              </small>
            </article>

            <article className="about__card">
              <AiFillFolderOpen className="about__icon" />
              <h4>Projets</h4>
              <small>
                <ul className="check-list">
                  <li>+20 realiser en solo</li>
                  <li>+60 réaliser en Entreprise</li>
                </ul>
              </small>
            </article>
          </div>

          <p>
          Salut ! Je m'appelle <b>Anis</b> j'aime créer des choses qui vivent sur internet.
           Mon intérêt pour le développement web a commencé en 2021 lorsque j'ai décidé d'essayer 
           de créer des pages web avec du code.
          </p>
         
        </div>
      </div>
    </section>
  );
};

export default About;
