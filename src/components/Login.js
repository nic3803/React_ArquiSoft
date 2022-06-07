import React,{ useState} from "react"

export default function Login(){
    const[emailOb,setEmail]= useState("");
    const[passwordOb,setPassword] = useState("");

    const onChangeEmail =  (email)=>{
        setEmail(email.target.value);
        
    }
    
    const onChangePas = (password)=>{
    setPassword(password.target.value)};

    
    const requestOptions={
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        
        body: JSON.stringify({email : emailOb, password : passwordOb })
    };

    const login = async()=>{
        fetch('http://127.0.0.1:3306/login',requestOptions)
        .then(response => {if (response.status == 400) {
           alert("user not found")
           window.location.reload();
        }else{
            console.log(response.json())
            window.location.replace('/') // mandar a pagina de productos
        }})
        
    };
   
    const handleSubmit= (event)=>{
        event.preventDefault();
        login();

    };

    return(
        <form onSubmit={handleSubmit}>
        <h1>login</h1>
        <input id="email" placeholder="email" onChange={onChangeEmail} value ={emailOb}></input>
        <input id="password" placeholder="password" onChange={onChangePas} value={passwordOb}></input>
        <input type="submit" value="sum"></input>
        </form>


    );


}