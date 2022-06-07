import React, {useState,useEffect} from "react"

export default function Products(){
    const[products,setProducts] = useState([]);
    const[name, setName] = useState("");
    console.log(products)

    const onChange = (e) =>{
        setName(e.target.value)
    }
  
    const productsApi = async (keyPro) => {
        const response = await fetch('127.0.0.1:3306/product/product/'+keyPro);
        const data = await response.json();
        setProducts(data);
    }
    const onSubmit = () =>{
        productsApi()
    }
    
    return (
        <div>
        <h1>login</h1>
        <input placeholder="nombre del producto" onChange={onChange} value={name}></input> 
        <button  onClick={onSubmit(name)}> Search Products</button>
        </div>
    );

}