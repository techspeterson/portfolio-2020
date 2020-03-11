import React from "react";
import styles from "./Taskbar.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Clock from 'react-live-clock';
import Battery from 'react-device-battery';
import { connect } from "react-redux";

function mapStateToProps(state) {
  return {
    currentWindows: state.currentWindows,
    palette: state.palette
  };
}

class Taskbar extends React.Component {
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

  renderTaskbarWindows = (palette) => {
    const { currentWindows } = this.props;
    if (currentWindows.length) {
      return currentWindows.map((window, index) => {
        return <div key={index} className={styles.taskbarTab} style={{ borderColor: palette.muted }}>
          <FontAwesomeIcon icon={window.icon} className={styles.tabIcon} />
          {window.title}
        </div>;
      });
    }
  }

  render() {
    const { palette } = this.props;

    return (
      <div className={styles.taskbar} style={{ color: palette.vibrant }}>
        <FontAwesomeIcon icon={["fab", "windows"]} />
        <div className={styles.taskbarTabs}>
          {this.renderTaskbarWindows(palette)}
        </div>
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
    )
  }
}

export default connect(mapStateToProps)(Taskbar);