import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { connect } from "react-redux";
import styles from "./Window.module.css";

function mapStateToProps(state) {
  return {
    bgURL: state.bgURL,
    palette: state.palette
  }
}

class Window extends React.Component {
  onClick = () => {
    console.log("closing!");
  }

  render() {
    return (
      <div className={styles.windowContainer} style={{ background: this.props.palette.vibrant }}>
        <div className={styles.topBar}>
          <span>{this.props.title}</span>
          <div className={styles.windowControls}>
            <FontAwesomeIcon icon="window-minimize" className={styles.windowControlIcon} />
            <FontAwesomeIcon icon="window-maximize" className={styles.windowControlIcon} />
            <FontAwesomeIcon icon="window-close" className={styles.windowControlIcon} onClick={this.onClick} />
          </div>
        </div>
        <div className={styles.windowInner}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Window);