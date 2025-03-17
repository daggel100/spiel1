import { useState } from "react";

const useDragAndDrop = () => {
  const [weiden, setWeiden] = useState({
    weide1: [],
    weide2: [],
    weide3: [],
  });

  const handleDragStart = (event, type) => {
    event.dataTransfer.setData("animalType", type);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const animalType = event.dataTransfer.getData("animalType");
    const weideId = event.target.closest(".weide")?.id;

    if (!weideId) return;

    // Tierart validieren
    const allowedWeide = {
      weide1: "Pferd",
      weide2: "Kuh",
      weide3: "Schwein",
    };
    

    if (allowedWeide[weideId] === animalType) {
      setWeiden((prev) => ({
        ...prev,
        [weideId]: [...prev[weideId], animalType],
      }));
    }
  };

  return { weiden, handleDragStart, handleDragOver, handleDrop };
};

export default useDragAndDrop;
