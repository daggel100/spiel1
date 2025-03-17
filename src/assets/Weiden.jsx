import "./Weiden.css";

// Einbinden des Hooks
import useDragAndDrop from "../hooks/useDragAndDrop";

const Weiden = () => {

  const { handleDrop, handleDragOver } = useDragAndDrop();

  return (
    <div className="weiden-container">
      <h2>Weiden</h2>
      <div className="weiden-grid">
        <div className="weide" id="weide1" onDrop={handleDrop} onDragOver={handleDragOver}>
          <h3>Weide 1</h3>
        </div>
        <div className="weide" id="weide2" onDrop={handleDrop} onDragOver={handleDragOver}>
          <h3>Weide 2</h3>
        </div>
        <div className="weide" id="weide3" onDrop={handleDrop} onDragOver={handleDragOver}>
          <h3>Weide 3</h3>
        </div>
      </div>
    </div>
  )
}
export default Weiden