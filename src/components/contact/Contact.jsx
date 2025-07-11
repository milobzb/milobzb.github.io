import React, { useRef, useState } from 'react';
import './contact.css';
import { HiOutlineMail } from 'react-icons/hi';
import { RiMessengerLine } from 'react-icons/ri';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);  // declare a new state variable

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_6219wtm', 'template_xzohvkf', form.current, '_KmOnjlN5lcY7jZeU')
      .then((result) => {
          console.log(result.text);
          setMessageSent(true);
      }, (error) => {
          console.log(error.text);
          setMessageSent(false);
      });

    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Let's Talk Business</h5>
      <h2>Contact Information</h2>

      <div className="container contact__container">
        <div className="contact__options">
        <article className='contact__option'>
          <HiOutlineMail className='contact__option-item'/>
          <h4>Outlook</h4>
          <h5>diazrenato2001</h5>
          <a href="mailto:diazrenato2001@outlook.com" target="_blank" rel="noreferrer">Email Me</a>
        </article>
        <article className='contact__option'>
          <RiMessengerLine className='contact__option-item'/>
          <h4>Messenger</h4>
          <h5>Renato A. Diaz</h5>
          <a href="https://m.me/renato.diaz.7731" target="_blank" rel="noreferrer">Message Me</a>
        </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Type Your Full Name' required onChange={() => setMessageSent(false)} />
          <input type="email" name='email' placeholder='Type Your Email Address' required onChange={() => setMessageSent(false)} />
          <textarea name="message" rows="7" placeholder='Type Your Message' required onChange={() => setMessageSent(false)}></textarea>
          <button type='submit' className='btn btn-primary'>Send A <strong>Fancy</strong> Message</button>
          <p>{messageSent ? "Your fancy message has been sent to Renato :D" : ""}</p>
        </form>
      </div>
    </section>
  )
}

export default Contact
