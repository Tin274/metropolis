import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { client } from '../../ContentfulData/client.jsx';
import Card from '../../assets/card/index.jsx';
import './start.css';

export default function Home() {

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

  const cards = cardData.length > 0
    ? cardData.map((card) => 
        <Card
          cardsData={card.fields}
          key={card.sys.id}
        />
      )
    : "";

  
  return (
    <div className="home-container">
      <h1 className="headline">Setze deine Lieblingsmetropolen auf deine Bucketlist</h1>
      <div className="cards-container">
        { cards }
      </div>
    </div>

  )
}
