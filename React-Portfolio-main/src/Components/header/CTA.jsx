import React from "react";
import CV from "../../Assets/CV.pdf"

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} className="btn" target="_blank" rel="noreferrer">
        Télécharger CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Me Contacter
      </a>
    </div>
  );
};

export default CTA;
