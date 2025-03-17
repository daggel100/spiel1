

import { useState, useEffect } from "react";
import "./Cards.css";

const Cards = ({ animals, weiden = {}, handleDragStart }) => {
  const [cards, setCards] = useState(animals);

  useEffect(() => {
    console.log("Neue Karten erhalten: ", animals);
    console.log("Weiden-Inhalt: ", weiden);

    // Hole alle Tiere, die in den Weiden sind
    const belegteTiere = Object.values(weiden || {}).flat();
    
    // Filtere nur die Tiere heraus, die noch nicht auf einer Weide sind
    const verfügbareTiere = animals.filter(
      (tier) => !belegteTiere.some((t) => t.id === tier.id)
    );

    // Prüfen, ob sich die Karten wirklich ändern, bevor wir `setCards` aufrufen
    if (JSON.stringify(cards) !== JSON.stringify(verfügbareTiere)) {
      setCards(verfügbareTiere);
    }
  }, [animals, weiden]); // Nur aktualisieren, wenn `animals` oder `weiden` sich ändern

  return (
    <div>
      <h2>Cards</h2>
      <div className="gallery">
        {cards.map((img) => (
          <div
            key={img.id}
            className="card"
            draggable
            onDragStart={(e) => handleDragStart(e, img)}
          >
            <img src={img.src} alt={img.type} width="100" />
            <p>{img.type}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;



