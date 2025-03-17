So ungefähr. Per Drag & Drop auf die Weide ziehen und dort platzieren. Ist es die richtige Weide, dann bleiben sie drin. Ist sie nicht richtig, dann soll ein Timer ca. 2 Sekunden runter zählen und das Pferd oder später auch Kuh und Schwein aus die Weide rauswerfen. Mittels "Fußtritt" oder "Fausthiep" oder so. Damit wir uns die Seite jetzt nicht wieder total kaputt machen, möchte ich diese Funktionen in exter Dateien schreiben, damit man die dann auch woanders verwenden kann. Den Timer können wir dan später in die Cards einfügen.

Das klingt nach einem guten Plan! Wir können das Drag-and-Drop-Handling und den Timer in separate Dateien auslagern. Ich würde vorschlagen, die Struktur so aufzubauen:

1. DragDropContext.jsx → Enthält die gesamte Logik für das Drag-and-Drop-System.
2. useTimer.js → Ein Hook für den Timer (z. B. useTimer), der nach 2 Sekunden das Tier aus der falschen Weide entfernt.
3. Weiden.jsx → Beinhaltet die Weiden und überprüft, ob ein Tier dort bleiben darf.
4. Cards.jsx → Beinhaltet die Karten und stellt die Bilder dar.

Für Drag&Drop das installieren: npm install @hello-pangea/dnd

1. Drag & Drop mit Variante: HTML5 Drag & Drop mit externer Datei

Verzeichnisstruktur:
/projektordner
│── index.html
│── style.css
│── dragdrop.js  <-- Hier kommt der Code rein


index.html

```html
<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Drag & Drop</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <div id="dragElement" draggable="true">Zieh mich!</div>
    <div id="dropZone">Zieh es hierher</div>

    <script src="dragdrop.js"></script>
</body>
</html>
```

style.css (optional)

```css
#dragElement {
    width: 100px;
    height: 100px;
    background-color: blue;
    color: white;
    text-align: center;
    line-height: 100px;
    cursor: grab;
}

#dropZone {
    width: 200px;
    height: 200px;
    border: 2px dashed black;
    text-align: center;
    line-height: 200px;
    margin-top: 20px;
}
```
Mit dragdrop.js

```js
document.addEventListener("DOMContentLoaded", () => {
    const dragElement = document.getElementById("dragElement");
    const dropZone = document.getElementById("dropZone");

    dragElement.addEventListener("dragstart", (event) => {
        event.dataTransfer.setData("text", event.target.id);
        event.target.style.opacity = "0.5";
    });

    dragElement.addEventListener("dragend", (event) => {
        event.target.style.opacity = "1";
    });

    dropZone.addEventListener("dragover", (event) => {
        event.preventDefault();
    });

    dropZone.addEventListener("drop", (event) => {
        event.preventDefault();
        const data = event.dataTransfer.getData("text");
        const draggedElement = document.getElementById(data);
        dropZone.appendChild(draggedElement);
    });
});


2. Variante mit mousedown + mausemove (ohne HTML5 API)

index.html

``hrml
<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Drag & Drop ohne HTML5</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <div id="box"></div>

    <script src="dragdrop.js"></script>
</body>
</html>
```

style.css

```css
#box {
    width: 100px;
    height: 100px;
    background-color: red;
    position: absolute;
    top: 50px;
    left: 50px;
    cursor: grab;
}
```

dragdrop.js

```js
document.addEventListener("DOMContentLoaded", () => {
    const box = document.getElementById("box");
    let offsetX, offsetY, isDragging = false;

    box.addEventListener("mousedown", (event) => {
        isDragging = true;
        offsetX = event.clientX - box.offsetLeft;
        offsetY = event.clientY - box.offsetTop;
        box.style.cursor = "grabbing";
    });

    document.addEventListener("mousemove", (event) => {
        if (!isDragging) return;
        box.style.left = event.clientX - offsetX + "px";
        box.style.top = event.clientY - offsetY + "px";
    });

    document.addEventListener("mouseup", () => {
        isDragging = false;
        box.style.cursor = "grab";
    });
});
```

So soll es funktionieren

Verzeichnisstruktur (Vite + React)

/src
│── App.jsx
│── components
│   ├── DraggableItem.jsx  <-- Drag & Drop Logik
│── styles.css

App.jsx

```jsx
import DraggableItem from "./components/DraggableItem";
import "./styles.css";

function App() {
  return (
    <div className="app-container">
      <h1>Drag & Drop mit React (ohne Libs)</h1>
      <DraggableItem />
    </div>
  );
}

export default App;
```

DraggableItem.jsx

```jsx
import { useState, useRef } from "react";

const DraggableItem = () => {
  const itemRef = useRef(null);
  const [dragging, setDragging] = useState(false);
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const offset = useRef({ x: 0, y: 0 });

  // Mousedown: Startet das Ziehen
  const handleMouseDown = (event) => {
    setDragging(true);
    offset.current = {
      x: event.clientX - position.x,
      y: event.clientY - position.y,
    };
  };

  // Mousemove: Bewegt das Element
  const handleMouseMove = (event) => {
    if (!dragging) return;
    setPosition({
      x: event.clientX - offset.current.x,
      y: event.clientY - offset.current.y,
    });
  };

  // Mouseup: Beendet das Ziehen
  const handleMouseUp = () => {
    setDragging(false);
  };

  return (
    <div
      ref={itemRef}
      className="draggable-item"
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      Zieh mich!
    </div>
  );
};

export default DraggableItem;
```

style.css

```css
.app-container {
  text-align: center;
  font-family: Arial, sans-serif;
}

.draggable-item {
  width: 100px;
  height: 100px;
  background-color: red;
  position: absolute;
  cursor: grab;
  border-radius: 10px;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  user-select: none;
}
```





