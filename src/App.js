import React, { useState } from "react";
import Navbar from "./components/Navbar";
import TextArea from "./components/TextArea";

import "./App.css";
// import About from "./components/About";

function App() {
  const toggleMode = () => {
    if (Mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#343a40";
      document.body.style.color = "white";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  };

  const handleColorChange = (color) => {
    
    setColor(color);
  };

  const [Mode, setMode] = useState("light");
  const [color, setColor] = useState("#3399ff");

  return (
    <>
      <Navbar
        title="TextUtils"
        mode={Mode}
        toggleMode={toggleMode}
        handleColorChange={handleColorChange}
      />
      <div className="container my-3">
        <TextArea heading="Enter text to anyalze" mode={Mode} color={color} />
      </div>
      {/* <div className="container">
        <About mode={Mode} />

      </div> */}
    </>
  );
}

export default App;
