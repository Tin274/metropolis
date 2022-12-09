import React, {useContext, useState, useEffect} from 'react';
import { loginRequest } from "../../../controller/RequestController";

import { DataContext } from "../../ContentfulData/ContentfulContext.jsx";
import { ExtractImageInfo } from "../../../Helper/imageHelper.jsx";

import './login.css';
// import { LoggedStatusContext } from '../../main';


export default function Login() {
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
  <div className='login-image' style={{ backgroundImage: `url(${urlBackgrounImg})`}}>
    <div className='login-container'>
      <form>    
        <input className="input-field" type="text" name="email" placeholder="Deine E-mail" onChange={handleChange}/>
        <input className="input-field"type="password" name="password" placeholder="Dein Passwort" onChange={handleChange}/>
        <button className="login-button" onClick={onsubmit} >Login</button>
      </form>
    </div>
  </div>
)
}
