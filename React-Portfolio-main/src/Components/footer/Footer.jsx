import React from "react";
import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaDiscord } from "react-icons/fa"

const Footer = () => {
  return (
    <footer>
      <a href="#Home" className="footer__logo">
       StarGhost
      </a>

      <div className="footer__socials">
        <a aria-label="Anis Facebook" href="https://www.facebook.com/anis.khelwy.3">
          <FaFacebookF />
        </a>
        <a aria-label="Instagram" href="https://instagram.com/starghostsg?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D">
          <BsInstagram />
        </a>
        <a aria-label="StarGhost's Discord" href="https://discord.gg/EBCmF8PpRj">
          <FaDiscord />
        </a>
        
      </div>
    </footer>
  );
};

export default Footer;