import { useState } from 'react';
import axios from 'axios';
import Login from './Login.jsx';
import Signup from './Signup.jsx';


export default function Auth(){
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    
    const handleSubmit = async(e) => {
        e.preventDefault();
     try{
        

        const response = await axios.post("http://localhost:8080/login",
            { username, password },
            {
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE3Njg4MDY0ODQsImV4cCI6MTgwMDM0MjQ4NCwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoiYW5udSJ9.T9yhz1eBfwIVjoAqKOrrVzt0df4_XM9h0sRun16Lkd0"
              }
            }
        );
        console.log("good nigga",response.data);
        
     }
     catch(error){
        console.log("Failed nigga",error);
     }
     finally{
        setUsername("");
        setPassword("");
     }
   }
    
    return(
    <>
    <h3>Welcome to Corp!</h3>
    <form onSubmit={handleSubmit}>
        <label>Enter Username:
            <input value = {username} onChange = {e => setUsername(e.target.value)}/>
        </label>
        <br/>
        <label>Enter Password:
            <input value = {password} onChange = {e => setPassword(e.target.value)}/>
        </label>
        <button type = "submit">Submit</button>        
    </form>
    </>
    );
}