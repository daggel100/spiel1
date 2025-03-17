
import { useState, useEffect } from "react";
import "./Cards.css";
import useDragAndDrop from "../hooks/useDragAndDrop"; // Korrekte Schreibweise

const Cards = () => {
  const [images, setImages] = useState([]);
  const { handleDragStart } = useDragAndDrop(); // Hook-Funktion aufrufen

  useEffect(() => {
    // Automatisches Einlesen aller Bilder aus dem Ordner
    const imagePaths = import.meta.glob("../assets/img/*.{jpg,png}");

    // Umwandlung in ein nutzbares Array
    const imageArray = Object.keys(imagePaths).map((path) => ({
      src: path.replace("../assets", "/src/assets"), // Korrekte URL
      type: path.includes("kuh") ? "Kuh" : path.includes("schwein") ? "Schwein" : "Pferd",
    }));

    setImages(imageArray);
  }, []);

  return (
    <div>
      <h2>Cards</h2>
      <div className="gallery">
        {images.map((img, index) => (
          <div 
            key={index} 
            className="card"
            draggable // Wichtig für Drag & Drop
            onDragStart={(e) => handleDragStart(e, img.type)} // Drag-Event übergeben
          >
            <img src={img.src} alt={`${img.type} ${index + 1}`} width="200" />
            <p>{img.type}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;