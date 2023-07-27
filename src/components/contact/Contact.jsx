import React from 'react'
import './contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {IoIosCall} from 'react-icons/io'
import {BsWhatsapp} from 'react-icons/bs'
import {useRef} from 'react'
import emailjs from 'emailjs-com' 

const Contact = () => {

  const form=useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_lvvx3ja', 'template_acowsp7', form.current, 's6iLKdD5HVMPe8pZE')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      
      e.target.reset();
  };

  const handleClick = () => {
    // Copy the phone number to clipboard
    navigator.clipboard.writeText("+917091936656")
      .then(() => {
        // Show alert when the text is copied successfully
        window.alert('Phone number copied to clipboard!');
      })
      .catch((error) => {
        // Show alert if there was an error while copying
        window.alert('Failed to copy phone number. Please try again.');
        console.error('Copy to clipboard failed:', error);
      });
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <HiOutlineMail className="contact__option-icon"/>
            <h4>EMail</h4>
            <h5 className='text-light'>orioninthespace@gmail.com</h5>
            <a href="mailto:orioninthespace@gmail.com" target="_blank">Send Message</a>
          </article>

          <article className="contact__option">
            <IoIosCall className="contact__option-icon"/>
            <h4>Phone</h4>
            <h5 className='text-light'>+91 7091936656</h5>
            <a href="#" onClick={handleClick}>Call me</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon"/>
            <h4>WhatsApp</h4>
            <h5 className='text-light'>+91 8986948549</h5>
            <a href="https://api.whatsapp.com/send?phone=918986948549" target="_blank">WhatsApp me</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required/>
          <input type="email" name="email" placeholder="Your Email Address" required/>
          <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact