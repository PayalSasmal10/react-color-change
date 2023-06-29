import "./App.css";
import { useState } from "react";

function App() {
  const [colorCircle, setColorCircle] = useState("black");

  const colorHandleChange = (colors) =>
    colors === "green"
      ? setColorCircle("green")
      : colors === "blue"
      ? setColorCircle("#1B6B93")
      : colors === "red"
      ? setColorCircle("red")
      : colors === "yellow"
      ? setColorCircle("yellow")
      : colors === "black"
      ? setColorCircle("black")
      : "black";

  return (
    <div className="App">
      <div className="box">
        <div className="shape" style={{ background: colorCircle }}></div>
        <button
          className="color black"
          onClick={() => colorHandleChange("black")}
        >
          Black
        </button>
        <button
          onClick={() => colorHandleChange("green")}
          className="color green"
        >
          Green
        </button>
        <button
          onClick={() => colorHandleChange("blue")}
          className="color white"
        >
          Blue
        </button>
        <button onClick={() => colorHandleChange("red")} className="color red">
          Red
        </button>
        <button
          onClick={() => colorHandleChange("yellow")}
          className="color yellow"
        >
          Yellow
        </button>
      </div>
    </div>
  );
}

export default App;
