import React, { useState } from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from "./Window.module.css";

function mapStateToProps(state) {
  return {
    palette: state.palette
  }
}

function WindowButton(props) {
  const [colour, setColour] = useState("white");

  const toggleHover = () => {
    if (props.enabled) {
      if (colour === "white") {
        setColour(props.palette.lightVibrant);
      }
      else {
        setColour("white");
      }
    }
  }

  const { icon, onClick, className } = props;

  return (
    <FontAwesomeIcon icon={icon} className={styles.windowControlIcon + (className ? " " + className : "")} color={colour} onMouseEnter={toggleHover} onMouseLeave={toggleHover} onClick={onClick} />
  )
}

export default connect(mapStateToProps)(WindowButton);