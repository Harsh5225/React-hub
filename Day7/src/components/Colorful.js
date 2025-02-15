import React, { useState, useEffect,memo } from "react";

function Colorful() {
  const [color, setColor] = useState("white");
  console.log("render");
  console.log("first");

  // useEffect((Callback Function,Dependency))

  useEffect(() => {
    console.log("useEffect");

    document.body.style.backgroundColor = color;
  }, [color]);

  // console.log("second");

  return (
    <>
      <h1>Background color changer</h1>
      <div className="butons">
        <button
          style={{ backgroundColor: "red" }}
          onClick={() => setColor("red")}
        >
          Red
        </button>
        <button
          style={{ backgroundColor: "blue" }}
          onClick={() => setColor("blue")}
        >
          Blue
        </button>
        <button
          style={{ backgroundColor: "orange" }}
          onClick={() => setColor("orange")}
        >
          Orange
        </button>
        <button
          style={{ backgroundColor: "green" }}
          onClick={() => setColor("green")}
        >
          Green
        </button>
        <button
          style={{ backgroundColor: "pink" }}
          onClick={() => setColor("pink")}
        >
          Pink
        </button>
      </div>
    </>
  );
}

export default React.memo(Colorful);
