import React from "react";
import {Routes,Route, Router} from "react-router-dom"
import Login from "./Login";
import ShoppingCart from "./ShoppingCart";
import Home from "./Header"


export const Paginas =()=>{
    return(
        <section>
            <Routes>
                <Route path='/' exact element = {<Login/>}/>
                <Route path='/cart' exact element={<ShoppingCart/>}/>
                
                
            </Routes>
        </section>


    )
}
