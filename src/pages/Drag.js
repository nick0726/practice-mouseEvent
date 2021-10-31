import React, { useState, useRef } from "react";
import CreateBox from "../components/CreateBox";
const Drag = () => {
  const canvasRef = useRef();
  const [addBall, setAddBall] = useState(false);
  return (
    <div id="createBox_container">
      <div className="createBox_box">
        <div className="createBox_menu">
          <button onClick={() => setAddBall(!addBall)}>Add Ball</button>
        </div>
        <div className="createBox_canvas" ref={canvasRef}>
          {addBall ? <CreateBox canvas={canvasRef.current} /> : null}
        </div>
      </div>
    </div>
  );
};

export default Drag;
