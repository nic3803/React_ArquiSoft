import { useReducer, useState } from "react";
import { TYPES } from "../actions/shoppingActions";
import { shoppingInitialState, shoppingReducer } from "../reducers/shoppingReducer";
import ProductItem from "./ProductItem";
import CartItem from "./CartItem";
import addToCart, { cartLoad } from "./Cookies";
import {removeOneCart} from "./Cookies"
import {deleteCart} from "./Cookies";
import {getUserCookies} from "./Cookies";
import Cookies from "universal-cookie";
import Products from "./Products";

function addToCartCart(detalle){
    addToCart(detalle.id_product)

    detalle.cant+=1
}
function NewOrder(products){
    console.log("xd",products)
    let userId = getUserCookies()
    let order = {
        id_user: userId,
        detalles: products
    }
    console.log(order)
    fetch('http://127.0.0.1:3306/compra/add',{
        method: 'PUT',
        headers :{'Content-Type':'application/json; charset=utf-8'},
        body: JSON.stringify(order)
    })
    .then(response=>response.json())

}
async function ProductLoad(id_products){
    let array = [];
    id_products.forEach(id => array.push(id));
    let obj = {id_products: array};
    console.log("to fecth")
    return fetch('http://127.0.0.1:3306/cart/ProLo',{
        method: 'POST',
        headers :{'Content-Type':'application/json; charset=utf-8'},
        body: JSON.stringify(obj)
    })
    .then(response=>response.json())
    
    
}

function showProducts(products){
    let cantidad = 0
    if(products == null||products.length<=0){
        return <div>
            <h3>Cart empty :/</h3>
        </div>
    }
    return products.map((detalle)=>
    <div obj={detalle} key={detalle.id_product} className="detalleCart">
        <ul className="Productos"> 
            <li>  {detalle.name_product}     
                <button onClick={()=>cantidad = addToCartCart(detalle)}>  Agregar  </button> 
                <button onClick={()=>removeOneCart(detalle.id_product)}> Remover </button>
            </li> 
            <li>Precio : {detalle.cost}</li>
            <li>cantidad: {detalle.cant}</li>
        </ul>

    </div>)

}
async function productCartLoad(){
    
    let cookieProducts = cartLoad()
    if(cookieProducts[0]!=[0]){
        let products = await ProductLoad(cookieProducts[0])

        products.forEach(p=>{
            for(let i = 0;i<cookieProducts[0].length;i++){
                if(p.id_product ==cookieProducts[0][i]){
                    p.cant = parseInt(cookieProducts[1][i])
                } 
            }
        })
        return products
    }
    return [0]
}
const ShoppingCart = () =>{

    const[state,dispatch] = useReducer(shoppingReducer, shoppingInitialState);
    const[product, setProduct] = useState([])

        //ESTO HACE REFERENCIA AL ESTADO INICIAL
    if(product == undefined||product.length==0){
        productCartLoad().then(response=>{if(response!=[]){setProduct(response)}})

    }


    function clearCart (){
        deleteCart()
        setProduct([])

    };
//MAPEO DE PRODUCTOR (products.map((producr)).......)
    return(
        
        <div>

            <h2> Carrito De Compras  </h2>
            
            <article className="box" >
            <div id = "productsCart">
                {product[0]!=0 ? showProducts(product): <a> Cart empty :/</a>}
            </div>
            
            <button onClick={()=>{clearCart(product)}}>Limpiar Carrito </button>
            
             </article>
            
            <button onClick={()=>{NewOrder(product);clearCart(product)}}> Comprar</button>

        </div>

    );




};

export default ShoppingCart;