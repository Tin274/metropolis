import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../ContentfulData/ContentfulContext.jsx";
import { ExtractImageInfo } from "../../../Helper/imageHelper.jsx";
import './card.css';

export default function Card({cardsData}) {
    console.log(cardsData)
    return (

        <div className="card-container">
            <img
                className="city-img"
                    src={cardsData[0].fields.stadtBild.fields.file.url}
                    alt="Bild von einer Stadt"
                  
            />
        
        </div>

    );
}