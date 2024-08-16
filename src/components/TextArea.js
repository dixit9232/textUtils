import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextArea(props) {
  const onChange = (event) => {
    setText(event.target.value);
  };
  const handelUpperCase = () => {
    setText(text.toUpperCase());
  };
  const [text, setText] = useState("Enter Text Here");

  return (
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="textArea"
          rows="10"
          value={text}
          onChange={onChange}
        ></textarea>

        <button className="btn btn-primary my-3" onClick={handelUpperCase}>
          Conver To Uppercase
        </button>
      </div>
    </div>
  );
}

TextArea.propTypes = {
  heading: PropTypes.string.isRequired,
};
  