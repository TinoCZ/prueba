// App.jsx
import React from 'react';
import Nav from './components/Nav/Nav';
import Hero from './components/Hero/Hero';
import CuadernillosDisplayer from './components/Cuadernillos/CuadernillosDisplayer';
import Seccion from './components/Seccion/Seccion';
import Form from './components/Form/Form';
import Footer from './components/Footer/Footer';
import Icono from './components/Icono/Icono';
import ChicasRedes from './components/Datos/ChicasRedes';


function App() {
  return (
    <>
    
      <div>
       <Nav />
       <Hero />
       <CuadernillosDisplayer /> 
       <Seccion />
       <ChicasRedes />
       <Form />
       <Footer />
      <Icono />
      </div>
    </>
  );
}

export default App;
