import React, { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
 import './Form.css'
 import AOS from 'aos';
import 'aos/dist/aos.css';
const ContactForm = () => {
  // Estado inicial del formulario
  
  // Maneja la presentación del formulario
  

  useEffect(() => {
    // Inicializa AOS después de que el componente se monta
    AOS.init();
  }, []);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_pw73vm8', 'template_1mqpr26', form.current, {
        publicKey: 'FKrwWcWUfIQ0O5EhE',
      })
      .then(
        () => {
          alert("Su mensaje ha sido enviado con exito");
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div id='contacto' className='fondo'>
        <div className='contenedor'>
      <h1 data-aos="fade-right">Contacto</h1>
      <form ref={form} onSubmit={sendEmail}>
        {/* Campo de nombre */}
        <div className='input-container'>
        <label>
          
          {/* Input controlado que refleja el estado del formulario */}
          <input
          data-aos="fade-right"
            type="text"
            name="user_name"
            placeholder='Nombre'
          />
        </label>
        </div>
        <br />
        {/* Campo de correo electrónico */}
        <div className='input-container'>
        <label>
          
          {/* Input controlado que refleja el estado del formulario */}
          <input
          data-aos="fade-right"
            type="email"
            name="user_email"
            
            placeholder='Email'
          />
        </label>
        </div>
        <br />
        {/* Campo de mensaje */}
        <div className='input-container'>
        <label>
          {/* TextArea controlada que refleja el estado del formulario */}
          <textarea
          data-aos="fade-right"
            name="message"
           
            placeholder='Ingrese un mensaje'
          />
        </label>
        </div>
        <br />
        <div className='btn-container'>
        {/* Botón de envío del formulario */}
        <button  type="submit" value='Send'>Enviar</button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default ContactForm;
