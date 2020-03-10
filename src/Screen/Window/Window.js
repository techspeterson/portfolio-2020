import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from "./Window.module.css";

class Window extends React.Component {
  onClick = () => {
    console.log("closing!");
  }

  render() {
    return (
      <div className={styles.windowContainer}>
        <div className={styles.topBar}>
          <span>{this.props.title}</span>
          <div className={styles.windowControls}>
            <FontAwesomeIcon icon="window-minimize" className={styles.windowControlIcon} />
            <FontAwesomeIcon icon="window-maximize" className={styles.windowControlIcon} />
            <FontAwesomeIcon icon="window-close" className={styles.windowControlIcon} onClick={this.onClick} />
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