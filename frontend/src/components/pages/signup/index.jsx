<<<<<<< HEAD
import React, { useState, useEffect } from "react";
=======
import React, {useContext, useState, useEffect} from 'react';
>>>>>>> 3220037a3d117e392e1acbe5b329490a36c933c9
import { signUpRequest } from "../../../controller/RequestController";

import { DataContext } from "../../ContentfulData/ContentfulContext.jsx";
import { ExtractImageInfo } from "../../../Helper/imageHelper.jsx";

import './signup.css';


export default function Signup() {
    const [userRegister, setUserRegister] = useState(false);
    const userSchema = {
        name: "",
        email: "",
        password: "",
    };

<<<<<<< HEAD
    const [user, setUser] = useState(userSchema);
=======
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
>>>>>>> 3220037a3d117e392e1acbe5b329490a36c933c9

    function handleChange(event) {
        setUser((prev) => ({
            ...prev,
            [event.target.name]: event.target.value,
        }));
    }

    function onsubmit(e) {
<<<<<<< HEAD
        e.preventDefault();
        const status = signUpRequest(user);

        console.log("status::: ", status);
        setUserRegister(status);

        console.log(user);
        const promise = new Promise((resolve, reject) => resolve(userRegister));
        promise.then((v) => {
            const data = v;
            setUserRegister(data);
            console.log("data", data);
        });
    }
    if (userRegister === true) {
        return <h1>Du bist erfolgreich registriert </h1>;
=======
      e.preventDefault();
      const status = signUpRequest(user);
      console.log("status, ", status)
      setUserRegister(status);
      if (userRegister) {
        return (<h1>Du bist erfolgreich registriert </h1> )
      }
      console.log(user)
>>>>>>> 3220037a3d117e392e1acbe5b329490a36c933c9
    }
  console.log("userRegister",userRegister)
  useEffect(() => {
    
  },[userRegister])

<<<<<<< HEAD
    console.log("userRegister ", userRegister);
    // useEffect(() => {}, [userRegister]);
    return (
        <div>
            <input
                type="text"
                name="name"
                placeholder="Name"
                onChange={handleChange}
            />
            <input
                type="email"
                name="email"
                placeholder="E-mail"
                onChange={handleChange}
            />
            <input
                type="password"
                name="password"
                placeholder="Passwort"
                onChange={handleChange}
            />
            <button onClick={onsubmit}>Signup</button>
        </div>
    );
=======

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
>>>>>>> 3220037a3d117e392e1acbe5b329490a36c933c9
}
