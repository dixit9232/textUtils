import React from 'react';

function ColorPalette(props) {
    return (
        <div
            className={`${props.color}Container mx-3`}
            onClick={handleClick}
            style={{
                backgroundColor: props.color,
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                display: 'inline-block'
            }}
        />
    );
}

export default ColorPalette;
