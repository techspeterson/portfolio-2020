import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { connect } from "react-redux";
import styles from "./DesktopIcon.module.css";

function mapStateToProps(state) {
  return {
    palette: state.palette
  }
}

class DesktopIcon extends React.Component {
  state = {
    colour: this.props.palette.vibrant
  }

  toggleHover = () => {
    const { palette } = this.props;

    if (this.state.colour === palette.vibrant) {
      this.setState({ colour: palette.muted })
    }
    else {
      this.setState({ colour: palette.vibrant })
    }
  }

  render() {
    const { icon, className, onClick } = this.props;

    return (
      <div className={styles.iconContainer + (className ? " " + className : "")} onClick={onClick} onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover} >
        <FontAwesomeIcon className={styles.icon} icon={icon} style={{ background: this.state.colour }} />
        <span className={styles.name} style={{ background: this.state.colour }} >{this.props.name}</span>
      </div>
    )
  }
}

export default connect(mapStateToProps)(DesktopIcon);