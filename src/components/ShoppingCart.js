import { useReducer } from "react";
import { shoppingInitialState, shoppingReducer } from "../reducers/shoppingReducer";
import ProductItem from "./ProductItem";

const ShoppingCart = () =>{

    const[state,dispatch] = useReducer(shoppingReducer, shoppingInitialState);


        //ESTO HACE REFERENCIA AL ESTADO INICIAL
    const {products,cart} = state;
    const addToCart = (id) => {

        console.log(id)

    };
    const delFromCart = () => {};
    const clearCart = () => {};

    return(
        <div>

            <h2> Carrito De Compras  </h2>
            <h3> PRDUCTOS </h3>
            <article className="box grid_responsive">
            
            {products.map((product) => (<ProductItem key={product.id} data={product} addToCart={addToCart} />   ))};
            


             </article>
            <h3> Carrito  </h3>
            <article className="box"> </article>

        </div>

    );




};

export default ShoppingCart;