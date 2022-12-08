import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { getCity } from "../../../Helper/cityHelper.jsx";
import { DataContext } from "../../ContentfulData/ContentfulContext.jsx";

export default function Detail() {
    const { cardData } = useContext(DataContext);
    const cityParam = useParams();
    const idFromURL = cityParam.id;
    console.log("cityParam", cityParam);
    console.log("idFromURL", idFromURL);
    let selectedCity;
    if (cardData) {
        console.log("cardData **Detail : ", cardData);
        selectedCity = getCity(cardData, idFromURL);
    }
    let urlImg, stadtName, stadtBeschreibung, land, sprache, whrung, sehenswert;

    if (selectedCity) {
        console.log("selectedCity", selectedCity);
        urlImg = selectedCity[0].fields.stadtBild.fields.file.url;
        stadtName = selectedCity[0].fields.stadtName;
        land = selectedCity[0].fields.land;
        sprache = selectedCity[0].fields.sprache;
        whrung = selectedCity[0].fields.whrung;
        sehenswert = selectedCity[0].fields.sehenswert;
    }

    return (
        <div>
            <img src={urlImg} alt={stadtName} />
            <h1>
                {stadtName}, {land}
            </h1>
            <p>
                <strong> Sprache: </strong>
                {sprache}
            </p>
            <p>
                <strong> Währung: </strong>
                {whrung}
            </p>
            <p>
                <strong> Sehenswert: </strong>
                {sehenswert}
            </p>
        </div>
    );
}
