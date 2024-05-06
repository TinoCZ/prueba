import React from 'react'
import Minds from './MindsPeople'
import IntegrantesStyle from './Integrantes.css'
import Anto from '../../assets/Anto.jpg';
import Agos from '../../assets/Agos.jpg';
import Diana from '../../assets/Diana.jpg';
import Melisa from '../../assets/Melisa.jpg';
import Sofia from '../../assets/Sofia.jpg';






const Integrantes = () => { 

const girls = [
    {
      image: Anto, 
      title: 'Antonella Cuchi Zanini',
      category: 'Lic. en Psicologia - UBA',
      description: 'Posgrado en Terapia Cognitiva Conductual',
      rol: 'Psicoterapia Adultos y Adolescentes - Atencion Virtual',
      contact: '+549 11 6445-5080',
    },
    {
        image: Agos,
        title: 'Agostina Faccone',
        category: 'Lic. en Psicologia - UBA',
        description: 'Posgrado en Terapia Cognitiva Conductual',
        rol: 'Integracion Escolar - Supervision',
        contact: '+549 11 3234-8463',
      },
      {
        image: Melisa,
        title: 'Melisa Violante',
        category: 'Lic. en Psicologia - UBA',
        description: 'Especializacion Terapia Cognitiva Conductual (en curso)',
        rol: 'Psicoterapia Adultos - Atencion presencial en Avellaneda y Lomas de Zamora',
        contact: '+549 11 3823-3364',

      },
      {
        image: Diana,
        title: 'Diana Chanca',
        category: 'Lic. en Psicologia - UBA',
        description: 'Profesorado en Psicologia - UBA',
        location: 'Concurrente Ps. Clinica - Htal. Ameghino',
        rol: 'Integracion Escolar',
        contact: '+549 11 5765-1639',

      },
      {
        image: Sofia,
        title: 'Sofia Orttiz Lic. en Psicologia - UBA',
        category: 'Profesorado en Psicologia - UBA',
        rol: 'Docente UBA y UFLO',
        description: 'Investigacion en CIIPME-CONICET,',
        advisory: 'Asesorias en Tesis de grado y Posgrado',
        contact: '+549 11 2278-9635',
      }
]

 
  return (
    <div className='girls-content'>
        {girls.map((girl, index)=>
    <Integrantes key={index} girl={girl}/>)}
    </div>
  )
}

export default Integrantes