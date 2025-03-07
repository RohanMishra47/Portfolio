import PageTransition from "../components/PageTransition";
import React, { useState } from "react";
import "../styles/Contact.css";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch("https://formspree.io/f/mldjrlke", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(formData),
    });

    if(response.ok){
      setSuccess(true);
      setFormData({name: "", email: "", message: ""});
    }
    else{
      alert("Someting went wrong. Please try again");
    }
  };

  return (
    <PageTransition>
      <div className="contact-container">
      <h2>Contact Me</h2>
      {success ? <p className="success">Message sent successfully!</p> : null}
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Your Email" onChange={handleChange} required />
        <textarea name="message" placeholder="Your Message" onChange={handleChange} required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
    </PageTransition>
  );
};

export default Contact;