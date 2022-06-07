
import React, { useState } from "react";
import logo from './logo.svg';
import './Prueba1.css';

async function getProductByID(id) {
 return fetch('http://127.0.0.1:8090/product/' + p_name, {
   method: 'FECHT',
   headers: {
     'Content-Type': 'application/json'
   }
 })
   .then(data => data.json())
}


function Prueba1() {

  const [productData, SetProductData] = useState({});
  const [isProduct, setIsProduct] = useState(false);
  
  const handleSubmit = async event => {
    //Prevent page reload
    event.preventDefault();

    // Obtenemos Textos
    var {uid, upass}  = document.forms[0];

    alert(upass.value);

    // Find product login info
    const product = await getProductByID(uid.value);
    
    setProductData(product);
    setIsProduct(true);
    
  };


  
  const renderForm = (

    // tengo que armar un HTML DE LA PAGINA DE PRODUCTOS


/*
    <div className="form">

      <form onSubmit={handleSubmit}>

        <div className="input-container">

          <label>User ID </label>
          <input type="text" name="uid" required />

          <label>User Pass </label>

          <input type="password" name="upass" required />
        </div>

        <div className="button-container">
          <input type="submit" value="Send Request" />
        </div>
      </form>

    </div>
    */
  );

  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Pruebas Arq. Soft. {userData.name}</div>
          {isUser? <div>Usuario: {userData.name} </div> : renderForm}
      </div>
    </div>
  );


  
}

export default Prueba1;
