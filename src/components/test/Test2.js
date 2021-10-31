import React, { useState, useRef } from "react";

const Test2 = () => {
  const [clickOn, setClickOn] = useState(false);
  const boxRef = useRef();
  const onMouseDown = (e) => {
    const box = e.target;
    // box.style.position = "absolute";
    setClickOn(true);
  };
  const onMouseMove = (e) => {
    const box = boxRef.current;
    if (clickOn) {
      // box.style.width = e.nativeEvent.pageX + "px";
      // box.style.height = e.nativeEvent.pageY + "px";
      box.style.width = e.nativeEvent.pageX - box.offsetWidth / 2 + "px";
      box.style.height = e.nativeEvent.pageY - box.offsetHeight / 2 + "px";
    }
  };
  const onMouseUp = (e) => {
    const box = boxRef.current;
    setClickOn(false);
  };
  const onMouseOver = (e) => {
    const box = boxRef.current;
    box.style.borderStyle = "dashed";
    box.style.cursor = "";
  };
  const onMouseOut = (e) => {
    const box = boxRef.current;
    box.style.borderStyle = "";
  };
  return (
    <div id="container" onMouseMove={onMouseMove} onMouseUp={onMouseUp}>
      <div>
        <div
          id="box"
          ref={boxRef}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseOver={onMouseOver}
          onMouseOut={onMouseOut}
        >
          box
        </div>
      </div>
    </div>
  );
};

export default Test2;
