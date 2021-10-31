import React, { useState } from "react";
import AddElement from "../components/rotate/AddElement";
const Rotate = () => {
  const addElement = (e) => {
    setAddBox(!addBox);
  };
  const [addBox, setAddBox] = useState(false);
  return (
    <div id="rotate-container">
      <div className="rotate_box rotate_top">
        <div className="rotate-menu menu">
          <button onClick={addElement}>Add</button>
        </div>
      </div>
      <div className="rotate_canvas">{addBox ? <AddElement /> : null}</div>
    </div>
  );
};

export default Rotate;
