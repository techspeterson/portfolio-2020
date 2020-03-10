import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./Screen.css"

import DesktopIcon from "./DesktopIcon/DesktopIcon";

class Screen extends React.Component {
  render() {
    return (
      <div className="screen">
        <DesktopIcon icon="user" name="Profile" />
        <DesktopIcon icon="images" name="Projects" />
        <DesktopIcon icon="code" name="Credits" />
        <div className="taskbar">
          <FontAwesomeIcon icon={["fab", "windows"]} />
        </div>
      </div>
    );
  }
}

export default Screen;