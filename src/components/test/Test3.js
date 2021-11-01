import React, { useState, useRef } from "react";

const Test3 = () => {
  const [clickOn, setClickOn] = useState(false);
  const [xIndex, setXIndex] = useState(null);
  const [yIndex, setYIndex] = useState(null);
  const [itemWidth, setItemWidth] = useState(null);
  const [itemHeight, setItemHeight] = useState(null);
  const boxRef = useRef();
  const onMouseDown = (e) => {
    const box = boxRef.current;
    // box.style.position = "absolute";
    setXIndex(e.pageX);
    setYIndex(e.pageY);
    setItemWidth(box.offsetWidth);
    setItemHeight(box.offsetHeight);
    setClickOn(true);
  };
  const onMouseMove = (e) => {
    const box = boxRef.current;
    if (clickOn) {
      box.style.width = e.pageX - xIndex + (itemWidth / 2) * 2 + "px";
      box.style.height = e.pageY - yIndex + itemHeight + "px";
    }
  };
  const onMouseUp = (e) => {
    const box = boxRef.current;
    console.log(e.pageX - xIndex);
    console.log(e.pageY - yIndex);

    setClickOn(false);
  };
  const onMouseOver = (e) => {
    const box = boxRef.current;
    box.style.borderStyle = "dashed";
    box.style.cursor = "move";
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

export default Test3;
