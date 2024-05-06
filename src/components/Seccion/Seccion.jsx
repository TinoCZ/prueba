import React, {useEffect} from 'react'
import './Seccion.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import firstImg from '../../assets/img1.jpg'
import Team from '../../assets/equipo.jpg'
import Tesis from '../../assets/img3.jpg'
import { GoArrowRight } from "react-icons/go";
import { GoArrowLeft } from "react-icons/go";
import { Link } from 'react-router-dom';
import Integrantes from '../Integrantes/Integrantes';


const Seccion = ({chica}) => {

    useEffect(() => {
        // Inicializa AOS después de que el componente se monta
        AOS.init();
      }, []);

  return (
    <div id='about' className='seccion-psico'>
        <h3 >Lo que hacemos</h3>
        <div>
    <div className='psico-contenido'>
        <div  className='psico'>
            <img data-aos="fade-down"
                 className='primer-img' 
            src={firstImg} alt="" />
            <div className='texto' >
                <h4 data-aos="fade-down">
        Terapia individual -presencial y virtual</h4>
                <p data-aos="fade-down">
                Te ofrecemos un espacio seguro y confidencial para explorar tus emociones, pensamientos y experiencias, desde la terapia basada en la evidencia.
                <br />
                

                    </p>
            </div>
            <div className='panic'>
               <img data-aos="fade-down"  className='equipo' src={Team} alt="" />
               <div className='texto-2'>
                <h4 data-aos="fade-down">Espacio de supervisión para profesionales</h4>
                <p data-aos="fade-down">En nuestro espacio de supervisión clínica, ofrecemos un ambiente de apoyo y aprendizaje para psicólogos.
                <br />

                </p>
            </div>
            <div className='tesis'>
                <img data-aos="fade-down"
                 src={Tesis} alt="" />
                <div className='texto-3'>
                     
                   <h4 data-aos="fade-down">Asesorías en tesis</h4>
                    
                    <p data-aos="fade-down" 
                    >Nuestro equipo de psicólogas con experiencia en investigación ofrece orientación y apoyo personalizado para estudiantes de Psicología
                     que están trabajando en sus proyectos de investigación y tesis.
                     <br />

</p>
                 <div>

                 </div>
                </div>
            </div>
            </div>
        </div>
    </div>
</div>
</div>
  )
}

export default Seccion