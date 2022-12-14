import React, { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import { getCity } from "../../../Helper/cityHelper.jsx";
import { DataContext } from "../../ContentfulData/ContentfulContext.jsx";

import HeartIcon from "../../assets/HeartIcon.jsx";
import Map from "../../assets/map/Map.jsx";

import "/node_modules/flag-icons/css/flag-icons.min.css";
import "./detail.css";

export default function Detail() {
    const { cardData } = useContext(DataContext);
    const cityParam = useParams();
    const idFromURL = cityParam.id;
    const [isActive, setIsActive] = useState(false);



    let selectedCity;
    if (cardData) {
        selectedCity = getCity(cardData, idFromURL);
    }

    let urlImg,
        stadtName,
        classnameFlag,
        stadtBeschreibung,
        land,
        sprache,
        whrung,
        sehenswert,
        location;

    if (selectedCity) {
        urlImg = selectedCity[0].fields.stadtBild.fields.file.url;
        stadtName = selectedCity[0].fields.stadtName;
        land = selectedCity[0].fields.land;
        classnameFlag = `fi fi-${selectedCity[0].fields.flag}`;

        stadtBeschreibung = selectedCity[0].fields.stadtBeschreibung;

        sprache = selectedCity[0].fields.sprache;
        whrung = selectedCity[0].fields.whrung;
        sehenswert = selectedCity[0].fields.sehenswert;

        location = selectedCity[0].fields.location;
    }

   const handleClick = (event) =>{

        setIsActive(current => !current);
    };


    return (
        <div className="detailPage-container">
            <img className="city-image " src={urlImg} alt={stadtName} />
            <div className="content-container">
                <div className="link-container">
                    <p>
                        <Link to="/index">Startseite </Link>&raquo;
                        <span> </span>
                        <Link to={`/index/${stadtName}`}>
                            {stadtName}, {land}
                        </Link>
                    </p>
                    <Link to="/index">&laquo; zur??ck</Link>
                </div>

                <span className={classnameFlag}></span>
                <div className="title-container">
                    <h1>
                        {stadtName}, {land}
                    </h1> 
                    <button 
                    className={isActive ? 'bg-pink' : ''} 
                    onClick={handleClick} >
                    <HeartIcon className={isActive ? 'bg-pink' : ''} 
                    onClick={handleClick} ></HeartIcon>
                    </button>
                </div>
                <div className="descp">
                    {documentToReactComponents(stadtBeschreibung)}
                </div>
                <p>
                    <strong> Sprache: </strong>
                    {sprache}
                </p>
                <p>
                    <strong> W??hrung: </strong>
                    {whrung}
                </p>
                <p>
                    <strong> Sehenswert: </strong>
                    {sehenswert}
                </p>
                <div>
                    {location ? (
                        <Map
                            stadtName={stadtName}
                            land={land}
                            location={location}
                        />
                    ) : (
                        <p> Map nicht gefunden</p>
                    )}
                </div>
            </div>
        </div>
    );
}
