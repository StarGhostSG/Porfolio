import React from "react";
import "./contact.css";
import { BsMessenger } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaDiscord } from "react-icons/fa"
import { BsInstagram } from"react-icons/bs"
toast.configure();

const Contact = () => {
  const Promise = () => {
    toast.success("Le message a bien été envoyer", {
      position: toast.POSITION.BOTTOM_RIGHT,
      theme: "dark",
    });
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_bwki4eu",
      "template_6dl81po",
      form.current,
      "5uEWnoJG40dGi6lwe"
      ).then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
        
      }
    
    return (
      <section id="contact">
      <h2>Contact</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <BsInstagram className="contact__option-icon" />
            <h4>Instagram</h4>
            <h5>Anis Ben</h5>
            <a
              href="https://instagram.com/starghostsg?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D"
              target="_blank"
              rel="noreferrer">
              Me Contacter
            </a>
          </article>
          <article className="contact__option">
            <FaDiscord className="contact__option-icon" />
            <h4>Discord</h4>
            <h5>StarGhost#8077</h5>
            <a
              href="https://discord.gg/EBCmF8PpRj"
              target="_blank"
              rel="noreferrer">
              Envoyer
            </a>
          </article>
          <article className="contact__option">
            <BsMessenger className="contact__option-icon" />
            <h4>Facebook</h4>
            <h5>Anis Ben</h5>
            <a
              href="https://www.facebook.com/anis.khelwy.3"
              target="_blank"
              rel="noreferrer">
              Me Contacter
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="to_name"
            placeholder="Nom"
            required
          />
          <input type="email" name="from_name" placeholder="Votre Email" required />
          <textarea
            name="message"
            rows={7}
            placeholder="Votre Message"
            required></textarea>
          <button type="submit" className="btn btn-primary" onClick={Promise}>
            Envoyer
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

