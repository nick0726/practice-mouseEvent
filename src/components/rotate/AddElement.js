import React, { useRef } from "react";

const AddElement = () => {
  const boxRef = useRef();
  const onMouseDown = (e) => {
    const box = boxRef.current;
    console.log(e.nativeEvent.pageX);
    console.log(e.nativeEvent.pageY);
    console.log(e.nativeEvent.offsetX);
    console.log(e.nativeEvent.offsetY);
    // console.log(e.nativeEvent);
    // console.log(e.nativeEvent);
    // console.log(e.nativeEvent);
    // console.log(e.nativeEvent);
    // console.log(box.style);
  };
  const onMouseUp = (e) => {
    const box = boxRef.current;

    // box.style.offsetX += "10";
    // box.style.heightY += "10";
    // box.style.top += "1rem";
    console.log(box.style.top);
  };
  return (
    <div className="div-container">
      <div className="div-box"></div>;
      <div>
        <div
          className="resize-button"
          ref={boxRef}
          onMouseDown={(e) => onMouseDown(e)}
          onMouseUp={(e) => onMouseUp(e)}
        >
          R
        </div>
      </div>
    </div>
  );
};

export default AddElement;
