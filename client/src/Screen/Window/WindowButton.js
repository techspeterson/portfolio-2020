import React from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from "./Window.module.css";

function mapStateToProps(state) {
  return {
    palette: state.palette
  }
}

class WindowButton extends React.Component {
  state = {
    colour: "white"
  }

  toggleHover = () => {
    if (this.state.colour === "white") {
      this.setState({ colour: this.props.palette.lightVibrant })
    }
    else {
      this.setState({ colour: "white" })
    }
  }

  render() {
    const { icon, onClick, className } = this.props;

    return (
      <FontAwesomeIcon icon={icon} className={styles.windowControlIcon + (className ? " " + className : "")} color={this.state.colour} onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover} onClick={onClick} />
    )
  }
}

export default connect(mapStateToProps)(WindowButton);