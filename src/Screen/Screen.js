import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Clock from 'react-live-clock';
import Battery from 'react-device-battery';
import styles from "./Screen.module.css";

import DesktopIcon from "./DesktopIcon/DesktopIcon";

class Screen extends React.Component {
  renderBattery = ({ battery }) => {
    let batteryIcon = "battery-";
    if (battery < 5) {
      batteryIcon += "empty"
    } else if (battery < 30) {
      batteryIcon += "quarter"
    } else if (battery < 60) {
      batteryIcon += "half"
    } else if (battery < 80) {
      batteryIcon += "three-quarters"
    } else {
      batteryIcon += "full"
    }
    return <FontAwesomeIcon icon={batteryIcon} />
  }

  renderTaskbar = () => {
    return (
      <div className={styles.taskbar}>
        <FontAwesomeIcon icon={["fab", "windows"]} />
        <div className={styles.taskbarRight}>
          <FontAwesomeIcon icon="wifi" />
          <Battery
            render={this.renderBattery}
            onChange={(battery) => {
              console.log(battery)
            }}
          />
          <Clock format={"h:mm A"} ticking={true} />
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className={styles.screenContainer}>
        <div className={styles.desktop}>
          <DesktopIcon icon="user" name="Profile" />
          <DesktopIcon icon="images" name="Projects" />
          <div className={styles.windowContainer}></div>
          <DesktopIcon icon="code" name="Credits" className={styles.credits} />
        </div>
        {this.renderTaskbar()}
      </div>
    );
  }
}

export default Screen;