import React, { useContext, useState, useEffect } from "react";
import { loginRequest } from "../../../controller/RequestController";

import { DataContext } from "../../ContentfulData/ContentfulContext.jsx";
import { ExtractImageInfo } from "../../../Helper/imageHelper.jsx";

import "./login.css";
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
        email: "",
        password: "",
    };

    const [user, setUser] = useState(userSchema);

    function handleChange(event) {
        setUser((prev) => ({
            ...prev,
            [event.target.name]: event.target.value,
        }));
    }

    // function onsubmit(e) {
    //     e.preventDefault();
    //     loginRequest(user)
    //     console.log(user)
    //     }
    function onsubmit(e) {
        e.preventDefault();
        loginRequest(user);

        console.log(user);
    }
    const data = localStorage.getItem("name");
    if (data) {
        const status = JSON.parse(data).logged;
        console.log("::::", status);
        if (status) {
            return <h2> Hallo {JSON.parse(data).email}</h2>;
        }
        if (user === " "){
            const error = <h1>Please fill out youre email and password</h1>
            return <h2> Hallo + {error}</h2>;

        }
    }

    // const userStatus = useContext(LoggedStatusContext);

    return (
        <div
            className="login-image"
            style={{ 
                height:'100vh',
                backgroundImage: `url(${urlBackgrounImg})` }}
        >
            <div className="login-container">
                <form method="post" action="">
                    <input
                        className="input-field"
                        type="text"
                        name="email"
                        placeholder="Deine E-mail"
                        onChange={handleChange}
                        required
                    />
                    <input
                        className="input-field"
                        type="password"
                        name="password"
                        placeholder="Dein Passwort"
                        required
                        onChange={handleChange}
                    />
                    <button className="login-button" onClick={onsubmit}>
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}
