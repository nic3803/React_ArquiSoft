import React from 'react';
import './Css/Home.css';

function Header(){
    return(
    <nav>

        <div className = "header">
            <a href="#!" className="logo">TITULO ANASHE</a>
            <div>
            <a href="http://127.0.0.1:3000/productos"  className="productos">Productos</a> 
            </div>
        </div>
        

    </nav>

    )
}

export default Header