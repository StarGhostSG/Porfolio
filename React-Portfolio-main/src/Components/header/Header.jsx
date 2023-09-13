import React from "react";
import "./header.css";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import php from "../../Assets/php.png";
import {Link} from "react-scroll"

const Header = () => {
  return (
    <header id="Home">
      <div className="container header__container">
        <article className="header__card">
          <div className="card__tittle">
          </div>
          <div className="memoji">
            <img src={php} alt="MeEmoji" />
          </div>
          <h1>Anis Benyahia</h1>
          <div className="text-content">
            <h4 className="text-light">
              <b>developpeur</b> venant d'<b>Algerie</b>, étudiant
              au lycée et aussi enthousiaste à l'idée de trouver un endroit pour élargir
               mes connaissances et continuer à évoluer en tant que professionnel.
            </h4>
          </div>
          <CTA />
        </article>
        <div className="scroll__cont">
          <Link to="contact" 
          smooth={true}
          duration={500}
          className="scroll__down">
            Scroll ---&gt;
          </Link>
        </div>
        <HeaderSocials />
      </div>
    </header>
  );
};

export default Header;
