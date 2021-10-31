import React from "react";

const Resize = () => {
  const addElement = (e) => {};
  return (
    <div id="resize-container">
      <div className="resize_box resize_top">
        <div className="resize-menu menu">
          <button onClick={() => addElement()}>Add</button>
        </div>
        <div className="resize_resize"></div>
      </div>
    </div>
  );
};
export default Resize;
