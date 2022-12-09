import React, { useState, useEffect } from "react";
import { signUpRequest } from "../../../controller/RequestController";

export default function Signup() {
    const [userRegister, setUserRegister] = useState(false);
    const userSchema = {
        name: "",
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
    }

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
}
