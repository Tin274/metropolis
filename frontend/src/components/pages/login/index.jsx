import React, { useContext, useState } from "react";
import { loginRequest } from "../../../controller/RequestController";
// import { LoggedStatusContext } from '../../main';

import { DataContext } from "../../ContentfulData/ContentfulContext.jsx";
import { ExtractImageInfo } from "../../../Helper/imageHelper.jsx";

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
            return <h1> Hallo {JSON.parse(data).email}</h1>;
        }
    }

    // const imgst = `background-image: url(' ${urlBackgrounImg}');`;
    // const userStatus = useContext(LoggedStatusContext);

    return (
        <div>
            <img
                className="header-image"
                src={urlBackgrounImg}
                alt={backgrounImgAttribut}
            />
            <form>
                <input
                    type="text"
                    name="email"
                    placeholder="Deine E-mail"
                    onChange={handleChange}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Dein Passwort"
                    onChange={handleChange}
                />
                <button onClick={onsubmit}>Login</button>
            </form>
        </div>
    );
}
