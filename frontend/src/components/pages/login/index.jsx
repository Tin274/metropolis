import React, { useContext, useState } from "react";
import { loginRequest } from "../../../controller/RequestController";

import { DataContext } from "../../ContentfulData/ContentfulContext.jsx";
import { ExtractImageInfo } from "../../../Helper/imageHelper.jsx";
import { LoggedStatusContext } from "../../../main.jsx";

import "./login.css";
import Home from "../start/index.jsx";
import { Link } from "react-router-dom";

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
    const userIsLogged = useContext(LoggedStatusContext);
    async function onsubmit(e) {
        e.preventDefault();
        await loginRequest(user);

        console.log("Login Onsubmit: userStatus", userIsLogged);
        console.log("Onsubmit :user", user);
        window.location.reload();
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

    console.log("Login: userStatus", userIsLogged);

    return (
        <div>
            {userIsLogged ? (
                <section>
                    {/* <h1> Sie sind eingeloggt</h1> */}
                    <Home />
                </section>
            ) : (
                <div
                    className="login-image"
                    style={{ backgroundImage: `url(${urlBackgrounImg})` }}
                >
                    <div className="login-container">
                        <form onSubmit={onsubmit}>
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
                            <button className="login-button">Login</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
