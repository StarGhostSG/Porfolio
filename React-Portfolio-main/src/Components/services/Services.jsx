import React from "react";
import "./services.css";
import { FaCheck } from "react-icons/fa";

const Services = () => {
  return (
    <section id="services">
      <h2>Services</h2>

      <div className="container services__container">
       
        {/* END OF UI/UX */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <p style={{ textAlign: "center" }}>
              J'aime coder des choses à partir de zéro et prendre plaisir à donner 
              vie à des idées dans le navigateur.
              </p>
            </li>
            <li>
              <FaCheck className="service__list-icon" />
              <p>Visual Studio Code</p>
            </li>
            <li>
              <FaCheck className="service__list-icon" />
              <p>Vite</p>
            </li>
            <li>
              <FaCheck className="service__list-icon" />
              <p>CodePen</p>
            </li>
            <li>
              <FaCheck className="service__list-icon" />
              <p>GitHub</p>
            </li>
            <li>
              <FaCheck className="service__list-icon" />
              <p>Terminal</p>
            </li>
          </ul>
        </article>
        {/* END OF WEB DEVELOPMENT */}
        <article className="service">
          <div className="service__head">
            <h3>En Travail </h3>
          </div>
          <ul className="service__list">
            <li>
              <p style={{ textAlign: "center" }}>
              Qu'est-ce qui me distingue des autres développeurs ?
              </p>
            </li>
            <li>
              <FaCheck className="service__list-icon" />
              <p>Communication orale et écrite.</p>
            </li>
            <li>
              <FaCheck className="service__list-icon" />
              <p>Fiable et Constant.</p>
            </li>
            <li>
              <FaCheck className="service__list-icon" />
              <p>Engagé envers l'apprentissage.</p>
            </li>
            <li>
              <FaCheck className="service__list-icon" />
              <p>Méticuleux</p>
            </li>
            <li>
              <FaCheck className="service__list-icon" />
              <p> habitué aux environnements compétitifs.</p>
            </li>
          </ul>
        </article>
        {/* END OF CONTENT CREATION */}
      </div>
    </section>
  );
};

export default Services;
