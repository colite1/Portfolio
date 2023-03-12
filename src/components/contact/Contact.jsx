import React,{useRef} from 'react'
import './Contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {AiFillLinkedin} from 'react-icons/ai'
import {BsWhatsapp} from 'react-icons/bs'
import emailjs from 'emailjs-com';
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_diuhzjl', 'template_j91yvla', form.current, '6xBzKjRtVM73Uq21L')
     e.target.reset();
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <HiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>akp9111@gmail.com</h5>
            <a href="mailto:akp9111@gmail.com" target='_blank' rel="noopener noreferrer">Send a message</a>
          </article>

          <article className="contact__option">
            <AiFillLinkedin className='contact__option-icon'/>
            <h4>LinkedIn</h4>
            <h5>Ankit Pawar</h5>
            <a href="https://www.linkedin.com/in/akp9111/" target='_blank' rel="noopener noreferrer">Send a message</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>9131765552</h5>
            <a href="
            https://api.whatsapp.com/send?phone=9131765552" target='_blank' rel="noopener noreferrer" >Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text"  placeholder='Your Full Name' name='name' required/>
          <input type="email" placeholder='Your Email' required/>
          <textarea name="message" placeholder='Your Message' rows="10" required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact