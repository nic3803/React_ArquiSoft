import React, {useState,useEffect} from "react"
import { ProductItem } from "./ProductItem";

const loadOptions ={
    method:'GET',
    headers :{'Content-Type': 'application/'} 
}
async function getProducts(){
    return await fetch('http://127.0.0.1:3306/product/all',loadOptions)
    .then(response=>response.json())
}

async function showProducts (products){
    return await products.map((product)=>
    <div obj={product} key={product.id_product} className="product">
        <a className="name">{product.name_product}</a>
        <a className="price">{product.cost}</a>
        <div>
            <a className="description">{product.descripcion}</a>
        </div>
        <a className="category">{product.category}</a>
      <a className="stock">Stock: {product.stock}</a>
    </div>)
}
    

export default function Products(){
    const[products,setProducts]= useState([])
    const[name, setName] = useState("");
    console.log(products)
    if(products.length <=0){
        getProducts().then(response=>{setProducts(response)})
    }
    
    const onChange = (e) =>{
        setName(e.target.value)
    }
    const loadOptions ={
        method:'GET',
        headers :{'Content-Type': 'application/'} 
    }
    const onSubmit= () =>{
        fetch('http://127.0.0.1/product/all',loadOptions)
        .then(response=>response.json())
        .then(response=>setProducts(response));
        

    }
    const productsApi = async (keyPro) => {
       fetch('127.0.0.1:3306/product/product/'+keyPro)
        .then(response=>setProducts(response))
        
       
    }   
  
    
    
    //aca tengo que cargar los product
    return (
        <>
    <h3> PRODUCTOS </h3>
    <div id="product">
        {products.length>0 ? showProducts(products): <a>Nothing to show</a>}
    
     </div>
     </>
    )
    
}
