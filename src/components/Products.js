import React, {useState,useEffect} from "react"


export default function Products(){
    const[products,setProducts]= useState([])
    const[name, setName] = useState("");
    console.log(products)
    
    const onChange = (e) =>{
        setName(e.target.value)
    }
    const loadOptions ={
        method:'GET',
        headers :{'Content-Type': 'application/'} 
    }
    const productLoad = async()=>{
        fetch('http://127.0.0.1/product/all',loadOptions)
        .then(response=>setProducts(response))

        
    }
    const productsApi = async (keyPro) => {
       fetch('127.0.0.1:3306/product/product/'+keyPro)
        .then(response=>setProducts(response))
        
       
    }   
    const onSubmit = () =>{
        productsApi()
    }
    
    
    //aca tengo que cargar los product
    return <div style={{border:"thin solid gray", padding:"1rem"}}> 
    
    <h4>  {name_product}  </h4> 
    <h5>   ${cost}.00      </h5>

    <button onClick={()=> addToCart(id_product)}>  Agregar  </button>
     </div>
    
}
const ProductItem = ({data, addToCart}) => {
    
    let{id_product,name_product,cost,stock,category,descripcion} = data;  //aca tengo que cargar los product
    return <div style={{border:"thin solid gray", padding:"1rem"}}> 
    
    <h4>  {name_product}  </h4> 
    <h5>   ${cost}.00      </h5>

    <button onClick={()=> addToCart(id_product)}>  Agregar  </button>
     </div>


    


};