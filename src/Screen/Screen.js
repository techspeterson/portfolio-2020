import React from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Clock from 'react-live-clock';
import Battery from 'react-device-battery';
import axios from "axios";
import styles from "./Screen.module.css";

import DesktopIcon from "./DesktopIcon/DesktopIcon";
import { openWindow } from "../store";

function mapStateToProps(state) {
  return { currentWindows: state.currentWindows };
}

const mapDispatchToProps = {
  openWindow
}

class Screen extends React.Component {
  state = {
    bgURL: null
  }

  componentDidMount() {
    axios.get("https://picsum.photos/1000/700").then(res => {
      const id = res.headers["picsum-id"];
      axios.get(`https://picsum.photos/id/${id}/info`).then(res => {
        this.setState({ bgURL: `https://picsum.photos/id/${id}/1000/700` });
      });
    });
  }

  openAbout = () => {
    this.props.openWindow("about");
  }

  renderTopWindow = () => {
    const { currentWindows } = this.props;
    if (currentWindows.length) {
      return currentWindows[currentWindows.length - 1].component;
    }
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
    return <FontAwesomeIcon icon={batteryIcon} />
  }

  renderTaskbarWindows = () => {
    const { currentWindows } = this.props;
    if (currentWindows.length) {
      return currentWindows.map((window, index) => {
        return <div key={index} className={styles.taskbarTab}>
          <FontAwesomeIcon icon={window.icon} className={styles.tabIcon} />
          {window.title}
        </div>;
      });
    }
  }

  renderTaskbar = () => {
    return (
      <div className={styles.taskbar}>
        <FontAwesomeIcon icon={["fab", "windows"]} />
        <div className={styles.taskbarTabs}>
          {this.renderTaskbarWindows()}
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
    );
  }

  renderLoadingOrScreen = () => {
    if (this.state.bgURL) {
      return (
        <div
          className={styles.desktop}
          style={{ background: `url(${this.state.bgURL})` }}
        >
          <DesktopIcon icon="user" name="Profile" onClick={this.openAbout} />
          <DesktopIcon icon="pencil-alt" name="Projects" />
          <DesktopIcon icon="paper-plane" name="Contact" />
          <div className={styles.windowContainer}>
            {this.renderTopWindow()}
          </div>
          <DesktopIcon icon="code" name="Credits" className={styles.credits} />
          {this.renderTaskbar()}
        </div>
      )
    }
    else {
      return (
        <div>Loading...</div>
      )
    }
  }

  render() {
    return (
      <div className={styles.screenContainer}>
        {this.renderLoadingOrScreen()}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Screen);