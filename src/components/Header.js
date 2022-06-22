import React from 'react';
import './Css/Header.css';


 function Header(){
    return( 
    <nav>

        <div className = "header">
            <div>
            <img className="logo" src={require("./imagenes/mercado.png")} alt='logo'></img>
            </div>
        
            <div className="clases">
           <a className="botones" href="http://127.0.0.1:3000/products"  > PRODUCTOS </a>
           <a className="botones" href="#!"> CATEGORIAS </a>
            </div>
            <div>
            <img className="carrito" src={require("./imagenes/carrito.png")} alt='logocarrp' href="#!"></img>
            </div>
            
        </div>
        

    </nav>

    )
}


export default Header