import React, {useState} from 'react';
import { signUpRequest } from "../../../controller/RequestController";

export default function Signup() {

  const userSchema = {
    name:"",
    email:"",
    password:""
}

  const [user, setUser] = useState(userSchema);
  
    function handleChange(event) {
      setUser(prev => ({...prev, [event.target.name]: event.target.value}))
    }

    function onsubmit(e) {
      e.preventDefault();
      signUpRequest(user)
      console.log(user)
    }


  return (
      <div>
          <input type="text" name="name" placeholder='Name' onChange={handleChange}/>
          <input type="email"  name = "email" placeholder='E-mail' onChange={handleChange}/>
          <input type="password" name= "password" placeholder='Passwort' onChange={handleChange}/>
          <button onClick={onsubmit}>Signup</button>    
      </div>
  )
}
