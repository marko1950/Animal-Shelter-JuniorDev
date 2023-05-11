import { useState } from "react";
import style from "../../../styles/LandingPage.module.css";
import axios from "axios";

function ContactForm() {
  const [contactMessage, setContactMessage] = useState({
    name: "",
    email: "",
    message: "",
  });
  console.log(contactMessage);
  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setContactMessage({ ...contactMessage, [name]: value });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    axios
      .post("http://localhost:3001/contactMessage", contactMessage)
      .then((response) => console.log(response));
  };

  return (
    <form className={style.contactForm} onSubmit={handleSubmit}>
      <label className={style.contactForm_label}>
        Name:
        <input
          className={style.contactForm_input}
          name="name"
          type="text"
          value={contactMessage.name}
          onChange={handleChange}
          required
        />
      </label>
      <label className={style.contactForm_label}>
        Email:
        <input
          className={style.contactForm_input}
          name="email"
          type="email"
          value={contactMessage.email}
          onChange={handleChange}
          required
        />
      </label>
      <label className={style.contactForm_label}>
        Message:
        <textarea
          className={style.contactForm_textarea}
          value={contactMessage.message}
          name="message"
          onChange={handleChange}
          required
        />
      </label>
      <button className={style.contactForm_button} type="submit">
        Submit
      </button>
    </form>
  );
}

export default ContactForm;
