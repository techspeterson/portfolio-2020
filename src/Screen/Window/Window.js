import React from "react";
import { connect } from "react-redux";
import styles from "./Window.module.css";
import { closeWindow } from "../../store";
import WindowButton from "./WindowButton";

function mapStateToProps(state) {
  return {
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
    const { windowObj } = this.props;

    return (
      <div className={styles.windowContainer} style={Object.assign({}, { background: this.props.palette.vibrant }, windowObj.style)}>
        <div className={styles.topBar}>
          <span>{windowObj.title}</span>
          <div className={styles.windowControls}>
            <WindowButton icon="window-minimize" />
            <WindowButton icon="window-maximize" />
            <WindowButton icon="window-close" onClick={this.onClick} />
          </div>
        </div>
        <div className={styles.windowInner}>
          {windowObj.component}
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Window);