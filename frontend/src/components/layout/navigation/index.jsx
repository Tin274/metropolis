import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../ContentfulData/ContentfulContext.jsx";
import { ExtractImageInfo } from "../../../Helper/imageHelper.jsx";
import "./navigation.css";

import { LoggedStatusContext } from "../../../main.jsx";

export default function Navigation() {
    const [isLogged, setIsLogged] = useState();
    const { images } = useContext(DataContext);
    let urlImgLogoHeader,
        imgLogoHeaderAtribut = "Logo Header Not Found";

    if (images) {
        const LogoHeaderData = ExtractImageInfo(images, "Logo-Header");
        if (LogoHeaderData) {
            urlImgLogoHeader = LogoHeaderData.urlImg;
            imgLogoHeaderAtribut = LogoHeaderData.imgAttribut;
        }
    }

    function logoutHandler(e) {
        const data = localStorage.getItem("name");
        const status = JSON.parse(data);
        status.logged = false;
        // console.log("status", data.logged);
        // setIsLogged(status.logged);
        localStorage.setItem("name", JSON.stringify(status));
        // localStorage.clear();
        window.location.reload();
    }

    const userStatus = useContext(LoggedStatusContext);
    console.log("Navigation :userStatus", userStatus);

    return (
        <>
            <div className="navigation-container">
                <div className="navigation-container__logo-container">
                    <Link to="/index">
                        <img
                            className="nav-logo"
                            src={urlImgLogoHeader}
                            alt={imgLogoHeaderAtribut}
                        />
                    </Link>
                </div>
                <input
                    type="text"
                    className="searchbar"
                    placeholder="Finde deine Metropole"
                />
                <ul className="nav-links">
                    {userStatus ? (
                        <>
                            <Link
                                to="/signup"
                                className="link"
                                onClick={logoutHandler}
                            >
                                Logout
                            </Link>
                        </>
                    ) : (
                        <>
                            <Link to="/login" className="link">
                                Login
                            </Link>
                            <Link to="/signup" className="link">
                                Signup
                            </Link>
                        </>
                    )}{" "}
                </ul>
            </div>
        </>
    );
}
