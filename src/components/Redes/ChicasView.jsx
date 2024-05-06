import React, { useEffect } from 'react';
import ChicasCss from './ChicasView.css'
import { IoLogoWhatsapp } from "react-icons/io";
import AOS from 'aos';
import 'aos/dist/aos.css';



const ChicasView = ({ chica }) => {


  useEffect(() => {
    AOS.init();
  }, []);


  return (
    <div data-aos="fade-right" id='us' className='card'>
      
      <img src={chica.image} alt="" />
        <div className='card-content'>
            <h2>{chica.name}</h2>
            <p>{chica.description}</p>
             <h5><IoLogoWhatsapp className='logo-whatsapp' />
{chica.contact}</h5>
        </div>
    </div>
  )
}

export default ChicasView