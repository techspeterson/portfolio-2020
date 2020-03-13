import React from "react";
import styles from "./Taskbar.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { connect } from "react-redux";
import styled from 'styled-components';

function mapStateToProps(state) {
  return {
    palette: state.palette
  };
}

function TaskbarTab(props) {
  const { window, palette } = props;

  let bg;
  if (window.active) {
    // return "#66" + this.props.palette.lightMuted.slice(2);
    bg = palette.vibrant + "50";
  }
  else {
    bg = "white";
  }

  const Tab = styled.div`
  border-color: ${palette.muted};
  background: ${bg};
  `

  return (
    <Tab
      className={styles.taskbarTab}>
      <FontAwesomeIcon icon={window.icon} className={styles.tabIcon} />
      {window.title}
    </Tab>
  )
}

export default connect(mapStateToProps)(TaskbarTab);