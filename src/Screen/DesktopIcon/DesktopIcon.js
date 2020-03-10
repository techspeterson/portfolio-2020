import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./DesktopIcon.css";

class DesktopIcon extends React.Component {
  render() {
    return (
      <div className="iconContainer">
        <FontAwesomeIcon className="icon" icon={this.props.icon} />
        <span className="name">{this.props.name}</span>
      </div>
    )
  }
}

export default DesktopIcon;