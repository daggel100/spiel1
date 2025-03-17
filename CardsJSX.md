Mein Cards.jsx

```jsx
import { useState, useEffect } from "react";
import "./Cards.css";

// Pferdebilder importieren
import rappe from "../assets/img/rappe.jpg";
import brauner from "../assets/img/brauner.jpg";
import schimmel from "../assets/img/schimmel.jpg";
import fuchs from "../assets/img/fuchs.jpg";
import palomino from "../assets/img/palomino.jpg";

// Platzhalter für Kühe und Schweine (später ersetzen, wenn Bilder da sind)
const kuhImg = "/img/kuh.png";
const schweinImg = "/img/schwein.png";

// Funktion zum Mischen der Karten
const shuffleArray = (array) => {
  return array.sort(() => Math.random() - 0.5);
};

// Startkarten definieren
const initialCards = shuffleArray ([
  { id: 1, type: "Rappe", src: rappe },
  { id: 2, type: "Brauner", src: brauner },
  { id: 3, type: "Schimmel", src: schimmel },
  { id: 4, type: "Fuchs", src: fuchs },
  { id: 5, type: "Palomino", src: palomino },

  // { id: 6, type: "Kuh", src: kuhImg },
  // { id: 7, type: "Kuh", src: kuhImg },
  // { id: 8, type: "Kuh", src: kuhImg },

  // { id: 9, type: "Schwein", src: schweinImg },
  // { id: 10, type: "Schwein", src: schweinImg },
  // { id: 11, type: "Schwein", src: schweinImg },
]).filter((card) => card.src && card.src.trim() !== " ");

const Cards = ({ handleDragStart }) => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    // Karten mischen und setzen
    setCards(shuffleArray(initialCards));
  }, []);

  return (
    <div>
      <h2>Cards</h2>
      {/* <div className="gallery">
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
      </div> */}

<div className="gallery">
  {/* {cards
    .filter((img) => img.src) // Nur Karten mit Bild rendern
    .map((img) => (
      <div
        key={img.id}
        className="card"
        draggable
        onDragStart={(e) => handleDragStart(e, img)}
      >
        <img src={img.src} alt={img.type} width="100" />
        <p>{img.type}</p>
      </div>
    ))} */}

{cards
  .filter((img) => img.src && img.src.trim() !== "") // Leere Karten herausfiltern
  .map((img) => (
    <div key={img.id} className="card" draggable onDragStart={(e) => handleDragStart(e, img)}>
      <img src={img.src} alt={img.type} width="100" />
      <p>{img.type}</p>
    </div>
  ))}
</div>

    </div>
  );
};

export default Cards;
```

Und Cards.css

```css
.gallery {
    display: flex;
    flex-wrap: wrap; /* Damit es sich bei kleinen Bildschirmen umbricht */
    /* justify-content: center; */
    gap: 20px; /* Abstand zwischen den Karten */
    justify-content: center; /* Karten zentrieren */
    padding: 20px;
    /* background-color: red; */
    margin-bottom: 40px;   /* Führ mehr Abstand nach unten*/
  }
  
  .card {
    background: white;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    padding: 10px;
    text-align: center;
    align-items: center;
    flex-direction: column;
    transition: transform 0.2s ease-in-out;
    width: 100px;
    height: 100px;
  }
  
  .card:hover {
    transform: scale(1.1); /* Kleine Vergrößerung beim Hover */
  }
  
  .card img {
    display: block;
    max-width: 100%;
    height: auto;
    border-radius: 5px;
  }
  
  .card p {
    font-weight: bold;
    margin-top: 5px;
    font-size: 1rem;
    color: #ddd
  }

  /* Leere Karten ausblenden */
.card:empty {
  display: none;
}
```