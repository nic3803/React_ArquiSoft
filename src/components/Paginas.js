import React from "react";
import {Routes,Route} from "react-router-dom"
import Login from "./Login";

export const Paginas =()=>{
    return(
        <section>
            <Routes>
                <Route path='/' exact element = {<Login/>}/>
            </Routes>
        </section>


    )
}
