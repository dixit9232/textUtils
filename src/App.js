import React from "react";
import Navbar from "./components/Navbar";
import TextArea from "./components/TextArea";

import "./App.css";

function App() {
  return (
    <>
      <Navbar title="TextUtils" />
      <div className="container my-3">
        <TextArea heading="Enter text to anyalze" />
      </div>
    </>
  );
}

export default App;
