import React, { useContext, useState } from "react";
import { loginRequest } from "../../../controller/RequestController";

import { DataContext } from "../../ContentfulData/ContentfulContext.jsx";
import { ExtractImageInfo } from "../../../Helper/imageHelper.jsx";
import { LoggedStatusContext } from "../../../main.jsx";

import "./login.css";
import Home from "../start/index.jsx";

export default function Login() {
    // für background Image
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

    //User login
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

    function onsubmit(e) {
        e.preventDefault();
        loginRequest(user);

        console.log(user);
    }

    const data = localStorage.getItem("name");
    if (data) {
        const status = JSON.parse(data).logged;
        console.log("::::", status);
        // if (status) {
        //     return <h2> Hallo {JSON.parse(data).email}</h2>;
        // }
        if (user === " ") {
            const error = <h1>Please fill out youre email and password</h1>;
            return <h2> Hallo + {error}</h2>;
        }
    }

    const userIsLogged = useContext(LoggedStatusContext);
    console.log("Login: userStatus", userIsLogged);

    return (
        <div>
            {userIsLogged ? (
                <Home />
            ) : (
                <div
                    className="login-image"
                    style={{ backgroundImage: `url(${urlBackgrounImg})` }}
                >
                    <div className="login-container">
                        <form>
                            <input
                                className="input-field"
                                type="text"
                                name="email"
                                placeholder="Deine E-mail"
                                onChange={handleChange}
                            />
                            <input
                                className="input-field"
                                type="password"
                                name="password"
                                placeholder="Dein Passwort"
                                onChange={handleChange}
                            />
                            <button className="login-button" onClick={onsubmit}>
                                Login
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
