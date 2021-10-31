import React from "react";

const Color = ({ ctx }) => {
  const changeColor = (e) => {
    ctx.strokeStyle = `${e.target.id}`;
  };
  return (
    <div id="colors-container">
      <div className="colors-box">
        <div
          id="black"
          onClick={changeColor}
          className="color"
          style={{ backgroundColor: "black" }}
        ></div>
        <div
          id="red"
          onClick={changeColor}
          className="color"
          style={{ backgroundColor: "red" }}
        ></div>
        <div
          id="blue"
          onClick={changeColor}
          className="color"
          style={{ backgroundColor: "blue" }}
        ></div>
        <div
          id="yellow"
          onClick={changeColor}
          className="color"
          style={{ backgroundColor: "yellow" }}
        ></div>
        <div
          id="green"
          onClick={changeColor}
          className="color"
          style={{ backgroundColor: "green" }}
        ></div>
        <div
          id="pink"
          onClick={changeColor}
          className="color"
          style={{ backgroundColor: "pink" }}
        ></div>
        <div
          id="purple"
          onClick={changeColor}
          className="color"
          style={{ backgroundColor: "purple" }}
        ></div>
        <div
          id="orange"
          onClick={changeColor}
          className="color"
          style={{ backgroundColor: "orange" }}
        ></div>
      </div>
    </div>
  );
};

export default Color;
