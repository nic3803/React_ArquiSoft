import { useReducer, useState } from "react";
import { TYPES } from "../actions/shoppingActions";
import { shoppingInitialState, shoppingReducer } from "../reducers/shoppingReducer";
import ProductItem from "./ProductItem";
import CartItem from "./CartItem";
import { cartLoad } from "./Cookies";


async function ProductLoad(id_products){
    console.log("que onda",id_products)
    let array = [];
    id_products.forEach(id => array.push(id));
    let obj = {id_products: array};

     fetch('http://127.0.0.1:3306/cart/ProLo',{
        method: 'POST',
        headers :{'Content-Type':'application/json; charset=utf-8'},
        body: JSON.stringify(obj)
    })
    .then((response)=>response.json())

}

function showProducts(products){
    if(products == null||products.length<=0){
        return <div>
            <h3>Cart empty :/</h3>
        </div>
    }

}
function productCartLoad(){
let cookieProducts = cartLoad()
    let products = ProductLoad(cookieProducts[0]).then(response=>console.log(response))
    console.log("AHAHAHA",products)

}
const ShoppingCart = () =>{

    const[state,dispatch] = useReducer(shoppingReducer, shoppingInitialState);
    const[product, setProduct] = useState(productCartLoad())

        //ESTO HACE REFERENCIA AL ESTADO INICIAL
    const {products,cart} = state;
    const addToCart = (id_product) => {

        console.log(id_product)
       dispatch({ type: TYPES.ADD_TO_CART, payload: id_product });


    };


    const delFromCart = (id_product,all = false) => {
        console.log(id_product,all)
        if(all){

            dispatch({type: TYPES.REMOVE_ALL_FROM_CART, payload: id_product});
        } else {
            dispatch({type: TYPES.REMOVE_ONE_FROM_CART, payload: id_product});
        }


    };







    const clearCart = () => {

        dispatch({type: TYPES.CLEAR_CART});

    };
//MAPEO DE PRODUCTOR (products.map((producr)).......)
    return(
        
        <div>

            <h2> Carrito De Compras  </h2>
            
            <article className="box" >
            <div id = "productsCart">
                {products.length>0 ? showProducts(product): <a> Cart empty :/</a>}
            </div>
            
            <button onClick={()=>{showProducts(product)}}>Limpiar Carrito </button>
            
            {cart.map((item, index) => (<CartItem key={index} data={item} delFromCart={delFromCart} />))}


            
             </article>

        </div>

    );




};

export default ShoppingCart;