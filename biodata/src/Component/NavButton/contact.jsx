import React from "react";
import contact from "../IMG/contact_us.jpg";
import { FaPhone, FaWhatsapp, FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaGithub, FaLocationPin } from "react-icons/fa6";

function Contact() {
  return (
    <>
      <div className="home-main-div">
        <div className="left-section">
          <img
            src={contact}
            className="contact"
            height="65vh!important"
            alt=""
          />
        </div>
        <div className="contact-section">
          <div className="title">
            <h1 className="title">Contact us</h1>
          </div>
          <div className="info">
            <span className="span-icon-div">
              <FaLocationPin className="icon location" />
              <span>: <a href="https://maps.app.goo.gl/84AQyqLB5bDQQu8PA" target="_blank">saharanpur, Uttar Pradesh</a></span>
            </span>
            <span className="span-icon-div">
              {" "}
              <FaPhone className="icon phone" />
              <span>: +91 - 8868063012</span>
            </span>
            <span className="span-icon-div">
              {" "}
              <FaWhatsapp className="icon whatsapp" />
              <span>: +91 - 8868063012</span>
            </span>
            <span className="span-icon-div">
              <SiGmail className="icon mail" />
              <span>: vksnh01@gmail.com</span>
            </span>
            <span className="span-icon-div">
              {" "}
              <FaGithub className="icon github" />
              <span>: <a href="https://github.com/vksnh01" target="_blank">vikrant sharma</a></span>
            </span>
            <span className="span-icon-div">
              {" "}
              <FaLinkedinIn className="icon link" />
              <span>: <a href="https://www.linkedin.com/in/vikrant-sharna-5805ba205?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">LinkedIn</a></span>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
