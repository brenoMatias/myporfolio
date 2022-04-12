import { useState } from "react";
import "./contact.scss";
import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';



export default function Contact() {
  const [message, setMessage] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault(); // Prevents default refresh by the browser

    emailjs.sendForm('service_yzlnfuo', 'template_sawlmnl', form.current, 'user_I5urkuTCfBfAxlhl0H0iU')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      setMessage(true);

  };
  
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right-c">
        <h2>Contact me</h2>
        <form ref={form} onSubmit={sendEmail}>
              <label className="for">Name</label>
              <input type="text" name="user_name" />
              <label className="for">Email</label>
              <input type="email" name="user_email" />
              <label className="for">Message</label>
              <textarea name="message" />
              <input className="but" type="submit" value="Send" />
              {message && <span>Thanks, I'll reply ASAP :)</span>}

    </form>
      </div>
    </div>
  );
}