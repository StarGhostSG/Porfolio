import React from "react";
import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BsBookHalf } from "react-icons/bs";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageDetail } from "react-icons/bi";
import { useState } from "react";
import { Link } from "react-scroll";


const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <Link
        aria-label="Who Is StarGhost"
        to="Home"
        smooth={true}
        duration={500}
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}>
        <AiOutlineHome />
      </Link>
      <Link
        aria-label="Read more about Me"
        to="about"
        smooth={true}
        duration={500}
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}>
        <AiOutlineUser />
      </Link>
      <Link
        aria-label="See My experience"
        to="experience"
        smooth={true}
        duration={500}
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}>
        <BsBookHalf />
      </Link>
      <Link
        aria-label="See some of the services that I provides"
        to="services"
        smooth={true}
        duration={500}
        onClick={() => setActiveNav("#services")}
        className={activeNav === "#services" ? "active" : ""}>
        <RiServiceLine />
      </Link>
      <Link
        aria-label="Contact Me to know more about Me"
        to="contact"
        smooth={true}
        duration={500}
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}>
        <BiMessageDetail />
      </Link>
    </nav>
  );
};

export default Nav;
