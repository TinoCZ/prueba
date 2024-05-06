import React from 'react'
import ChicasRedesCss from './ChicasRedes.css'
import Antonella from '../../assets/AntoCZ.jpg';
import Agostina from '../../assets/Agostina.jpg';
import Diana from '../../assets/DianaC.jpg';
import Melisa from '../../assets/MelisaV.jpg';
import Sofia from '../../assets/SofiaOr.jpg';
import ChicasView from '../Redes/ChicasView';





const ChicasRedes = () => {

const chicas = [
    {
      image: Antonella,
      name: "Antonella Cuchi Zanini",
      description: "Lic. en Psicología - UBA; Posgrado en Terapia Cognitiva Conductual; Psicoterapia Adultos - Atención virtual",
      // title: 'Posgrado en Terapia Cognitiva Conductual',
      // job: 'Psicoterapia Adultos - Atencion Virtual',
       contact: '+549 11 6445-5080' 
    }
    ,
    {
        image: Agostina,
        name: "Agostina Faccone",
        description: "Lic. en Psicología - UBA; Posgrado en Terapia Cognitiva Conductual; Integración escolar; Espacio de supervisión",      
         contact: '+549 11 3234-8463' 
    },
    { 
        image: Diana,
        name: "Diana Chanca",
        description: "Lic. en Psicología - UBA; Profesorado en Psicología - UBA; Concurrente PS. clínica - Hospital Ameghino; Integración escolar",
        // title: 'Profesorado en Psicología - UBA',
        // job: 'Concurrente PS. Clinica - Htmal. Ameghino',
        // sector: 'Integracion Escolar',
        contact: '+549 11 5765-1689' 
    },
    { 
        image: Melisa,
        name: "Melisa Violante",
        description: "Lic. en Psicología - UBA; Especialización Terapia Cognitiva Conductual; Psicoterapia Adultos - Atención presencial zona sur",
        // job: 'Psicoterapia Adultos - Atención Presencial',
        contact: '+549 11 3823-3364' 
    },
    {
        image: Sofia,
        name: "Sofía Ortiz",
         description: "Lic. en Psicología - UBA; Profesorado en Psicología - UBA; Docente UBA y UFO; Investigación en CIIMPE-CONICET; Asesorías en tesis de grado y posgrado ",
        // sector: 'Asesorías en tésis de grado y posgrado',
        contact: '+549 11 2278-9635' 
    },
    
  ];

  return (
    <div className='card-container'>
      {chicas.map((chica, index) => 
      <ChicasView key={index} chica={chica} />)}
      </div>
  )
}

export default ChicasRedes