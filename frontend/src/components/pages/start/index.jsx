import React, { useContext } from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { client } from "../../ContentfulData/client.jsx";

import { DataContext } from "../../ContentfulData/ContentfulContext.jsx";
import { ExtractImageInfo } from "../../../Helper/imageHelper.jsx";

import Card from "../../assets/card/index.jsx";
import "./start.css";
import "../../layout/navigation/navigation.css";

export default function Home() {
    const { images } = useContext(DataContext);

    const [cardData, setCardData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        client
            .getEntries({
                content_type: "card",
            })
            .then((response) => {
                setCardData(response.items);
                setIsLoading(false);
            })
            .catch((err) => console.log(err));
    }, []);
    let urlBackgrounImg,
        backgrounImgAttribut = "Background Image Not Found";
    if (images) {
        const backgrounImgdata = ExtractImageInfo(images, "BackgroundImage");
        if (backgrounImgdata) {
            urlBackgrounImg = backgrounImgdata.urlImg;
            backgrounImgAttribut = backgrounImgdata.imgAttribut;
        }
    }
    const cards =
        cardData.length > 0
            ? cardData.map((card) => (
                  <Card cardsData={card.fields} key={card.sys.id} />
              ))
            : "";

    return (
        <>
            <img
                className="header-image"
                src={urlBackgrounImg}
                alt={backgrounImgAttribut}
            />
            <div className="home-container">
                <h1 className="headline">
                    Setze deine Lieblingsmetropolen auf deine Bucketlist
                </h1>
                <div className="cards-container">{cards}</div>
            </div>
        </>
    );
}
