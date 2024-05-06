import React, { useState, useEffect } from 'react';
import './Nav.css';
import myImage from '../../assets/myImage.jpg.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Nav = () => {
  useEffect(() => {
    // Inicializa AOS después de que el componente se monta
    AOS.init();
  }, []);

  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header data-aos="fade-down">
      <div className="containern">
        <nav className="navbar">
          <a href=""><img className='redes-icon' src={myImage} alt="" /></a>
          <a className='titulo' style={{fontSize: 25}} href="">
            <strong>Redes Mentales</strong>
          </a>
          <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <li className="nav-item">
              <a href="#" className="nav-link" onClick={closeMenu}>
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a href="#tienda" className="nav-link" onClick={closeMenu}>
                Tienda
              </a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link" onClick={closeMenu}>
                ¿Qué hacemos?
              </a>
            </li>
            <li className="nav-item">
              <a href="#us" className="nav-link" onClick={closeMenu}>
                ¿Quiénes somos?
              </a>
            </li>
            <li className="nav-item">
              <a href="#contacto" className="nav-link" onClick={closeMenu}>
                Contacto
              </a>
            </li>
          </ul>

          <div className="hamburger" onClick={handleToggleMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Nav;
