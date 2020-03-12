import React from "react";
import { connect } from "react-redux";
import styles from "./Window.module.css";
import { closeWindow } from "../../store";
import WindowButton from "./WindowButton";

function mapStateToProps(state) {
  return {
    bgURL: state.bgURL,
    palette: state.palette,
    currentWindows: state.currentWindows
  }
}

const mapDispatchToProps = {
  closeWindow
}

class Window extends React.Component {
  onClick = () => {
    this.props.closeWindow();
  }

  render() {
    return (
      <div className={styles.windowContainer} style={Object.assign({}, { background: this.props.palette.vibrant }, this.props.style)}>
        <div className={styles.topBar}>
          <span>{this.props.title}</span>
          <div className={styles.windowControls}>
            <WindowButton icon="window-minimize" />
            <WindowButton icon="window-maximize" />
            <WindowButton icon="window-close" onClick={this.onClick} />
          </div>
        </div>
        <div className={styles.windowInner}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Window);