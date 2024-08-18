import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextArea(props) {
  const onChange = (event) => {
    setText(event.target.value);
  };
  const handelUpperCase = () => {
    setText(text.toUpperCase());
    props.showAlert("Text coneverted to uppercase!", "success");
  };

  const handelLowerCase = () => {
    setText(text.toLowerCase());
    props.showAlert("Text coneverted to lowercase!", "success");
  };

  const handelClearText = () => {
    setText("");
    props.showAlert("Text is cleared!", "success");
  };

  const handelCopyText = () => {
    let newText = document.getElementById("textArea");
    newText.select();

    navigator.clipboard.writeText(text);
    props.showAlert("Text is copied to clipboard!", "success");
  };

  const [text, setText] = useState("");

  return (
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className={`form-control text-${
            props.mode === "light" ? "dark" : "light"
          } bg-${props.mode}`}
          id="textArea"
          rows="10"
          value={text}
          onChange={onChange}
        ></textarea>

        <button
          className="btn btn-primary my-3"
          style={{
            backgroundColor: props.color,
            borderColor: props.color,
            color:
              props.color === "#ffff00" || props.color === "#66ff33"
                ? "black"
                : "white",
          }}
          onClick={handelUpperCase}
        >
          Conver To Uppercase
        </button>
        <button
          className="btn btn-primary mx-3 my-3"
          style={{
            backgroundColor: props.color,
            borderColor: props.color,
            color:
              props.color === "#ffff00" || props.color === "#66ff33"
                ? "black"
                : "white",
          }}
          onClick={handelLowerCase}
        >
          Convert To Lowercase
        </button>
        <button
          className="btn btn-primary mx-3"
          style={{
            backgroundColor: props.color,
            borderColor: props.color,
            color:
              props.color === "#ffff00" || props.color === "#66ff33"
                ? "black"
                : "white",
          }}
          onClick={handelClearText}
        >
          Clear Text
        </button>
        <button
          className="btn btn-primary mx-3"
          style={{
            backgroundColor: props.color,
            borderColor: props.color,
            color:
              props.color === "#ffff00" || props.color === "#66ff33"
                ? "black"
                : "white",
          }}
          onClick={handelCopyText}
        >
          Copy Text
        </button>
      </div>
      <div className="container my-3">
        <h2>Text Summary</h2>
        <p>
          {text.split(" ").filter((word) => word !== "").length} words and{" "}
          {text.length} characters
        </p>
      </div>
      <div className="container">
        <h2>Preview Text</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter your text in text field to show preview"}
        </p>
      </div>
    </div>
  );
}

TextArea.propTypes = {
  heading: PropTypes.string.isRequired,
};
