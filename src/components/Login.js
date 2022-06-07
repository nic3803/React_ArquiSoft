import React,{useState,useEffect} from "react"

export default function Login(){
    const[emailOb,setEmail]= useState("");
    const[passwordOb,setPassword] = useState("");

    const onChange =  (emailOb,passwordOb)=>{
        setEmail(emailOb.target.value);
        setPassword(passwordOb.target.value);
    }
    const requestOptions={
        method: 'POST',
        headers: {'Content-Type': '127.0.0.1:3306/login'},
        body: JSON.stringify({email : emailOb, password : passwordOb })
    };

    const login = ()=>{
        const response = fetch('127.0.0.1:3306/login',requestOptions);
        const data = response.json();
    };
    const onSubmit = async ()=>{
        login()
    };





    return(
        <form>
        <h1>login</h1>
        <input type="email" placeholder="email" onChange={onChange} value ={emailOb}></input>
        <input type="password" placeholder="password" onChange={onChange} value={passwordOb}></input>
        <button onClick={onSubmit}></button>
        </form>


    );


}