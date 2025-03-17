
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


