import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from "./Window.module.css";

class Window extends React.Component {
  render() {
    return (
      <div className={styles.windowContainer}>
        <div className={styles.topBar}>
          <span>{this.props.title}</span>
          <div className={styles.windowControls}>
            <FontAwesomeIcon icon="window-minimize" />
            <FontAwesomeIcon icon="window-maximize" />
            <FontAwesomeIcon icon="window-close" />
          </div>
        </div>
        <div className={styles.windowInner}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Window;