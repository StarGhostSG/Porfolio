import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/anis-benyahia-b61b2028a"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/StarGhostSG" target="_blank" rel="noreferrer">
        <BsGithub />
      </a>
      <a
        href="https://instagram.com/starghostsg?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D"
        target="_blank"
        rel="noreferrer"
      >
        <BsInstagram />
      </a>
    </div>
  );
};

export default HeaderSocials;
