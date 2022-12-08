import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { client } from '../../ContentfulData/client.jsx';
import Card from '../../assets/card/index.jsx';

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

console.log(cardData);
  const cards = cardData.length > 0
    ? cardData.map((card) => (
        <Card
          cardsData={card.fields}
          key={card.sys.id}
        />
      ))
    : "";

  
  return (
    <div>
      <h1>start</h1>
      {/* <Card /> */}
    </div>

  )
}
