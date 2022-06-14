import React from 'react';
import './Css/Header.css';

function Header(){
    return(
    <nav>

        <div className = "header">
            <div>
            <a className="logo"href="#!" >MERCADO PAN</a>
            </div>
            <div>
            <a href="http://127.0.0.1:3000/products"  className="productos">Productos</a> 
            </div>
        </div>
        

    </nav>

    )
}

export default Header