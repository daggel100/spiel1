

import { useState } from "react";

// Mapping der Weiden zu den Tierarten
const weidenMapping = {
  "Weide 1": "Pferd",
  "Weide 2": "Kuh",
  "Weide 3": "Schwein",
};

// Standard-Tiere (für den Spielstart)
const initialCards = [
  { id: 1, type: "Pferd", name: "Rappe", src: "/assets/img/rappe.jpg", pasture: null },
  { id: 2, type: "Pferd", name: "Brauner", src: "/assets/img/brauner.jpg", pasture: null },
  { id: 3, type: "Pferd", name: "Schimmel", src: "/assets/img/schimmel.jpg", pasture: null },
  { id: 4, type: "Pferd", name: "Fuchs", src: "/assets/img/fuchs.jpg", pasture: null },
  { id: 5, type: "Pferd", name: "Palomino", src: "/assets/img/palomino.jpg", pasture: null },
  { id: 6, type: "Kuh", name: "Kuh", src: "/assets/img/kuh.jpg", pasture: null },
  { id: 7, type: "Schwein", name: "Schwein", src: "/assets/img/schwein.jpg", pasture: null }
];

const useDragAndDrop = (initialAnimals = initialCards) => {
  const [animals, setAnimals] = useState(initialAnimals);
  const [weiden, setWeiden] = useState({
    "Weide 1": [],
    "Weide 2": [],
    "Weide 3": [],
  });

  const handleDragStart = (e, animal) => {
    console.log("🚀 Ziehe Tier:", animal);
    e.dataTransfer.setData("animal", JSON.stringify(animal));
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, weideName) => {
    e.preventDefault();

    const animalData = JSON.parse(e.dataTransfer.getData("animal"));
    const erwarteteTierart = weidenMapping[weideName] || null;

    if (!erwarteteTierart) {
      console.error("❌ Ungültige Weide:", weideName);
      return;
    }

    if (animalData.type === erwarteteTierart) {
      console.log(`✅ ${animalData.name} erfolgreich auf ${weideName} abgelegt!`);
      setWeiden((prev) => ({
        ...prev,
        [weideName]: [...prev[weideName], animalData],
      }));

      setAnimals((prev) => prev.filter((a) => a.id !== animalData.id));
    } else {
      console.warn(`❌ ${animalData.name} gehört nicht auf ${weideName}!`);

      setWeiden((prev) => ({
        ...prev,
        [weideName]: [...prev[weideName], animalData],
      }));

      setTimeout(() => {
        setWeiden((prev) => ({
          ...prev,
          [weideName]: prev[weideName].filter((a) => a.id !== animalData.id),
        }));

        setAnimals((prev) => [...prev, animalData]);
      }, 1500);
    }
  };

  return { animals, weiden, handleDragStart, handleDrop, handleDragOver };
};

export default useDragAndDrop;








