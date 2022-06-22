import React from "react";
import Cookies from "universal-cookie";

const Cookie = new Cookies();

export default function addToCart(id_p){
    let cookie= Cookie.get("Cart")
    if (cookie == undefined){
        Cookie.set("Cart", id_p + ",1;",{path:"/"});
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
    Cookie.set("Cart", newCookie,{path:"/"})
}
export function cartLoad(){
    
    let cookie = Cookie.get("Cart")
    let products = []
    if(cookie == undefined){
        products =[0,0]
        return products
    }
    
    let id_products = []
    let cantidades = []
    let contador = 0
    let toSet = cookie.split(";")
    toSet.forEach(productCart=>{
        let isProduct = false
        let array = productCart.split(",")
        if(array[0]!=""){
        id_products[contador] = array[0]
        isProduct = true
        }
        if(array[1]!= undefined){
        cantidades[contador]= array[1]
        isProduct = true
        }
        contador+=1
    });
    products[0]= id_products
    products[1]= cantidades
    return products
}

export function loginCookies(token){
    let cookie =  Cookie.get("User")
    if(cookie == undefined){
        Cookie.set("User",token,{path:"/"})
    }
    let newCookie = token
    Cookie.set("User",newCookie,{path:"/"})
    
}
export function deleteCart(){
    let cookie = Cookie.get("Cart")
    if(cookie == undefined){
        return
    }
    Cookie.remove("Cart")
}
export function removeOneCart(id_p){
    let cookie= Cookie.get("Cart")
    if (cookie == undefined){
        return
    }
    let newCookie = ""
    let toCompare = cookie.split(";")
    toCompare.forEach(detail => {
        if(detail!=""){
            let array = detail.split(",")
            let id_product = array[0]
            let cantidad = array[1]
            if(id_p==id_product){
                cantidad = Number(cantidad)-1
            }
            if (cantidad != 0){
                newCookie += id_product + "," + cantidad + ";"
            }

        }
    });
    if(newCookie!= ""){
        Cookie.set("Cart", newCookie,{path:"/"})
        return
    }
    Cookie.remove("Cart ")
}
export function getUserCookies(){
    let cookie= Cookie.get("User")
    if (cookie == undefined){
        return
    }
    return cookie

}