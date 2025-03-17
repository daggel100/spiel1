export function setupDragAndDrop() {
    let draggedElement = null;
    let offsetX = 0;
    let offsetY = 0;
  
    document.addEventListener("mousedown", (event) => {
      const target = event.target.closest(".card"); // Nur Karten sind draggable
      if (!target) return;
  
      draggedElement = target;
      offsetX = event.clientX - target.getBoundingClientRect().left;
      offsetY = event.clientY - target.getBoundingClientRect().top;
  
      draggedElement.style.position = "absolute";
      draggedElement.style.zIndex = 1000;
      document.body.appendChild(draggedElement);
  
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseUp);
    });
  
    function onMouseMove(event) {
      if (!draggedElement) return;
      draggedElement.style.left = `${event.clientX - offsetX}px`;
      draggedElement.style.top = `${event.clientY - offsetY}px`;
    }
  
    function onMouseUp(event) {
      if (!draggedElement) return;
  
      const weide = document.elementFromPoint(event.clientX, event.clientY)?.closest(".weide");
      if (weide) {
        weide.appendChild(draggedElement);
      } else {
        draggedElement.style.position = "";
        draggedElement.style.zIndex = "";
      }
  
      draggedElement = null;
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    }
  }