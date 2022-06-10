import React from "react";
import {Routes,Route, Router} from "react-router-dom"
import Login from "./Login";
import Products from "./Products";
import ShoppingCart from "./ShoppingCart";

export const Paginas =()=>{
    return(
        <section>
            <Routes>
                <Route path='/' exact element = {<Login/>}/>
                <Route path='/cart' exact element={<ShoppingCart/>}/>
                <Route path='/products' exact element={<Products/>}/>
            </Routes>
        </section>


    )
}
