import React, { useState, useRef } from "react";

const Test4 = () => {
  const [clickOn, setClickOn] = useState(false);
  const [itemDeg, setItemDeg] = useState(null);
  const [baseDeg, setBaseDeg] = useState(null);

  const [xIndex, setXIndex] = useState(null);
  const [yIndex, setYIndex] = useState(null);

  const [centerX, setCenterX] = useState(null);
  const [centerY, setCenterY] = useState(null);

  const boxRef = useRef();
  const rotateRef = useRef();
  const containerRef = useRef();
  const onMouseDown = (e) => {
    const box = boxRef.current;
    const rotate = rotateRef.current;
    const container = containerRef.current;
    // const centerX = container.getBoundingClientRect().left;
    // const centerY = container.getBoundingClientRect().top;
    const centerX =
      container.getBoundingClientRect().left + container.offsetWidth / 2;
    const centerY =
      container.getBoundingClientRect().top + container.offsetHeight / 2;
    // console.log(centerX, centerY);
    setCenterX(centerX);
    setCenterY(centerY);
    setXIndex(e.pageX);
    setYIndex(e.pageY);
    // setBaseDeg(
    //   (Math.atan2(e.pageY - centerY, e.pageX - centerX) * 180) / Math.PI
    // );
    // setBaseDeg((Math.atan2(centerX, centerY) * 180) / Math.PI);
    // rotate.style.cursor = "col-resize";
    // console.log(baseDeg);

    setClickOn(true);

    // box.style.
  };
  const onMouseMove = (e) => {
    if (clickOn) {
      const box = boxRef.current;
      const container = containerRef.current;
      const positionX1 = xIndex - centerX;
      const positionY1 = yIndex - centerY;
      const positionX2 = e.pageX - centerX;
      const positionY2 = e.pageY - centerY;
      const deg1 = Math.floor(
        (Math.atan2(positionY1, positionX1) * 180) / Math.PI
      );
      const deg2 = Math.floor(
        (Math.atan2(positionY2, positionX2) * 180) / Math.PI
      );
      const degree = deg2 - deg1;
      // _container.style.transform = `rotate(${degree}deg)`;
      // box.style.transform = `rotate(${degree}deg)`;
    }
  };
  const onMouseUp = (e) => {
    const box = boxRef.current;
    // console.log(e.pageX, e.pageY);
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
      <div
        ref={containerRef}
        className="rotate-container"
        onMouseDown={onMouseDown}
        // onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        // onMouseOver={onMouseOver}
        // onMouseOut={onMouseOut}
      >
        <div id="box" ref={boxRef}>
          box
        </div>
        {/* <div
          ref={rotateRef}
          className="rotate-button"
          onMouseDown={onMouseDown}
        >
          R
        </div> */}
      </div>
    </div>
  );
};

export default Test4;
