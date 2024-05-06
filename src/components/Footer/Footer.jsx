import React from 'react'
import './Footer.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { IoIosMail } from "react-icons/io";


const Footer = () => {
  return (
<footer>
    <div className="footer-content">
  <div className="contact-info">
    <p><IoIosMail className='correo' />contactoredesmentales@gmail.com</p>
  </div>
  <div className="social-icons">
    <h5>Seguinos en</h5>
    <ul>
        <hr />
      <li><a href="https://www.instagram.com/redes.mentales/?hl=es" target="_blank"><i className="bi bi-instagram"></i></a></li>
      <li><a href="https://www.facebook.com/mentales.redes" target="_blank"><i className="bi bi-facebook"></i></a></li>
    </ul>        
  </div>
</div>
</footer>
  )
}

export default Footer