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
            
            <article className="box">
            
            <button onClick={clearCart}>Limpiar Carrito </button>
            
            {cart.map((item, index) => (<CartItem key={index} data={item} delFromCart={delFromCart} />))}


            
             </article>

        </div>

    );




};

export default ShoppingCart;