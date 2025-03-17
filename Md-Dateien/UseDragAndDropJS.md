Meine useDragAndDrop.js

```js
import { useState, useEffect } from "react";

const useDragAndDrop = (initialImages) => {
  // Zustand für Bilder
  const [images, setImages] = useState(initialImages || []);

  // Zustand für die Weiden mit den richtigen Tierarten
  const [weiden, setWeiden] = useState({
    weide1: [],
    weide2: [],
    weide3: [],
  });

  // Speichert das aktuell gezogene Tier
  const [draggedImage, setDraggedImage] = useState(null);

  // Funktion zum Starten des Draggings
  const handleDragStart = (event, image) => {
    event.dataTransfer.setData("imageId", image.id);
    setDraggedImage(image);
  };

  // Drop-Logik: Tier nur auf die richtige Weide setzen
  const handleDrop = (event, pastureId) => {
    event.preventDefault();
    const imageId = event.dataTransfer.getData("imageId");

    // Tier nach Typ prüfen und nur auf erlaubte Weide setzen
    const allowedWeide = {
      weide1: "Pferd",
      weide2: "Kuh",
      weide3: "Schwein",
    };

    const image = images.find((img) => img.id === parseInt(imageId));
    if (!image) return;

    if (allowedWeide[pastureId] === image.type) {
      setImages((prevImages) =>
        prevImages.map((img) =>
          img.id === parseInt(imageId) ? { ...img, pasture: pastureId } : img
        )
      );

      setWeiden((prev) => ({
        ...prev,
        [pastureId]: [...prev[pastureId], image],
      }));
    } else {
      setTimeout(() => {
        setImages((prevImages) =>
          prevImages.map((img) =>
            img.id === parseInt(imageId) ? { ...img, pasture: null } : img
          )
        );
      }, 2000);
    }

    setDraggedImage(null);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  return {
    images,
    weiden,
    handleDragStart,
    handleDrop,
    handleDragOver,
  };
};

export default useDragAndDrop;
```