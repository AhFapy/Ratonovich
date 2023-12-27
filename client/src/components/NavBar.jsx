import React from 'react'
import "./component-styles.css"

function NavBar(props) {
    const handleClick = function(path) {
        window.location.path;
    }
  return (
    <div className='nav-bar'>
        <div className='nav-left'>
            <img className='nav-logo' src='src/assets/logo.png' onClick={handleClick("/")}/>
        </div>
        <div className='nav-right'>
            <span className={`nav-link ${props.selected === "inicio" ? "selected" : ''}`}> Inicio </span>
            <span className={`nav-link ${props.selected === "encuentranos" ? "selected" : ''}`}> Encuéntranos </span>
            <span className={`nav-link ${props.selected === "reserva" ? "selected" : ''}`}> Reserva </span>
            <span className={`nav-link ${props.selected === "contacto" ? "selected" : ''}`}> Contacto </span>

        </div>
    </div>
  )
}

export default NavBar