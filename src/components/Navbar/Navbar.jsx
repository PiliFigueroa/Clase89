import React from 'react';
import './Navbar.css'

const Navbar = () => {
    return(
        <nav>
            <h4>Logo</h4>
            <div className="container-buttons">
                <a href="#">Inicio</a>
                <a href="#">Blog</a>
                <a href="#">Galeria</a>
                <a href="#">Contacto</a>
            </div>
        </nav>
    )
}

export { Navbar }