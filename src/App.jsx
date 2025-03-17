
// import './App.css'

// import { useState } from 'react';
// import Cards from './components/Cards';
// import Weiden from './components/Weiden';

// function App() {


//   return (
//     <>
//       <h1>Mein Spiel</h1>

//       {/* <Weiden />
//       <Cards /> */}
//       <Weiden animals={animals} setAnimals={setAnimals} />
//       <Cards animals={animals} setAnimals={setAnimals} />
      
//     </>
//   )
// }

// export default App

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
