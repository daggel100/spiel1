Funktionierende Cards.jsx

```jsx
import { useState, useEffect } from "react";
import "./Cards.css";

// Pferdebilder importieren
import rappe from "../assets/img/rappe.jpg";
import brauner from "../assets/img/brauner.jpg";
import schimmel from "../assets/img/schimmel.jpg";
import fuchs from "../assets/img/fuchs.jpg";
import palomino from "../assets/img/palomino.jpg";

// // Platzhalter für Kühe und Schweine (später ersetzen, wenn Bilder da sind)
// const kuhImg = "/img/kuh.png";
// const schweinImg = "/img/schwein.png";

// Funktion zum Mischen der Karten
const shuffleArray = (array) => {
  return array.sort(() => Math.random() - 0.5);
};

// Startkarten definieren
// const initialCards = shuffleArray ([
//   { id: 1, type: "Rappe", src: rappe },
//   { id: 2, type: "Brauner", src: brauner },
//   { id: 3, type: "Schimmel", src: schimmel },
//   { id: 4, type: "Fuchs", src: fuchs },
//   { id: 5, type: "Palomino", src: palomino },

  // { id: 6, type: "Kuh", src: kuhImg },
  // { id: 7, type: "Kuh", src: kuhImg },
  // { id: 8, type: "Kuh", src: kuhImg },

  // { id: 9, type: "Schwein", src: schweinImg },
  // { id: 10, type: "Schwein", src: schweinImg },
  // { id: 11, type: "Schwein", src: schweinImg },
// ]).filter((card) => card.src && card.src.trim() !== " ");

const Cards = ({animals, handleDragStart }) => {
  const [cards, setCards] = useState([]);

  // useEffect(() => {
  //   // Karten mischen und setzen
  //   setCards(shuffleArray(initialCards));
  // }, []);
  // useEffect(() => {
  //   setCards(shuffleArray(animals)); // Hier `images` statt `initialCards`
  // }, [animals]);
  // console.log(cards);

  // useEffect(() => {
  //   console.log("Neue Karten erhalten: ", animals);
  //   setCards(animals); 
  // }, [animals]);
  
  // useEffect(() => {
  //   console.log("Neue Karten erhalten: ", animals);
  //   if (animals.length > 0) {
  //     setCards(animals);
  //   }
  // }, [animals]);

  // useEffect(() => {
  //   console.log("Neue Karten erhalten: ", animals);
  //   if (animals.length > 0) {
  //     setCards(shuffleArray([...animals])); // Wichtig: Array kopieren mit [...animals], um Sortierprobleme zu vermeiden!
  //   }
  // }, [animals]);

  useEffect(() => {
    console.log("Neue Karten erhalten: ", animals);
    if (animals.length > 0) {
      setCards([...animals]); 
      console.log("Aktueller Karten-Array im State:", animals);
    }
  }, [animals]);

  console.log("Cards.jsx - Erhaltene Tiere:", animals);

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

{/* {cards
  .filter((img) => img.src && img.src.trim() !== "") // Leere Karten herausfiltern
  .map((img) => (
    <div key={img.id} className="card" draggable onDragStart={(e) => handleDragStart(e, img)}>
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

Die Cards.css dazu

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

Funktionierende App.jsx

```jsx
import "./App.css";
import Cards from "./components/Cards";
import Weiden from "./components/Weiden";
import useDragAndDrop from "./hooks/useDragAndDrop.jsx";

import rappe from "./assets/img/rappe.jpg";        
import brauner from "./assets/img/brauner.jpg";
import schimmel from "./assets/img/schimmel.jpg";
import fuchs from "./assets/img/fuchs.jpg";
import palomino from "./assets/img/palomino.jpg";


// function App() {
//   const { animals, weiden, handleDragStart, handleDrop, handleDragOver } = useDragAndDrop([
//     { id: 1, type: "Pferd", src: "assets/img/pferd.jpg", pasture: null },
//     { id: 2, type: "Kuh", src: "assets/img/kuh.jpg", pasture: null },
//     { id: 3, type: "Schwein", src: "assets/img/schwein.jpg", pasture: null },
//   ]);

function App() {
  const { animals, weiden, handleDragStart, handleDrop, handleDragOver } = useDragAndDrop([
    { id: 1, type: "Pferd", src: rappe, pasture: null },
    { id: 2, type: "Pferd", src: brauner, pasture: null },
    { id: 3, type: "Pferd", src: schimmel, pasture: null },
    { id: 4, type: "Pferd", src: fuchs, pasture: null },
    { id: 5, type: "Pferd", src: palomino, pasture: null },
  ]);

  return (
    <>
      <h1>Mein Spiel</h1>
      {/* <Weiden weiden={weiden} handleDrop={handleDrop} handleDragOver={handleDragOver} />
      <Cards images={animals} handleDragStart={handleDragStart} /> */}

<Weiden animals={animals} weiden={weiden} handleDrop={handleDrop} handleDragOver={handleDragOver} />
<Cards animals={animals} handleDragStart={handleDragStart} />
    </>
  );
}

export default App;
```

Funktionierende Weiden.jsx

```jsx
import "./Weiden.css";
import useDragAndDrop from "../hooks/useDragAndDrop.jsx"; // Hook importieren

const weidenMapping = {
  "Weide 1": "Pferd",
  "Weide 2": "Kuh",
  "Weide 3": "Schwein",
};

const Weiden = () => {
  const { weiden, handleDrop, handleDragOver } = useDragAndDrop();

  return (
    <div className="weiden-container">
      <h2>Weiden</h2>
      <div className="weiden-grid">
        {Object.keys(weidenMapping).map((weideName) => {
          const weideId = weidenMapping[weideName]; // Interne Zuordnung

          return (
            <div
              key={weideName} // Jetzt mit neuem Namen
              className="weide"
              id={weideId}
              onDrop={(e) => handleDrop(e, weideId)}
              onDragOver={handleDragOver}
            >
              <h3>{weideName}</h3> {/* Zeigt "Weide 1", "Weide 2", "Weide 3" an */}
              <div className="weide-content">
                {weiden[weideId]?.map((animal) => (
                  <div key={animal.id} className="card">
                    <img src={animal.src} alt={animal.type} width="200" />
                    <p>{animal.type}</p>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Weiden;
```

Die Wieden.css dazu

```css

  .weiden-container {
    padding: 20px;
  }
  
  .weiden-grid {
    display: flex;
    gap: 20px; /* Abstand zwischen den Weiden */
    justify-content: center;
  }
  
  .weide {
    border: 2px solid #ccc;
    padding: 10px;
    width: 300px;
    min-height: 300px;
    background-color: #f4f4f4;
  }
  
  .weide-content {
    display: flex;
    flex-wrap: wrap; /* Erlaubt Umbruch in eine neue Reihe */
    gap: 10px; /* Abstand zwischen den Karten */
    justify-content: flex-start; /* Links ausrichten */
  }
  
  .card {
    width: 100px; /* Breite der Karte */
    text-align: center;
  }
  ```

  Funktionierende useDragAndDrop.jsx

  ```jsx
  import { useState } from "react";

// Standard-Tiere (für den Spielstart)
const initialCards = [
  { id: 1, type: "Rappe", src: "/img/rappe.jpg", pasture: null },
  { id: 2, type: "Brauner", src: "/img/brauner.jpg", pasture: null },
  { id: 3, type: "Schimmel", src: "/img/schimmel.jpg", pasture: null },
  { id: 4, type: "Fuchs", src: "/img/fuchs.jpg", pasture: null },
  { id: 5, type: "Palomino", src: "/img/palomino.jpg", pasture: null },
  { id: 6, type: "Kuh", src: "/img/kuh.jpg", pasture: null },
  { id: 7, type: "Schwein", src: "/img/schwein.jpg", pasture: null }
];

const useDragAndDrop = (initialAnimals = initialCards) => {
  const [animals, setAnimals] = useState(initialAnimals);
  const [weiden, setWeiden] = useState({ Pferd: [], Kuh: [], Schwein: [] });

  const handleDragStart = (e, animal) => {
    e.dataTransfer.setData("animal", JSON.stringify(animal));
  };

  const handleDragOver = (e) => {
    e.preventDefault(); // Erlaubt das Ablegen der Tiere
  };

  const handleDrop = (e, weideType) => {
    e.preventDefault();
    const animalData = JSON.parse(e.dataTransfer.getData("animal"));

    // Überprüfe, ob das Tier zur richtigen Weide gehört
    if (animalData.type === weideType) {
      // Tier zur Weide hinzufügen
      setWeiden((prev) => ({
        ...prev,
        [weideType]: [...prev[weideType], animalData],
      }));

      // Aktualisiere den Status von "animals", indem das Tier der Weide zugewiesen wird
      setAnimals((prev) =>
        prev.map((a) =>
          a.id === animalData.id ? { ...a, pasture: weideType } : a
        )
      );
    } else {
      // Tier zurückgeben, wenn es nicht zur richtigen Weide gehört
      setTimeout(() => {
        setAnimals((prev) => [...prev, animalData]);
      }, 1500);
    }
  };

  return { animals, weiden, handleDragStart, handleDrop, handleDragOver };
};

export default useDragAndDrop;
```