import React, {useState,useEffect} from "react"
import { ProductItem } from "./ProductItem";
import Cookies from "universal-cookie";

const Coockie = new Cookies();

function addToCart(id_product, setCartProducts){
    let cookie= Cookies.get("cart")
    if (cookie == undefined){
        Cookies.set("cart", id + ",1;",{path:"/"});
        setCartProducts(1)
        return
    }
    let newCookie = ""
    let isNewItem = true
    let toCompare = cookie.split(";")
    let total = 0
    toCompare.forEach(detail => {
        if(detail!=""){
            let array = item.split(",")
            let id_product = array[0]
            let cantidad = array[1]
            if(id==id_product){
                cantidad = Number(cantidad)+1
                isNewItem = false;
            }
            newCookie += id_product + "," + cantidad + ";"
            total += Number(cantidad)
        }
    });
    if(isNewItem){
        newCookie += id + ",1;"
        total +=1
    }
    cookie = newCookie
    Cookies.set("cart", cookie,{path:"/"})
    Cookies.set("cartItems",total,{path:"/"})
    setCartProducts(total)
}
const loadOptions ={
    method:'GET',
    headers :{'Content-Type': 'application/'} 
}
async function getProducts(){
    return await fetch('http://127.0.0.1:3306/product/all',loadOptions)
    .then(response=>response.json())
}

function showProducts (products){
    return  products.map((product)=>
    <div obj={product} key={product.id_product} className="product">
        <ul className="Productos"> 
            <li>  {product.name_product}     
                <button >  Agregar  </button> 
            </li> 
            <li>  Precio: ${product.cost}     </li>
            <li>   Categoria: {product.category}    </li>
            <li>   Stock: { product.stock}   </li>
            <li>Descripcion: {product.descripcion}</li>
        </ul>
     </div>)
}

export default function Products(){
    const[products,setProducts]= useState([]);
    const[name, setName] = useState("");
    const[cartProducts,setCartProducts]= useState ("");
    console.log(products)
    if(products.length <=0){
        getProducts().then(response=>{setProducts(response)})
    }
    
    const onChange = (e) =>{
        setName(e.target.value);
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
    return (
        <>
    <h3> PRODUCTOS </h3>
    <div>
    <input type="text" id="search" placeholder="Search..." />
    </div>
    <div id="product">
        {products.length>0 ? showProducts(products): <a>Nothing to show</a>}
     </div>
     </>
    )
    
}
