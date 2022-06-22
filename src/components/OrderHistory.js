import React,{useState} from "react";
import { getUserCookies } from "./Cookies";

export default function OrderHistory(){
    const[orders,setOrders]= useState([])
    const[Token,setToken]= useState("")

    function orderLoad(){

        let url = 'http://127.0.0.1:3306/User/OrH/IU?IU=${Token}'
        fetch(url,{
            method: 'GET',
            headers: {'Content-Type':'application/IU'}
        })
        .then(response=>response.json())
        .then(response=>setOrders(response))
    }
    console.log(orders)

}