import React from "react";
import styles from "./Taskbar.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Clock from 'react-live-clock';
import Battery from 'react-device-battery';
import { connect } from "react-redux";

import TaskbarTab from "./TaskbarTab";
import { setActiveWindow } from "../../store";

function mapStateToProps(state) {
  return {
    currentWindows: state.currentWindows,
    palette: state.palette
  };
}

const mapDispatchToProps = {
  setActiveWindow
}

class Taskbar extends React.Component {
  state = {
    batteryLevel: null
  }

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
    return <FontAwesomeIcon icon={batteryIcon} title={this.state.batteryLevel + "%"} />
  }

  changeActive = (index) => (event) => {
    this.props.setActiveWindow(index);
  }

  renderTaskbarWindows = () => {
    const { currentWindows } = this.props;

    if (currentWindows.length) {
      return currentWindows.map((window, index) => {
        return <TaskbarTab key={index} window={window} onClick={this.changeActive(index)}>
          <FontAwesomeIcon icon={window.icon} className={styles.tabIcon} />
          {window.title}
        </TaskbarTab>;
      });
    }
  }

  render() {
    const { palette } = this.props;

    return (
      <div className={styles.taskbar} style={{ color: palette.darkVibrant }}>
        <FontAwesomeIcon icon="star" />
        <div className={styles.taskbarTabs}>
          {this.renderTaskbarWindows()}
        </div>
        <div className={styles.taskbarRight}>
          <FontAwesomeIcon icon="wifi" />
          <Battery
            render={this.renderBattery}
            onChange={(battery) => {
              this.setState({ batteryLevel: battery });
            }}
          />
          <Clock format={"h:mm A"} ticking={true} title={new Date().toLocaleDateString(undefined, { weekday: "long", month: "long", day: "numeric", year: "numeric" })} />
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Taskbar);