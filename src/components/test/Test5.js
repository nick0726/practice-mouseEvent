import React, { useState, useRef } from "react";
import ControlElement from "../test5/ControlElement";
import CreateElement from "../test5/CreateElement";
const Test5 = () => {
  const [btnOn, setbtnOn] = useState(false);
  const [clickOn, setclickOn] = useState(false);
  const [centerX, setcenterX] = useState(null);
  const [centerY, setcenterY] = useState(null);
  const canvasRef = useRef();
  const onMouseDown = (e) => {
    console.log(e.pageX, e.pageY);
  };
  return (
    <div
      id="test5-container"
      style={{ position: "relative", width: "100%", height: "100%" }}
    >
      <div className="test5-box" style={{ display: "flex" }}>
        <div
          className="test5-menu"
          style={{
            border: "1px solid black",
            width: "100px",
            height: "800px",
            // position: "absolute",
            fontSize: "1.2rem",
            cursor: "pointer",
          }}
          onClick={(e) => {
            const canvas = canvasRef.current;
            const centerX =
              canvas.getBoundingClientRect().left + canvas.offsetWidth / 2;
            const centerY =
              canvas.getBoundingClientRect().top + canvas.offsetHeight / 2;
            setcenterX(centerX);
            setcenterY(centerY);
            setbtnOn(!btnOn);
          }}
        >
          <div
            className="test5-btn"
            style={{
              height: "2rem",
              backgroundColor: "skyblue",
              textAlign: "center",
              lineHeight: "2rem",
            }}
          >
            Add
          </div>
        </div>
        <div
          className="test5-canvas-box"
          style={{
            border: "1px solid red",
            width: "100%",
            height: "800px",
            // position: "absolute",
            top: "0",
          }}
          // onMouseDown={(e) => onMouseDown(e)}
        >
          <div
            className="test5-canvas"
            style={{
              width: "100%",
              height: "800px",
              position: "relative",
            }}
            ref={canvasRef}
          >
            {btnOn ? (
              <CreateElement centerX={centerX} centerY={centerY} />
            ) : null}
            {clickOn ? (
              <ControlElement centerX={centerX} centerY={centerY} />
            ) : null}
          </div>
        </div>
      </div>
      <div
        className="test5-footer"
        style={{
          border: "2px solid blue",
          width: "100%",
          height: "25%",
          position: "absolute",
          // bottom: "0",
        }}
      ></div>
    </div>
  );
};

export default Test5;
