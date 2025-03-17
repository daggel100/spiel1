// import { useEffect } from "react";
// import "./Cards.css";
// import useDragAndDrop from "../hooks/useDragAndDrop"; // Hook importieren

// const Cards = ({ animals, setAnimals }) => {
//   const { handleDragStart } = useDragAndDrop(animals, setAnimals); // Hook mit Props aufrufen

//   useEffect(() => {
    // Automatisches Einlesen aller Bilder aus dem Ordner
//     const imagePaths = import.meta.glob("../assets/img/*.{jpg,png}");

//     const imageArray = Object.keys(imagePaths).map((path, index) => ({
//       id: index, // Eindeutige ID für jedes Tier
//       src: path.replace("../assets", "/src/assets"),
//       type: path.includes("kuh") ? "Kuh" : path.includes("schwein") ? "Schwein" : "Pferd",
//       pasture: null, // Noch nicht zugewiesen
//       correctPasture: path.includes("kuh") ? "weide2" : path.includes("schwein") ? "weide3" : "weide1",
//     }));

//     setAnimals(imageArray);
//   }, [setAnimals]);

//   return (
//     <div>
//       <h2>Cards</h2>
//       <div className="gallery">
//         {animals.map((animal) => (
//           <div
//             key={animal.id}
//             className="card"
//             draggable
//             onDragStart={(e) => handleDragStart(e, animal)}
//           >
//             <img src={animal.src} alt={`${animal.type}`} width="200" />
//             <p>{animal.type}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Cards;


// import "./Cards.css";

// const Cards = ({ images, handleDragStart }) => {
//   return (
//     <div>
//       <h2>Cards</h2>
//       <div className="gallery">
//         {images
//           .filter((img) => img.pasture === null)
//           .map((img) => (
//             <div
//               key={img.id}
//               className="card"
//               draggable
//               onDragStart={(e) => handleDragStart(e, img)}
//             >
//               <img src={img.src} alt={`${img.type}`} width="200" />
//               <p>{img.type}</p>
//             </div>
//           ))}
//           {console.log("Images in Cards:", images)};
          
//       </div>
//     </div>
//   );
// };

// export default Cards;

// import { useState, useEffect } from "react";
// import "./Cards.css";

// const Cards = ({ images, handleDragStart }) => {
//   // State für die Karten
//   const [cards, setCards] = useState([]);

//   // useEffect lädt die Bilder, wenn `images` sich ändert
//   useEffect(() => {
//     if (images && images.length > 0) {
//       setCards(images.filter((img) => img.pasture === null));
//     }
//   }, [images]);

//   return (
//     <div>
//       <h2>Cards</h2>
//       <div className="gallery">
//         {cards.length > 0 ? (
//           cards.map((img) => (
//             <div
//               key={img.id}
//               className="card"
//               draggable
//               onDragStart={(e) => handleDragStart(e, img)}
//             >
//               <img src={img.src} alt={img.type} width="200" />
//               <p>{img.type}</p>
//             </div>
//           ))
//         ) : (
//           <p>Keine Karten verfügbar</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Cards;

// import { useState, useEffect } from "react";
// import "./Cards.css";

// import "/public/img/rappe.jpg";
// import "/public/img/schimmel.jpg";
// import "/public/img/fuchs.jpg";
// import "/public/img/brauner.jpg";
// import "/public/img/palomino.jpg";

// const Cards = ({ images, handleDragStart }) => {
//   const [cards, setCards] = useState([]);

//   useEffect(() => {
//     if (images && images.length > 0) {
//       setCards(images.filter((img) => img.pasture === null));
//     }
//   }, [images]);

//   return (
//     <div>
//       <h2>Cards</h2>
//       <div className="gallery">
//         {cards.length > 0 ? (
//           cards.map((img) => (
//             <div
//               key={img.id}
//               className="card"
//               draggable
//               onDragStart={(e) => handleDragStart(e, img)}
//             >
//               {/* <img src={`/public/img/${img.src}`} alt={img.type} width="100" /> */}
//               <img src={`/img/${img.src}`} alt={`${img.type}`} width="200" />
//               <p>{img.type}</p>
//             </div>
//           ))
//         ) : (
//           <p>Keine Karten verfügbar</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Cards;


// import { useState, useEffect } from "react";
// import "./Cards.css";

// Pferdebilder aus src/assets/img importieren
// import rappe from "../assets/img/rappe.jpg";
// import brauner from "../assets/img/brauner.jpg";
// import schimmel from "../assets/img/schimmel.jpg";
// import fuchs from "../assets/img/fuchs.jpg";
// import palomino from "../assets/img/palomino.jpg";

// Platzhalter für Kühe und Schweine (ersetze später mit echten Bildern)
// const kuhImg = "/img/kuh.png";
// const schweinImg = "/img/schwein.png";

// Karten mitwachsen lassen: 6x Pferd, 6x Kuh, 6x Schwein
// const initialCards = [
//   { id: 1, type: "Pferd", src: rappe, pasture: null },
//   { id: 2, type: "Pferd", src: brauner, pasture: null },
//   { id: 3, type: "Pferd", src: schimmel, pasture: null },
//   { id: 4, type: "Pferd", src: fuchs, pasture: null },
//   { id: 5, type: "Pferd", src: palomino, pasture: null },
//   { id: 6, type: "Pferd", src: rappe, pasture: null }, // Extra Pferd

//   { id: 7, type: "Kuh", src: kuhImg, pasture: null },
//   { id: 8, type: "Kuh", src: kuhImg, pasture: null },
//   { id: 9, type: "Kuh", src: kuhImg, pasture: null },
//   { id: 10, type: "Kuh", src: kuhImg, pasture: null },
//   { id: 11, type: "Kuh", src: kuhImg, pasture: null },
//   { id: 12, type: "Kuh", src: kuhImg, pasture: null },

//   { id: 13, type: "Schwein", src: schweinImg, pasture: null },
//   { id: 14, type: "Schwein", src: schweinImg, pasture: null },
//   { id: 15, type: "Schwein", src: schweinImg, pasture: null },
//   { id: 16, type: "Schwein", src: schweinImg, pasture: null },
//   { id: 17, type: "Schwein", src: schweinImg, pasture: null },
//   { id: 18, type: "Schwein", src: schweinImg, pasture: null },
// ];

// const Cards = ({ handleDragStart }) => {
//   const [cards, setCards] = useState([]);

//   useEffect(() => {
//     setCards(initialCards.filter((img) => img.pasture === null));
//   }, []);

//   return (
//     <div>
//       <h2>Cards</h2>
//       <div className="gallery">
//         {cards.length > 0 ? (
//           cards.map((img) => (
//             <div
//               key={img.id}
//               className="card"
//               draggable
//               onDragStart={(e) => handleDragStart(e, img)}
//             >
//               <img src={img.src} alt={img.type} width="200" />
//               <p>{img.type}</p>
//             </div>
//           ))
//         ) : (
//           <p>Keine Karten verfügbar</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Cards;

// import { useState, useEffect } from "react";
// import "./Cards.css";

// Pferdebilder importieren
// import rappe from "../assets/img/rappe.jpg";
// import brauner from "../assets/img/brauner.jpg";
// import schimmel from "../assets/img/schimmel.jpg";
// import fuchs from "../assets/img/fuchs.jpg";
// import palomino from "../assets/img/palomino.jpg";

// Platzhalter für Kühe und Schweine
// const kuhImg = "/img/kuh.png";
// const schweinImg = "/img/schwein.png";

// Karten mit 6x Pferd (ohne doppelten Rappen), 6x Kuh, 6x Schwein
// const initialCards = [
//   { id: 1, type: "Pferd", src: rappe, pasture: null },
//   { id: 2, type: "Pferd", src: brauner, pasture: null },
//   { id: 3, type: "Pferd", src: schimmel, pasture: null },
//   { id: 4, type: "Pferd", src: fuchs, pasture: null },
//   { id: 5, type: "Pferd", src: palomino, pasture: null },
//   { id: 6, type: "Pferd", src: schimmel, pasture: null }, // Ersatz für doppelten Rappen

//   { id: 7, type: "Kuh", src: kuhImg, pasture: null },
//   { id: 8, type: "Kuh", src: kuhImg, pasture: null },
//   { id: 9, type: "Kuh", src: kuhImg, pasture: null },
//   { id: 10, type: "Kuh", src: kuhImg, pasture: null },
//   { id: 11, type: "Kuh", src: kuhImg, pasture: null },
//   { id: 12, type: "Kuh", src: kuhImg, pasture: null },

//   { id: 13, type: "Schwein", src: schweinImg, pasture: null },
//   { id: 14, type: "Schwein", src: schweinImg, pasture: null },
//   { id: 15, type: "Schwein", src: schweinImg, pasture: null },
//   { id: 16, type: "Schwein", src: schweinImg, pasture: null },
//   { id: 17, type: "Schwein", src: schweinImg, pasture: null },
//   { id: 18, type: "Schwein", src: schweinImg, pasture: null },
// ];

// const Cards = ({ handleDragStart }) => {
//   const [cards, setCards] = useState([]);

//   useEffect(() => {
//     setCards(initialCards.filter((img) => img.pasture === null));
//   }, []);

//   return (
//     <div>
//       <h2>Cards</h2>
//       <div className="gallery">
//         {cards.length > 0 ? (
//           cards.map((img) => (
//             <div
//               key={img.id}
//               className="card"
//               draggable
//               onDragStart={(e) => handleDragStart(e, img)}
//             >
//               <img src={img.src} alt={img.type} width="200" />
//               <p>{img.type}</p>
//             </div>
//           ))
//         ) : (
//           <p>Keine Karten verfügbar</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Cards;


// import { useState, useEffect } from "react";
// import "./Cards.css";

// // Pferdebilder importieren
// import rappe from "../assets/img/rappe.jpg";
// import brauner from "../assets/img/brauner.jpg";
// import schimmel from "../assets/img/schimmel.jpg";
// import fuchs from "../assets/img/fuchs.jpg";
// import palomino from "../assets/img/palomino.jpg";

// // Platzhalter für Kühe und Schweine (später ersetzen, wenn Bilder da sind)
// const kuhImg = "/img/kuh.png";
// const schweinImg = "/img/schwein.png";

// Funktion zum Mischen der Karten
// const shuffleArray = (array) => {
//   return array.sort(() => Math.random() - 0.5);
// };

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

// const Cards = ({animals, handleDragStart }) => {
//   const [cards, setCards] = useState([]);

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

//   useEffect(() => {
//     console.log("Neue Karten erhalten: ", animals);
//     if (animals.length > 0) {
//       setCards([...animals]); 
//       console.log("Aktueller Karten-Array im State:", animals);
//     }
//   }, [animals]);

//   console.log("Cards.jsx - Erhaltene Tiere:", animals);

//   return (
//     <div>
//       <h2>Cards</h2>
//       {/* <div className="gallery">
//         {cards.map((img) => (
//           <div
//             key={img.id}
//             className="card"
//             draggable
//             onDragStart={(e) => handleDragStart(e, img)}
//           >
//             <img src={img.src} alt={img.type} width="100" />
//             <p>{img.type}</p>
//           </div>
//         ))}
//       </div> */}

// <div className="gallery">
//   {/* {cards
//     .filter((img) => img.src) // Nur Karten mit Bild rendern
//     .map((img) => (
//       <div
//         key={img.id}
//         className="card"
//         draggable
//         onDragStart={(e) => handleDragStart(e, img)}
//       >
//         <img src={img.src} alt={img.type} width="100" />
//         <p>{img.type}</p>
//       </div>
//     ))} */}

// {/* {cards
//   .filter((img) => img.src && img.src.trim() !== "") // Leere Karten herausfiltern
//   .map((img) => (
//     <div key={img.id} className="card" draggable onDragStart={(e) => handleDragStart(e, img)}>
//       <img src={img.src} alt={img.type} width="100" />
//       <p>{img.type}</p>
//     </div>
//   ))} */}

// {cards
//   .filter((img) => img.src && img.src.trim() !== "") // Leere Karten herausfiltern
//   .map((img) => (
//     <div key={img.id} className="card" draggable onDragStart={(e) => handleDragStart(e, img)}>
//       <img src={img.src} alt={img.type} width="100" />
//       <p>{img.type}</p>
//     </div>
//   ))}
 
  
// </div>

//     </div>
//   );
// };

// export default Cards;



// import { useState, useEffect } from "react";
// import "./Cards.css";

// const Cards = ({ animals, handleDragStart }) => {
//   const [cards, setCards] = useState([]);

//   useEffect(() => {
//     console.log("Neue Karten erhalten: ", animals);
//     if (animals.length > 0) {
//       setCards([...animals]);
//     }
//   }, [animals]);

//   return (
//     <div>
//       <h2>Cards</h2>
//       <div className="gallery">
//         {cards
//           .filter((img) => img.src && img.src.trim() !== "") // Leere Karten herausfiltern
//           .map((img) => (
//             <div
//               key={img.id}
//               className="card"
//               draggable
//               onDragStart={(e) => handleDragStart(e, img)}
//             >
//               <img src={img.src} alt={img.type} width="100" />
//               <p>{img.type}</p>
//             </div>
//           ))}
//       </div>
//     </div>
//   );
// };

// export default Cards;


// import { useState, useEffect } from "react";
// import "./Cards.css";

// const Cards = ({ animals, weiden, handleDragStart }) => {
//   const [cards, setCards] = useState([]);

//   useEffect(() => {
//     console.log("Neue Karten erhalten: ", animals);
//     const belegteTiere = Object.values(weiden).flat(); // Alle Tiere in den Weiden sammeln
//     const verfügbareTiere = animals.filter(
//       (tier) => !belegteTiere.some((t) => t.id === tier.id) // Nur Tiere nehmen, die noch nicht in einer Weide sind
//     );
//     setCards(verfügbareTiere);
//   }, [animals, weiden]);

//   return (
//     <div>
//       <h2>Cards</h2>
//       <div className="gallery">
//         {cards
//           .filter((img) => img.src && img.src.trim() !== "") // Leere Karten herausfiltern
//           .map((img) => (
//             <div
//               key={img.id}
//               className="card"
//               draggable
//               onDragStart={(e) => handleDragStart(e, img)}
//             >
//               <img src={img.src} alt={img.type} width="100" />
//               <p>{img.type}</p>
//             </div>
//           ))}
//       </div>
//     </div>
//   );
// };

// export default Cards;


// import { useState, useEffect } from "react";
// import "./Cards.css";

// const Cards = ({ animals, weiden = {}, handleDragStart }) => { // 🛠 Default-Wert für weiden setzen
//   const [cards, setCards] = useState([]);

//   useEffect(() => {
//     console.log("Neue Karten erhalten: ", animals);
//     console.log("Weiden-Inhalt: ", weiden); // Debugging

//     const belegteTiere = Object.values(weiden || {}).flat(); // Falls weiden undefined ist, leeres Objekt nutzen
//     const verfügbareTiere = animals.filter(
//       (tier) => !belegteTiere.some((t) => t.id === tier.id)
//     );

//     setCards(verfügbareTiere);
//   }, [animals, weiden]);

//   return (
//     <div>
//       <h2>Cards</h2>
//       <div className="gallery">
//         {cards
//           .filter((img) => img.src && img.src.trim() !== "") // Leere Karten herausfiltern
//           .map((img) => (
//             <div
//               key={img.id}
//               className="card"
//               draggable
//               onDragStart={(e) => handleDragStart(e, img)}
//             >
//               <img src={img.src} alt={img.type} width="100" />
//               <p>{img.type}</p>
//             </div>
//           ))}
//       </div>
//     </div>
//   );
// };

// export default Cards;

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



