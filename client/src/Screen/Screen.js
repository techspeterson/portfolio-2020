import React, { useEffect } from "react";
import { connect } from "react-redux";

import styles from "./Screen.module.css";
import DesktopIcon from "./DesktopIcon/DesktopIcon";
import Taskbar from "./Taskbar/Taskbar";
import Window from "./Window/Window";
import { openWindow, setPalette } from "../store";

function mapStateToProps(state) {
  return {
    currentWindows: state.currentWindows,
    palette: state.palette
  };
}

const mapDispatchToProps = {
  openWindow,
  setPalette
}

function Screen(props) {
  const { palette, setPalette, paletteProp, currentWindows, bgURL } = props;

  useEffect(() => {
    setPalette(paletteProp)
  })

  const openWindow = (window) => () => {
    props.openWindow(window);
  }

  const renderTopWindow = () => {
    if (currentWindows.length) {
      const activeWindow = currentWindows.find(window => window.active);
      return (
        <Window windowObj={activeWindow} index={currentWindows.indexOf(activeWindow)} />
      )
    }
  }

  const renderDesktopInner = () => {
    if (palette) {
      return (
        <div className={styles.desktopInner}>
          <DesktopIcon icon="user" name="Profile" onClick={openWindow("about")} colour={palette.vibrant} />
          <DesktopIcon icon="pencil-alt" name="Projects" colour={palette.vibrant} onClick={openWindow("projects")} />
          <DesktopIcon icon="paper-plane" name="Contact" colour={palette.vibrant} onClick={openWindow("contact")} />
          <div className={styles.windowContainer}>
            {renderTopWindow()}
          </div>
          <DesktopIcon icon="code" name="Credits" onClick={openWindow("credits")} className={styles.credits} colour={palette.vibrant} />
          <Taskbar />
        </div>
      )
    }
  }

  return (
    <div
      className={styles.desktop}
      style={{ background: `url(${bgURL})` }}
    >
      {renderDesktopInner()}
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Screen);