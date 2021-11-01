import React, { useState, useRef } from "react";

const CreateElement = ({ centerX, centerY }) => {
  const [clickOn, setClickOn] = useState(false);
  const [rotateClick, setRotateClick] = useState([]);
  const [centerPos, setCenterPos] = useState([]);
  const [deg, setDeg] = useState(0);
  const elementRef = useRef();
  const onMousedown = (e) => {
    const element = elementRef.current;
    const elementData = element.getBoundingClientRect();
    const cX = elementData.left + elementData.width / 2;
    const cY = elementData.top + elementData.height / 2;
    setCenterPos([cX, cY]);
    setRotateClick([e.pageX, e.pageY]);
    setClickOn(true);
  };
  const onMouseMove = (e) => {
    if (clickOn) {
      const element = elementRef.current;
      // const positionX1 = rotateClick[0] - centerX;
      // const positionY1 = rotateClick[1] - centerY;
      const positionX1 = rotateClick[0] - centerPos[0];
      const positionY1 = rotateClick[1] - centerPos[1];
      // const positionX2 = e.pageX - centerX;
      // const positionY2 = e.pageY - centerY;
      const positionX2 = e.pageX - centerPos[0];
      const positionY2 = e.pageY - centerPos[1];
      const angle1 = Math.floor(
        (Math.atan2(positionY1, positionX1) * 180) / Math.PI
      );
      const angle2 = Math.floor(
        (Math.atan2(positionY2, positionX2) * 180) / Math.PI
      );
      const angle = angle2 - angle1;
      // if (angle < 0 || angle > -180) {
      //   // angle += 180;
      // }
      // setDeg(angle);
      element.style.transform = `rotate(${angle}deg)`;
    }
  };
  const onMouseUp = (e) => {
    // const element = elementRef.current;
    // const currentDeg = element.style.tans
    // setDeg();
    setRotateClick([]);
    setCenterPos([]);
    setClickOn(false);
  };
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        // textAlign: "center",
        display: "flex",
        alignItems: "center" /* 수직 정렬 */,
        flexDirection: "row" /* default: row */,
        justifyContent: "center" /* flex direction에 대해서 정렬방식 선택 */,
        // backgroundColor: "brown",
        // position: "absolute",
        // left: "50%",
        // top: "50%",
        // transform: "translate(-50%, -50%)",
      }}
      onMouseMove={(e) => onMouseMove(e)}
      onMouseUp={(e) => onMouseUp(e)}
    >
      <div
        className="element-container"
        style={{
          border: "1px solid blue",
          width: "500px",
          height: "400px",
          display: "inline-block",
          // position: "absolute",
          // left: "50%",
          // top: "50%",
          // transform: "translate(-50%, -50%)",
        }}
        ref={elementRef}
        // onMouseMove={(e) => onMouseMove(e)}
      >
        {/* {console.log(rotateClick)} */}
        <div
          className="element-box"
          style={{
            width: "500px",
            height: "400px",
            position: "relative",
          }}
          // onMouseMove={(e) => onMouseMove(e)}
        >
          <div
            className="element"
            style={{
              width: "300px",
              height: "200px",
              backgroundColor: "orange",
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
            }}
            // onMouseMove={(e) => onMouseMove(e)}
          ></div>
          <div
            className="rotate"
            style={{
              width: "50px",
              height: "50px",
              border: "1px solid black",
              borderRadius: "50px",
              textAlign: "center",
              lineHeight: "50px",
              userSelect: "none",
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              bottom: "1.5rem",
              cursor: "move",
            }}
            // onMouseMove={(e) => onMouseMove(e)}
            onMouseDown={(e) => onMousedown(e)}
          >
            rotate
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateElement;
