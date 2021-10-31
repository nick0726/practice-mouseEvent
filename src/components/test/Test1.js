import React, { useState, useRef } from "react";

const Test1 = () => {
  const [clickOn, setClickOn] = useState(false);
  const ballRef = useRef();
  const onMouseDown = (e) => {
    const ball = ballRef.current;
    ball.style.position = "absolute";
    setClickOn(true);
  };
  const onMouseMove = (e) => {
    const ball = ballRef.current;
    if (clickOn) {
      ball.style.left = e.nativeEvent.pageX - ball.offsetWidth / 2 + "px";
      ball.style.top = e.nativeEvent.pageY - ball.offsetHeight / 2 + "px";
    }
  };
  const onMouseUp = (e) => {
    const ball = ballRef.current;
    setClickOn(false);
  };
  const onMouseOver = (e) => {
    const ball = ballRef.current;
    ball.style.borderStyle = "dashed";
    ball.style.cursor = "grab";
  };
  const onMouseOut = (e) => {
    const ball = ballRef.current;
    ball.style.borderStyle = "";
  };
  return (
    <div id="container">
      <div
        id="ball"
        ref={ballRef}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseOver={onMouseOver}
        onMouseOut={onMouseOut}
      >
        ball
      </div>
    </div>
  );
};

export default Test1;
