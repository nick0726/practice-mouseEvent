import React, { useState, useEffect, useRef } from "react";
import Color from "../components/Color";
const Canvas = () => {
  const [drawingOn, setDrawingOn] = useState(false);
  const [colorOn, setColorOn] = useState(false);
  const canvasRef = useRef();
  const contextRef = useRef();
  useEffect(() => {
    // canvas의 사이즈를 조작해줘야 작동을 함(왜 두가지 방법을 쓰는지 모르겠음)

    const canvas = canvasRef.current;

    canvas.width = 500;
    canvas.height = 500;

    // get context of the canvas 픽셀들을 컨트롤 하는 것임
    const context = canvas.getContext("2d");
    contextRef.current = context;
  }, []);

  const mouseUp = (e) => {
    const { offsetX, offsetY } = e.nativeEvent;
    contextRef.current.closePath();
    // contextRef.current.stroke();
    setDrawingOn(false);
  };

  const mouseDown = (e) => {
    setDrawingOn(true);
    const { offsetX, offsetY } = e.nativeEvent;
    contextRef.current.beginPath();
    contextRef.current.moveTo(offsetX, offsetY);
  };
  const mouseMove = (e) => {
    if (drawingOn) {
      const { offsetX, offsetY } = e.nativeEvent;
      contextRef.current.lineTo(offsetX, offsetY);
      contextRef.current.stroke();
    }
  };

  return (
    <div id="canvas-container">
      <div className="canvas_box canvas_top">
        <div className="canvas_menu">
          <button onClick={() => setColorOn(!colorOn)}>color</button>
        </div>
        <div className="canvas_canvas">
          <canvas
            ref={canvasRef}
            onMouseUp={mouseUp}
            onMouseDown={mouseDown}
            onMouseMove={mouseMove}
          ></canvas>
        </div>
      </div>
      <div className="canvas_box canvas_bottom">
        {colorOn ? <Color ctx={contextRef.current} /> : null}
      </div>
    </div>
  );
};

export default Canvas;
