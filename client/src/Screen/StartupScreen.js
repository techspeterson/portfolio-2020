import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from "./StartupScreen.module.css";

function StartupScreen() {
  return (
    <div className={styles.startupScreen}>
      <FontAwesomeIcon icon="atom" className={styles.icon} spin />
        Starting up...
    </div>
  )
}

export default StartupScreen;