import { useState, useEffect } from "react";

const useDragAndDrop = (initialAnimals) => {
  const [animals, setAnimals] = useState(initialAnimals);
  const [draggedAnimal, setDraggedAnimal] = useState(null);

  const handleDragStart = (event, animal) => {
    setDraggedAnimal(animal);
  };

  const handleDrop = (event, pastureId) => {
    event.preventDefault();
    if (draggedAnimal) {
      setAnimals((prevAnimals) =>
        prevAnimals.map((a) =>
          a.id === draggedAnimal.id ? { ...a, pasture: pastureId } : a
        )
      );
      setDraggedAnimal(null);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    if (draggedAnimal && draggedAnimal.pasture !== draggedAnimal.correctPasture) {
      const timer = setTimeout(() => {
        setAnimals((prevAnimals) =>
          prevAnimals.map((a) =>
            a.id === draggedAnimal.id ? { ...a, pasture: null } : a
          )
        );
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [draggedAnimal]);

  return {
    animals,
    handleDragStart,
    handleDrop,
    handleDragOver,
  };
};

export default useDragAndDrop;
