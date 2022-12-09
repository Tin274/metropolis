import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { DataContext } from "../../ContentfulData/ContentfulContext.jsx";
import { ExtractImageInfo } from "../../../Helper/imageHelper.jsx";
export default function Navigation() {
    const { images } = useContext(DataContext);
    let urlImgLogoHeader,
        imgLogoHeaderAtribut = "Logo Header Not Found";
    let urlBackgrounImg,
        backgrounImgAttribut = "Background Image Not Found";

    if (images) {
        const LogoHeaderData = ExtractImageInfo(images, "Logo-Header");
        if (LogoHeaderData) {
            urlImgLogoHeader = LogoHeaderData.urlImg;
            imgLogoHeaderAtribut = LogoHeaderData.imgAttribut;
        }
        const backgrounImgdata = ExtractImageInfo(images, "BackgroundImage");
        if (backgrounImgdata) {
            urlBackgrounImg = backgrounImgdata.urlImg;
            backgrounImgAttribut = backgrounImgdata.imgAttribut;
        }
    }

    return (
        <div>
            <ul className="nav-links">
                <Link to="/index">
                    <img
                        src={urlImgLogoHeader}
                        alt={imgLogoHeaderAtribut}
                        width="80"
                    />
                </Link>
                <Link to="/index">Home </Link>
                <input type="text" placeholder="Suche Metropole..." />
                <Link to="/login">Login </Link>
                <Link to="/signup">Signup </Link>
            </ul>
            <div>
                <img
                    src={urlBackgrounImg}
                    id='bg-image'
                    alt={backgrounImgAttribut}
                    width="1000"
                    height="400"
                />
            </div>
        </div>
    );
}
