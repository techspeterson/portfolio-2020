import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { connect } from "react-redux";
import styles from "./DesktopIcon.module.css";

function mapStateToProps(state) {
  return {
    palette: state.palette
  }
}

function DesktopIcon(props) {
  const [colour, setColour] = useState(props.palette.vibrant);

  const toggleHover = () => {
    const { palette } = props;

    if (colour === palette.vibrant) {
      setColour(palette.darkVibrant);
    }
    else {
      setColour(palette.vibrant);
    }
  }

  const { icon, className, onClick } = props;

  return (
    <div className={styles.iconContainer + (className ? " " + className : "")} onClick={onClick} onMouseEnter={toggleHover} onMouseLeave={toggleHover} >
      <FontAwesomeIcon className={styles.icon} icon={icon} style={{ background: colour }} />
      <span className={styles.name} style={{ background: colour }} >{props.name}</span>
    </div>
  )
}

export default connect(mapStateToProps)(DesktopIcon);