import React, { useState } from "react";
import Navbar from "./components/Navbar";
import TextArea from "./components/TextArea";

import "./App.css";
// import About from "./components/About";

function App() {


  const toggleMode = () => {
    if (Mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#343a40';
      document.body.style.color = 'white';
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    }
  };
  const [Mode, setMode] = useState('light');

  return (
    <>
      <Navbar title="TextUtils" mode={Mode} toggleMode={toggleMode} />
      <div className="container my-3">
        <TextArea heading="Enter text to anyalze" mode={Mode} />
      </div>
      {/* <div className="container">
        <About mode={Mode} />

      </div> */}
    </>
  );
}

export default App;
