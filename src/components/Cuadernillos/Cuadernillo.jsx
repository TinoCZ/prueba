import React, { useEffect } from 'react';
import { useState } from 'react';
import './Cuadernillo.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios';
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'




const Cuadernillo = ({ prod }) => {
  const [preferenceId, setPreferenceId] = useState(null)
  const [showWallet, setShowWallet] = useState(false);
  const [showBuyButton, setShowBuyButton] = useState(true);
    initMercadoPago('APP_USR-537ad197-5d39-4f5c-a897-ee882932e692'
    , {
      locale: "es-AR",
    });

   

useEffect(() => {
    AOS.init();
  }, []);

  const createPreference = async () => {
    try{
        const response = await axios.post("http://localhost:3000/create_preference", {
          title: prod.title,
          quantity: 1,
          price: prod.price,
        });

        const { id } = response.data;
        return id;
    } catch (error){
      console.log(error)
    }
  };

  const handleBuy = async () => {
    const id = await createPreference();
    if(id) {
      setPreferenceId(id)
      setShowWallet(true)
      setShowBuyButton(false); // Ocultar el botón "comprar" al mostrar la Wallet

    }
  }

  const handleCloseWallet = () => {
    setShowWallet(false); // Ocultar la Wallet al cerrarla manualmente
    setShowBuyButton(true); // Mostrar el botón "comprar" al cerrar la Wallet
  };

  // const handlePaymentResponse = (response) => {
  //   if (response.status === 'approved') {
  //     // Redirige al usuario a la URL de éxito
  //     window.location.href = 'https://stately-griffin-965fbf.netlify.app/';
  //   } else {
  //     // Redirige al usuario a la URL de fallo o pendiente
  //     window.location.href = 'https://stately-griffin-965fbf.netlify.app/';
  //   }
  // };



  return (
    <div id='tienda' className='contenido-flex'>
      <div data-aos="fade-down" className='cards'>
       <img src={prod.image} alt="" />
     <p className=''>{prod.description}</p>
     <p>${prod.price}</p>
     {showBuyButton && (
          <button
            className='btn'
            onClick={handleBuy}>
            Comprar
          </button>
        )}

     {showWallet && (
          <div>
            <button className='boton-cerrar' onClick={handleCloseWallet}>Cerrar</button>
            <Wallet initialization={{ preferenceId: preferenceId, redirectMode: 'blank' }} />
          </div>
        )}
     
    {/* {preferenceId && <Wallet initialization={{ preferenceId: preferenceId }}  />} */}


     </div>
    </div>
  )}

export default Cuadernillo;
