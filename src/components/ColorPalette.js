import React from 'react';
import PropTypes from 'prop-types'


function ColorPalette(props) {
    return (
      <button
        className={`${props.color}Container mx-3`}
        onClick={() => props.onClick(props.color)}
        style={{
          backgroundColor: props.color,
          width: "20px",
          height: "20px",
          borderRadius: "50%",
          display: "inline-block",
        }}
      ></button>
    );
}

export default ColorPalette;

ColorPalette.propTypes = {
    onClick: PropTypes.func.isRequired
}
