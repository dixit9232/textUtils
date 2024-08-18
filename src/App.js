import React, { useState } from "react";
import Navbar from "./components/Navbar";
import TextArea from "./components/TextArea";

import "./App.css";
import Alert from "./components/Alert";
// import About from "./components/About";

function App() {
  const toggleMode = () => {
    if (Mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#343a40";
      document.body.style.color = "white";
      showAlert("Dark mode enabled succesfully", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light mode enabled successfully", "success");
    }
  };

  const handleColorChange = (color) => {
    setColor(color);
    showAlert("Button Color is Changed!", "success");
  };

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const [Mode, setMode] = useState("light");
  const [color, setColor] = useState("#3399ff");
  const [alert, setAlert] = useState(null);

  return (
    <>
      <Navbar
        title="TextUtils"
        mode={Mode}
        toggleMode={toggleMode}
        handleColorChange={handleColorChange}
      />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextArea
          heading="Enter text to anyalze"
          mode={Mode}
          color={color}
          showAlert={showAlert}
        />
      </div>
      {/* <div className="container">
        <About mode={Mode} />

      </div> */}
    </>
  );
}

export default App;
