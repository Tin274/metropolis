import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../ContentfulData/ContentfulContext.jsx";
import { ExtractImageInfo } from "../../../Helper/imageHelper.jsx";
import "./card.css";

export default function Card({ cardsData }) {
    const [favorit, setFavorit] = useState([]);
    function favoritHandler() {
        console.log("Favorit ", cardsData.stadtName);
        setFavorit((prev) => [...prev, cardsData.stadtName]);
        console.log("Favorit array ", favorit);
    }
    return (
        <div className="card-container">
            <Link to={`/index/${cardsData.stadtName}`} className="city-link">
                <img
                    className="city-img"
                    src={cardsData.stadtBild.fields.file.url}
                    alt={cardsData.stadtBild.fields.title}
                />
            </Link>

            <div className="title-heart">
                <Link to={`/index/${cardsData.stadtName}`}>
                    <h2 className="city-name">{cardsData.stadtName}</h2>
                </Link>

                <a onClick={favoritHandler}>
                    <svg
                        className="heart"
                        fill="#fff"
                        stroke="var(--pink)"
                        height="30px"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                            clipRule="evenodd"
                        />
                    </svg>
                </a>
            </div>
        </div>
    );
}
