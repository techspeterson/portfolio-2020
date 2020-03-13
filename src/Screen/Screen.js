import React from "react";
import { connect } from "react-redux";

import styles from "./Screen.module.css";
import DesktopIcon from "./DesktopIcon/DesktopIcon";
import Taskbar from "./Taskbar/Taskbar";
import Window from "./Window/Window";
import { openWindow, setPalette } from "../store";

function mapStateToProps(state) {
  return {
    currentWindows: state.currentWindows,
    // bgURL: state.bgURL,
    palette: state.palette
  };
}

const mapDispatchToProps = {
  openWindow,
  setPalette
}

class Screen extends React.Component {
  componentDidMount() {
    this.props.setPalette(this.props.paletteProp)
  }

  openWindow = (window) => (event) => {
    this.props.openWindow(window);
  }

  renderTopWindow = () => {
    const { currentWindows } = this.props;
    if (currentWindows.length) {
      const activeWindow = currentWindows.find(window => window.active);
      return (
        <Window windowObj={activeWindow} index={currentWindows.indexOf(activeWindow)} />
      )
    }
  }

  renderDesktopInner = () => {
    const { palette } = this.props;
    if (palette) {
      return (
        <div className={styles.desktopInner}>
          <DesktopIcon icon="user" name="Profile" onClick={this.openWindow("about")} colour={palette.vibrant} />
          <DesktopIcon icon="pencil-alt" name="Projects" colour={palette.vibrant} />
          <DesktopIcon icon="paper-plane" name="Contact" colour={palette.vibrant} />
          <div className={styles.windowContainer}>
            {this.renderTopWindow()}
          </div>
          <DesktopIcon icon="code" name="Credits" onClick={this.openWindow("credits")} className={styles.credits} colour={palette.vibrant} />
          <Taskbar />
        </div>
      )
    }
  }

  render() {
    return (
      <div
        className={styles.desktop}
        style={{ background: `url(${this.props.bgURL})` }}
      >
        {this.renderDesktopInner()}
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Screen);