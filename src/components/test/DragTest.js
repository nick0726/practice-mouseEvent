import React, { useRef } from "react";

const DragTest = () => {
  const ballRef = useRef();
  const mouseDown = (e) => {
    const ball = ballRef.current;
    ball.style.position = "absolute";
    console.log(e.nativeEvent);
    // console.log(e.nativeEvent.screenX, e.nativeEvent.screenY);
    // console.log(e.nativeEvent.clientX, e.nativeEvent.clientY);
    // console.log(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    // console.log(ball.offsetX, ball.offsetY);
    // console.log(ball.offsetWidth);
    // console.log(ball.offsetHeight);
    // console.log(e.nativeEvent.pageX - ball.offsetWidth);

    // console.log(e.nativeEvent.pageY);
    // console.log(e.nativeEvent.y);
    // console.log(e.nativeEvent.offsetY);
    // console.log(e.target);

    // ball.style.top = e.nativeEvent.pageY + "px";
    // ball.style.top = 154 + "px";
    // console.log(ball.style)
    // console.log(ball.style.height, ball.style.width);
    ball.style.height = "150px";
    ball.style.width = "150px";
    ball.style.borderRadius = "150px";
  };
  const mouseMove = (e) => {
    const ball = ballRef.current;
    // let shiftX = e.clientX - ball.getBoundingClientRect().left;
    // let shiftY = e.clientY - ball.getBoundingClientRect().top;
    // ball.style.left = e.nativeEvent.pageX - ball.offsetWidth / 2 + "px";
    // ball.style.top = e.nativeEvent.pageY - ball.offsetHeight / 2 + "px";
    // ball.style.left = e.nativeEvent.pageX + "px";
    // ball.style.top = e.nativeEvent.pageY + "px";
  };
  const mouseUp = (e) => {
    const ball = ballRef.current;
    // ball.removeEventListener("onMouseMove", mouseMove);
  };
  return (
    <div id="test-container">
      <div
        id="ball"
        onMouseDown={mouseDown}
        onMouseMove={mouseMove}
        onMouseUp={mouseUp}
        ref={ballRef}
      ></div>
    </div>
  );
};

export default DragTest;
