import React from "react";
import PropTypes from "prop-types";
import ColorPalette from "./ColorPalette";

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg  bg-${props.mode}`}>
      <div className="container-fluid">
        <a
          className={`navbar-brand text-${
            props.mode === "light" ? "dark" : "light"
          }`}
          href="/"
        >
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className={`nav-link active text-${
                  props.mode === "light" ? "dark" : "light"
                }`}
                aria-current="page"
                href="/"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link text-${
                  props.mode === "light" ? "dark" : "light"
                }`}
                href="/"
              >
                About
              </a>
            </li>
          </ul>
          <ColorPalette
            color="#ff0000"
            onClick={props.handleColorChange}
          />
          <ColorPalette
            color="#3399ff"
            onClick={props.handleColorChange}
          />
          <ColorPalette
            color="#ffff00"
            onClick={props.handleColorChange}
          />
          <ColorPalette
            color="#66ff33"
            onClick={props.handleColorChange}
          />
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              onClick={props.toggleMode}
              id="flexSwitchCheckDefault"
            />
            <label
              className={`form-check-label text-${
                props.mode === "light" ? "dark" : "light"
              }`}
              htmlFor="flexSwitchCheckDefault"
            >
              Change mode
            </label>
          </div>
          {/* <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-primary" type="submit">
              Search
            </button>
          </form> */}
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  toggleMode: PropTypes.func.isRequired,
  handleColorChange:PropTypes.func.isRequired
};
