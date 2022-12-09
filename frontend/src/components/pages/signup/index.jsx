import React, {useContext, useState, useEffect} from 'react';
import { signUpRequest } from "../../../controller/RequestController";

import { DataContext } from "../../ContentfulData/ContentfulContext.jsx";
import { ExtractImageInfo } from "../../../Helper/imageHelper.jsx";

import './signup.css';


export default function Signup() {

  const { images } = useContext(DataContext);

  let urlBackgrounImg,
      backgrounImgAttribut = "Background Image Not Found";
  if (images) {
      const backgrounImgdata = ExtractImageInfo(images, "BackgroundImage");
      if (backgrounImgdata) {
          urlBackgrounImg = backgrounImgdata.urlImg;
          backgrounImgAttribut = backgrounImgdata.imgAttribut;
      }
  }

  const [ userRegister, setUserRegister] = useState(false);

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
      const status = signUpRequest(user);
      console.log("status, ", status)
      setUserRegister(status);
      if (userRegister) {
        return (<h1>Du bist erfolgreich registriert </h1> )
      }
      console.log(user)
    }
  console.log("userRegister",userRegister)
  useEffect(() => {
    
  },[userRegister])


  return (
    <div className='signup-image' style={{ backgroundImage: `url(${urlBackgrounImg})`}}>
       <div className='signup-container'>
        <form>
          <input className="input-field" type="text" name="name" placeholder='Name' onChange={handleChange}/>
          <input className="input-field" type="email"  name = "email" placeholder='E-mail' onChange={handleChange}/>
          <input className="input-field" type="password" name= "password" placeholder='Passwort' onChange={handleChange}/>
          <button className="signup-button" onClick={onsubmit}>Signup</button>    
        </form>  
      </div>
    </div>
  )
}
