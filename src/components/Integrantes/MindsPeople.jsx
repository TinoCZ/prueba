import React from 'react'

const MindsPeople = ({ girl }) => {
  return (
    <div className='chicas-redes'>
      <div className='chicas-card'>
        <img src={girl.image} alt="" />
        <h4>{girl.title}</h4>
        <p>{girl.category}</p>
        <p>{girl.rol}</p>
        <p>{girl.description}</p>
        <p>{girl.advisory}</p>
        <p>{girl.contact}</p>
        </div>
    </div>
  )
}

export default MindsPeople