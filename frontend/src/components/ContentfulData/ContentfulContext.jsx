import React, { useState, useEffect, children } from "react";
import { client } from "./client.jsx";

export const DataContext = React.createContext();

export default function ContentfulContext(props) {
    const [images, setImages] = useState();
    const [cardData, setCardData] = useState();
    const [imagesIsLoading, setImagesIsLoading] = useState(false);
    const [cardDataisLoading, setCardDataIsLoading] = useState(false);

    function ImagesLoadOfContentful() {
        setImagesIsLoading(true);
        client
            .getEntries({ content_type: "images" })
            .then((response) => {
                setImages(response.items);
            })
            .catch((err) => console.log(err));

        setImagesIsLoading(false);
    }

    function cardDataLoadOfContentful() {
        setCardDataIsLoading(true);
        client
            .getEntries({ content_type: "card" })
            .then((response) => {
                setCardData(response.items);
            })
            .catch((err) => console.log(err));

        setCardDataIsLoading(false);
    }

    useEffect(() => {
        ImagesLoadOfContentful();
        cardDataLoadOfContentful();
    }, []);

    if (imagesIsLoading || cardDataisLoading) {
        return (
            <>
                <p> isLoading</p>
            </>
        );
    }

    return (
        <DataContext.Provider value={{ images, cardData }}>
            {props.children}
        </DataContext.Provider>
    );
}
