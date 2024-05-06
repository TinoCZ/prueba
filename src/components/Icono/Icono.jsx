import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './Icono.css'


function Icono() {
    
        const handleWhatsAppClick = () => {
          window.open('https://api.whatsapp.com/send?phone=+549 11 6445-5080', '_blank');
        };
    

  return (
    <div className='btn-wsp' onClick={handleWhatsAppClick}>
      <FontAwesomeIcon icon={faWhatsapp} size="2x" />
    </div>
  )
}

export default Icono