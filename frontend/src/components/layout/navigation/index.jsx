import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../ContentfulData/ContentfulContext.jsx";
import { ExtractImageInfo } from "../../../Helper/imageHelper.jsx";
import "./navigation.css";
import { useState } from "react";

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
        // e.prevent.default();

        const data = localStorage.getItem("name");
        const status = JSON.parse(data);
        status.logged = false;
        // console.log("status", data.logged);
        // setIsLogged(status.logged);
        localStorage.setItem("name", JSON.stringify(status));
    }

    const data = localStorage.getItem("name");
    if (data) {
        const status = JSON.parse(data).logged;
        console.log("::::", status);
        // setIsLogged(status);
        if (status) {
            return (
                <>
                    <div className="navigation-container">
                        <Link to="/index">
                            <img
                                className="nav-logo"
                                src={urlImgLogoHeader}
                                alt={imgLogoHeaderAtribut}
                            />
                        </Link>
                        <input
                            type="text"
                            className="searchbar"
                            placeholder="Finde deine Metropole"
                        />
                        <ul className="nav-links">
                            <Link to="/logout" className="link">
                                <button onClick={logoutHandler}> Logout</button>
                            </Link>
                            <Link to="/signup" className="link">
                                Signup
                            </Link>
                        </ul>
                    </div>
                </>
            );
        }
    }

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
                    <Link to="/login" className="link">
                        Login
                    </Link>
                    <Link to="/signup" className="link">
                        Signup
                    </Link>
                </ul>
            </div>
        </>
    );
}
