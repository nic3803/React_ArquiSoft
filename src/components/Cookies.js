import React from "react";
import Cookies from "universal-cookie";

const Cookie = new Cookies();

export default function addToCart(id_p){
    let cookie= Cookie.get("cart")
    if (cookie == undefined){
        Cookie.set("cart", id_p + ",1;",{path:"/"});
        return
    }
    let newCookie = ""
    let isNewItem = true
    let toCompare = cookie.split(";")
    toCompare.forEach(detail => {
        if(detail!=""){
            let array = detail.split(",")
            let id_product = array[0]
            let cantidad = array[1]
            if(id_p==id_product){
                cantidad = Number(cantidad)+1
                isNewItem = false;
            }
            newCookie += id_product + "," + cantidad + ";"
        }
    });
    if(isNewItem){
        newCookie += id_p + ",1;"
    }
    Cookie.set("cart", newCookie,{path:"/"})
}

export function loginCookies(id_user){
    let cookie =  Cookie.get("User")
    if(cookie == undefined){
        Cookie.set("User",id_user,{path:"/"})
    }
    let newCookie = id_user
    Cookie.set("user",newCookie,{path:"/"})
    
}