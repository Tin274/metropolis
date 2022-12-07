import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { DataContext } from "../../ContentfulData/ContentfulContext.jsx";
import { ExtractImageInfo } from "../../../Helper/imageHelper.jsx";

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
        <div>
            <Link to="/index">
                <img
                    src={urlImgLogoFooter}
                    alt={imgLogoFooterAtribut}
                    width="80"
                />
            </Link>
            Footer
        </div>
    );
}
