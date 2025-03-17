// import "./Weiden.css";
// import useDragAndDrop from "../hooks/useDragAndDrop.jsx"; // Hook importieren

// const Weiden = ({ animals, setAnimals }) => {
//   // const { handleDrop, handleDragOver } = useDragAndDrop(animals, setAnimals); // Hook mit Props aufrufen

//   const { weiden, handleDrop, handleDragOver } = useDragAndDrop();

//   return (
//     <div className="weiden-container">
//       <h2>Weiden</h2>
//       <div className="weiden-grid">
//         {["weide1", "weide2", "weide3"].map((weideId) => (
//           <div
//             key={weideId}
//             className="weide"
//             id={weideId}
//             onDrop={(e) => handleDrop(e, weideId)}
//             onDragOver={handleDragOver}
//           >
//             <h3>{weideId}</h3>
//             <div className="weide-content">
//               {/* {animals
//                 .filter((animal) => animal.pasture === weideId)
//                 .map((animal) => ( */}
//               {weiden[weideId]?.map((animal) => ( 
//                   <div key={animal.id} className="card">
//                     <img src={animal.src} alt={animal.type} width="200" />
//                     <p>{animal.type}</p>
//                   </div>
//                 ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Weiden;

// import "./Weiden.css";
// import useDragAndDrop from "../hooks/useDragAndDrop.jsx"; // Hook importieren

// const Weiden = () => {
//   const { weiden, handleDrop, handleDragOver } = useDragAndDrop();

//   return (
//     <div className="weiden-container">
//       <h2>Weiden</h2>
//       <div className="weiden-grid">
//         {["Pferd", "Kuh", "Schwein"].map((weideId) => (
//           <div
//             key={weideId}
//             className="weide"
//             id={weideId}
//             onDrop={(e) => handleDrop(e, weideId)}
//             onDragOver={handleDragOver}
//           >
//             <h3>{weideId}</h3>
//             <div className="weide-content">
//               {weiden[weideId]?.map((animal) => (
//                 <div key={animal.id} className="card">
//                   <img src={animal.src} alt={animal.type} width="100" />
//                   <p>{animal.type}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Weiden;


// import "./Weiden.css";
// import useDragAndDrop from "../hooks/useDragAndDrop.jsx"; // Hook importieren

// const Weiden = () => {
//   const { weiden, handleDrop, handleDragOver } = useDragAndDrop();

//   return (
//     <div className="weiden-container">
//       <h2>Weiden</h2>
//       <div className="weiden-grid">
//         {["Pferd", "Kuh", "Schwein"].map((weideId) => (
//           <div
//             key={weideId}
//             className="weide"
//             id={weideId}
//             onDrop={(e) => handleDrop(e, weideId)}
//             onDragOver={handleDragOver}
//           >
//             <h3>{weideId}</h3>
//             <div className="weide-content">
//               {weiden[weideId]?.map((animal) => (
//                 <div key={animal.id} className="card">
//                   <img src={animal.src} alt={animal.type} width="150" />
//                   <p>{animal.type}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Weiden;


// import "./Weiden.css";
// import useDragAndDrop from "../hooks/useDragAndDrop.jsx"; // Hook importieren

// const weidenMapping = {
//   "Weide 1": "Pferd",
//   "Weide 2": "Kuh",
//   "Weide 3": "Schwein",
// };

// const Weiden = () => {
//   const { weiden, handleDrop, handleDragOver } = useDragAndDrop();

  

//   return (
//     <div className="weiden-container">
//       <h2>Weiden</h2>
//       <div className="weiden-grid">
//         {["Pferd", "Kuh", "Schwein"].map((weideId) => (
//           <div
//             key={weideId}
//             className="weide"
//             id={weideId}
//             onDrop={(e) => handleDrop(e, weideId)}
//             onDragOver={handleDragOver}
//           >
//             <h3>{weideId}</h3>
//             <div className="weide-content">
//               {weiden[weideId]?.map((animal) => (
//                 <div key={animal.id} className="card">
//                   <img src={animal.src} alt={animal.type} width="200" />
//                   <p>{animal.type}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Weiden;


// import "./Weiden.css";
// import useDragAndDrop from "../hooks/useDragAndDrop.jsx"; // Hook importieren

// // const weidenMapping = {
// //   "Weide 1": "Pferd",
// //   "Weide 2": "Kuh",
// //   "Weide 3": "Schwein",
// // };

// // Mapping der Weiden zu den Tierarten
// const weidenMapping = {
//   "Weide 1": "Pferd",
//   "Weide 2": "Kuh",
//   "Weide 3": "Schwein",
// };

// const Weiden = () => {
//   const { weiden, handleDrop, handleDragOver } = useDragAndDrop();

//   return (
//     <div className="weiden-container">
//       <h2>Weiden</h2>
//       <div className="weiden-grid">
//         {Object.keys(weidenMapping).map((weideName) => {
//           const weideId = weidenMapping[weideName]; // Interne Zuordnung

//           return (
//             <div
//               key={weideName} // Jetzt mit neuem Namen
//               className="weide"
//               id={weideId}
//               onDrop={(e) => handleDrop(e, weideId)}
//               onDragOver={handleDragOver}
//             >
//               <h3>{weideName}</h3> {/* Zeigt "Weide 1", "Weide 2", "Weide 3" an */}
//               <div className="weide-content">
//                 {weiden[weideId]?.map((animal) => (
//                   <div key={animal.id} className="card">
//                     <img src={animal.src} alt={animal.type} width="200" />
//                     <p>{animal.type}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default Weiden;


// import "./Weiden.css";
// import useDragAndDrop from "../hooks/useDragAndDrop.jsx"; // Hook importieren

// // Mapping der Weiden zu den Tierarten
// const weidenMapping = {
//   "Weide 1": "Pferd",
//   "Weide 2": "Kuh",
//   "Weide 3": "Schwein",
// };

// const Weiden = () => {
//   const { weiden, handleDrop, handleDragOver } = useDragAndDrop();

//   return (
//     <div className="weiden-container">
//       <h2>Weiden</h2>
//       <div className="weiden-grid">
//         {Object.keys(weidenMapping).map((weideName) => {
//           return (
//             <div
//               key={weideName}
//               className="weide"
//               id={weideName}
//               onDrop={(e) => handleDrop(e, weideName)} // Hier bleibt der Weiden-Name erhalten
//               onDragOver={handleDragOver}
//             >
//               <h3>{weideName}</h3> {/* Zeigt "Weide 1", "Weide 2", "Weide 3" an */}
//               <div className="weide-content">
//                 {weiden[weideName]?.map((animal) => (
//                   <div key={animal.id} className="card">
//                     <img src={animal.src} alt={animal.type} width="200" />
//                     <p>{animal.type}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default Weiden;


import "./Weiden.css";
import useDragAndDrop from "../hooks/useDragAndDrop.jsx"; // Hook importieren

// Mapping der Weiden zu den Tierarten
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
        {Object.keys(weidenMapping).map((weideName) => (
          <div
            key={weideName}
            className="weide"
            id={weideName}
            onDrop={(e) => handleDrop(e, weideName)}
            onDragOver={handleDragOver}
          >
            <h3>{weideName}</h3>
            <div className="weide-content">
              {weiden[weideName]?.map((animal) => (
                <div key={animal.id} className="card">
                  <img src={animal.src} alt={animal.type} width="200" />
                  <p>{animal.type}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Weiden;


