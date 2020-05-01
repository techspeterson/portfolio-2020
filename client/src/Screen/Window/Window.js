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
  closeWindow = () => {
    this.props.closeWindow(this.props.index);
  }

  render() {
    const { windowObj } = this.props;

    return (
      <div className={styles.windowContainer + (windowObj.class ? " " + windowObj.class : "")} style={{ background: this.props.palette.vibrant }}>
        <div className={styles.topBar}>
          <span>{windowObj.title}</span>
          <div className={styles.windowControls}>
            <WindowButton icon="window-minimize" className={`${styles.notOnMobile} ${styles.disabled}`} />
            <WindowButton icon="window-maximize" className={`${styles.notOnMobile} ${styles.disabled}`} />
            <WindowButton icon="window-close" onClick={this.closeWindow} enabled={true} />
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