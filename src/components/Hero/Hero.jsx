// Hero.jsx
import React, {useEffect} from 'react';
import './Hero.css'; // Asegúrate de tener un archivo CSS asociado
import AOS from 'aos';
import 'aos/dist/aos.css';



const Hero = () => {

  useEffect(() => {
    // Inicializa AOS después de que el componente se monta
    AOS.init();
  }, []);


  return (
    <div className='hero'>
      <div className='hero-container'>
        <h1 data-aos="fade-down">¡Bienvenidos a Redes Mentales! </h1>
        <p data-aos="zoom-in">Somos un equipo de licenciadas en Psicología comprometidas con la salud mental y el bienestar emocional. 
<br />
Te acompañamos en el camino hacia tu crecimiento, desarrollo y aprendizaje. </p>
      </div>
    </div>
  );
};

export default Hero;
