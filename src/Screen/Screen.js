import React from "react";
import { connect } from "react-redux";
import { Palette } from "react-palette";

import styles from "./Screen.module.css";
import DesktopIcon from "./DesktopIcon/DesktopIcon";
import Taskbar from "./Taskbar/Taskbar";
import { openWindow } from "../store";

function mapStateToProps(state) {
  return {
    currentWindows: state.currentWindows,
    bgURL: state.bgURL
  };
}

const mapDispatchToProps = {
  openWindow
}

class Screen extends React.Component {
  openAbout = () => {
    this.props.openWindow("about");
  }

  renderTopWindow = () => {
    const { currentWindows } = this.props;
    if (currentWindows.length) {
      return currentWindows[currentWindows.length - 1].component;
    }
  }

  render() {
    return (
      <Palette src={this.props.bgURL}>
        {({ data, loading, error }) => (
          <div
            className={styles.desktop}
            style={{ background: `url(${this.props.bgURL})` }}
          >
            <div className={styles.desktopInner}>
              <DesktopIcon icon="user" name="Profile" onClick={this.openAbout} colour={data.vibrant} />
              <DesktopIcon icon="pencil-alt" name="Projects" colour={data.vibrant} />
              <DesktopIcon icon="paper-plane" name="Contact" colour={data.vibrant} />
              <div className={styles.windowContainer}>
                {this.renderTopWindow()}
              </div>
              <DesktopIcon icon="code" name="Credits" className={styles.credits} colour={data.vibrant} />
              <Taskbar palette={data} />
            </div>

          </div>
        )
        }
      </Palette>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Screen);