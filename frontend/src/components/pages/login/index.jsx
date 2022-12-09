import React, {useContext, useState} from 'react';
import { loginRequest } from "../../../controller/RequestController";
// import { LoggedStatusContext } from '../../main';
import './login.css';



export default function Login() {
    const userSchema = {
        email:"",
        password:""
    }

    const [user, setUser] = useState(userSchema);
  
    function handleChange(event) {
      setUser(prev => ({...prev, [event.target.name]: event.target.value}))
    }

function onsubmit(e) {
    e.preventDefault();
    loginRequest(user)
    console.log(user)
    }
  
// const userStatus = useContext(LoggedStatusContext);

return (
    <div id="login">

      <img></img>
      <form>    
        <input type="text" name="email" placeholder="Deine E-mail" onChange={handleChange}/>
        <input type="password" name="password" placeholder="Dein Passwort" onChange={handleChange}/>
        <button onClick={onsubmit} >Login</button>
      </form>
    </div>
  )
}
