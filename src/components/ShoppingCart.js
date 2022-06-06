import { useReducer } from "react";
import { TYPES } from "../actions/shoppingActions";
import { shoppingInitialState, shoppingReducer } from "../reducers/shoppingReducer";
import ProductItem from "./ProductItem";
import CartItem from "./CartItem";

const ShoppingCart = () =>{

    const[state,dispatch] = useReducer(shoppingReducer, shoppingInitialState);


        //ESTO HACE REFERENCIA AL ESTADO INICIAL
    const {products,cart} = state;
    const addToCart = (id_product) => {

        console.log(id_product)
       dispatch({ type: TYPES.ADD_TO_CART, payload: id_product });


    };
    const delFromCart = () => {};
    const clearCart = () => {};
//MAPEO DE PRODUCTOR (products.map((producr)).......)
    return(
        <div>

            <h2> Carrito De Compras  </h2>
            <h3> PRDUCTOS </h3>
            <article className="box grid_responsive">
            
             
            {products.map((product) => (<ProductItem key={product.id_product} data={product} addToCart={addToCart} />   ))};
            


             </article>
            <h3> Carrito  </h3>
            <article className="box">
            
            <button onClick={clearCart}>Limpiar Carrito </button>
            
            {cart.map((item, index) => (<CartItem key={index} data={item} delFromCart={delFromCart} />))}


            
             </article>

        </div>

    );




};

export default ShoppingCart;