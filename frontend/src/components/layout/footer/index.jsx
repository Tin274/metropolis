import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../ContentfulData/ContentfulContext.jsx";
import { ExtractImageInfo } from "../../../Helper/imageHelper.jsx";
import './footer.css';

export default function Footer() {
    const { images } = useContext(DataContext);
    let urlImgLogoFooter,
        imgLogoFooterAtribut = "Logo Footer Not Found";
    if (images) {
        const LogoFooterData = ExtractImageInfo(images, "Logo-Footer");
        if (LogoFooterData) {
            urlImgLogoFooter = LogoFooterData.urlImg;
            imgLogoFooterAtribut = LogoFooterData.imgAttribut;
        }
    }

    return (
        <div className="footer">
            <Link to="/index">
                <img
                    className="logo"
                    src={urlImgLogoFooter}
                    alt={imgLogoFooterAtribut}
                />
            </Link>
            <ul className="footer-nav">
                <li>Datenschutz</li>
                <li>impressum</li>
                <li>Kontakt</li>
            </ul>
        </div>
    );
}
