import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from "./DesktopIcon.module.css";

class DesktopIcon extends React.Component {
  render() {
    const { className, onClick } = this.props;

    return (
      <div className={styles.iconContainer + (className ? " " + className : "")} onClick={onClick} >
        <FontAwesomeIcon className={styles.icon} icon={this.props.icon} color={this.props.colour || "white"} />
        <span className={styles.name}>{this.props.name}</span>
      </div>
    )
  }
}

export default DesktopIcon;