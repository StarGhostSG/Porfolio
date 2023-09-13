/* eslint-disable no-restricted-globals */
import React from "react";
import "./portfolio.css";
import IMG1 from "../../Assets/IMG1.png";
import IMG5 from "../../Assets/portfolio5.AVIF";
import IMG7 from "../../Assets/IMG7.png";
import IMG8 from "../../Assets/IMG8.png";

const data = [
  {
    id: 1,
    image: IMG8,
    title: "Admin Page",
    techs: [
      { name: "JavaScript", color: "c_baseline", border: "t_border" },
      { name: "React", color: "c_baseline", border: "t_border" },
      { name: "Css", color: "c_baseline", border: "t_border" },
      { name: "Node.js", color: "c_baseline", border: "t_border" },
      { name: "MongoDB", color: "c_baseline", border: "t_border" },
    ],
    github: "https://github.com/StarGhostSG/last-Show/admin",
  },
  {
    id: 2,
    image: IMG1,
    title: "E-commerce Page",
    techs: [
      { name: "JavaScript", color: "c_baseline", border: "t_border" },
      { name: "HTML", color: "c_baseline", border: "t_border" },
      { name: "CSS", color: "c_baseline", border: "t_border" },
    ],
    github: "https://github.com/StarGhostSG/Pearl-tech",
  },
  {
    id: 3,
    image: IMG7,
    title: "Réservations Page",
    techs: [
      { name: "React", color: "c_baseline", border: "t_border" },
      { name: "JavaScript", color: "c_baseline", border: "t_border" },
      { name: "HTML", color: "c_baseline", border: "t_border" },
      { name: "CSS", color: "c_baseline", border: "t_border" },
    ],
    github: "https://github.com/StarGhostSG/last-Show",

  },
  {
    id: 6,
    image: IMG5,
    title: "Générateur de Mot De Pass JavaScript",
    techs: [
      { name: "Angular", color: "c_baseline", border: "t_border" },
      { name: "CSS", color: "c_baseline", border: "t_border" },
    ],
    github: "https://github.com/Sankku/Practical-React",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2>Portfolio</h2>
      <h5>My Recent Work</h5>

      <div className="container portfolio__container">
        {data.map(({ id, image, techs, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt="PortfolioImage" />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__tags">
                {techs.map((tech) => (
                  <p
                    key={`${name}-${tech.name}`}
                    className={`text-[14px] ${tech.color} ${tech.border}`}>
                    {tech.name}
                  </p>
                ))}
              </div>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer">
                  GitHub
                </a>
               
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
