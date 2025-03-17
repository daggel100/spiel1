Meine Weiden.jsx

```jsx
import "./Weiden.css";

const Weiden = ({ weiden, handleDrop, handleDragOver }) => {
  return (
    <div className="weiden-container">
      <h2>Weiden</h2>
      <div className="weiden-grid">
        {Object.keys(weiden).map((weideId) => (
          <div
            key={weideId}
            className="weide"
            id={weideId}
            onDrop={(e) => handleDrop(e, weideId)}
            onDragOver={handleDragOver}
          >
            <h3>{weideId}</h3>
            <div className="weide-content">
              {weiden[weideId].map((img) => (
                <div key={img.id} className="card">
                  <img src={img.src} alt={img.type} width="200" />
                  <p>{img.type}</p>
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
```

Die Weiden.css

```css
.weiden-grid {
    display: flex;
    flex-wrap: wrap; /* Falls kein Platz, umbrechen */
    justify-content: center; /* Falls eine Weide in die nächste Zeile rutscht, soll sie mittig sein */
    align-items: flex-start; /* Oben ausrichten */
    gap: 20px; /* Abstand zwischen den Weiden */
    width: 100%; /* Die volle Breite der roten Box */
    max-width: 1400px; /* Damit es nicht zu breit wird */
    margin: 0 auto; /* Zentriert die rote Box */
    padding: 20px; /* Etwas Innenabstand */
    border: 2px solid red; /* TEST: Damit du die rote Box sehen kannst */
    box-sizing: border-box;
  }
  
  .weide {
    flex: 1 1 30%; /* Basisgröße: 30%, kann schrumpfen oder wachsen */
    min-width: 300px; /* Mindestbreite */
    max-width: 400px; /* Maximalbreite, damit sie sich nicht zu stark ausdehnen */
    height: 400px;
    background-color: #2e2e2e;
    border: 2px dashed #fff;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px;
    box-sizing: border-box;
  }
  ```