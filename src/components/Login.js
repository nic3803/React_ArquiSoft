import React,{useState,useEffect} from "react"

export default function Login(){
    const[emailOb,setEmail]= useState("");
    const[passwordOb,setPassword] = useState("");

    const onChangeEmail =  (email)=>{
        setEmail(email.target.value);
        
    }
    
    const onChangePas = (password)=>
    setPassword(password.target.value);

    
    const requestOptions={
        headers: {'Content-Type': 'localhost:3306/login'},
        method: 'POST',
        body: JSON.stringify({email : emailOb, password : passwordOb })
    };

    const login = ()=>{
        fetch('localhost:3306/login',requestOptions)
        .then(response=>response.json())
        .then(data=> console.log(data))
    };
    const submit = ()=>{
        login()
    };

    return(
        <form>
        <h1>login</h1>
        <input id="email" placeholder="email" onChange={onChangeEmail} value ={emailOb}></input>
        <input id="password" placeholder="password" onChange={onChangePas} value={passwordOb}></input>
        <button onClick={submit}></button>
        </form>


    );


}