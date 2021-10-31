import React, { useState, useRef } from "react";

const Test4 = () => {
  const [clickOn, setClickOn] = useState(false);
  const [xIndex, setXIndex] = useState(null);
  const [yIndex, setYIndex] = useState(null);
  const [itemDeg, setItemDeg] = useState(null);
  const [currentDeg, setCurrentDeg] = useState(null);

  const boxRef = useRef();
  const onMouseDown = (e) => {
    const box = e.target;
    setCurrentDeg((Math.atan2(e.pageY, e.pageX) * 180) / Math.PI);
    setClickOn(true);
    // box.style.
  };
  const onMouseMove = (e) => {
    const box = boxRef.current;
    if (clickOn) {
      const deg = (Math.atan2(e.pageY, e.pageX) * 180) / Math.PI;

      box.style.transform = `rotate(${deg - currentDeg}deg)`;
      //   box.style.width = e.nativeEvent.pageX - box.offsetWidth / 2 + "px";
      //   box.style.height = e.nativeEvent.pageY - box.offsetHeight / 2 + "px";
    }
  };
  const onMouseUp = (e) => {
    // const box = boxRef.current;
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

export default Test4;
