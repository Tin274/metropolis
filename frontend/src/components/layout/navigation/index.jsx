import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../ContentfulData/ContentfulContext.jsx";
import { ExtractImageInfo } from "../../../Helper/imageHelper.jsx";
import "./navigation.css";

export default function Navigation() {
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
