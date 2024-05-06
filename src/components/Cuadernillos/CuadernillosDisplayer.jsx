import React from 'react'
import Cuadernillo from './Cuadernillo'
import Cuadernillos from './CuadernillosDisplayer.css'
import Ansiedad from '../../assets/Ansiedad.jpg';
import Autoestima from '../../assets/Autoestima.jpg';
import Panico from '../../assets/Panico.jpg';



const CuadernillosDisplayer = () => {

const products = [
    {
        title: "Manejo de la ansiedad",
        category: "Psicología de la Salud",
        description: "Cuadernillo Manejo de la Ansiedad",
        image: Ansiedad,
        price: 4000,
    },
    {
        title: "Autoestima",
        category: "Autoestima",
        description: "Cuadernillo Autoestima",
        image: Autoestima,
        price: 4000,
    },
    {
        title: "Manejo del panico",
        category: "Panico",
        description: "Cuadernillo Manejo del Pánico",
        image: Panico,
        price: 4000,
    },
]


  return (
    <div className='contenido'>
      {products.map((prod, index) => 
      <Cuadernillo key={index} prod={prod} />)}
    </div>
  )
}

export default CuadernillosDisplayer