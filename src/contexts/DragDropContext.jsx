import { createContext, useState } from "react";

const DragDropContext = createContext(); // Ohne "export"

export const DragDropProvider = ({ children }) => {
  const [weiden, setWeiden] = useState({
    gruen: [],
    sonnig: [],
    wild: [],
  });

  const moveAnimal = (source, destination) => {
    if (!destination) return;

    setWeiden((prev) => {
      const newWeiden = { ...prev };
      const animal = source.draggableId;

      const erlaubteWeide = {
        Pferd: "gruen",
        Kuh: "sonnig",
        Schwein: "wild",
      };

      if (erlaubteWeide[animal] === destination.droppableId) {
        newWeiden[destination.droppableId].push(animal);
      } else {
        setTimeout(() => {
          setWeiden((prevState) => ({
            ...prevState,
            [destination.droppableId]: prevState[destination.droppableId].filter(
              (t) => t !== animal
            ),
          }));
        }, 2000);
      }

      return newWeiden;
    });
  };

  return (
    <DragDropContext.Provider value={{ weiden, moveAnimal }}>
      {children}
    </DragDropContext.Provider>
  );
};

// Jetzt hier den Context exportieren
export { DragDropContext };