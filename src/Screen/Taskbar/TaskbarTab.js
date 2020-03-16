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

  let colour;
  let weight;
  if (window.active) {
    colour = palette.vibrant;
    weight = 500;
  }
  else {
    colour = palette.darkVibrant;
    weight = "normal";
  }

  const Tab = styled.div`
  border-color: ${palette.muted};
  color: ${colour};
  font-weight: ${weight};

  &:hover {
    background: ${palette.lightVibrant};
  }
  `

  return (
    <Tab className={styles.taskbarTab} onClick={props.onClick}>
      <FontAwesomeIcon icon={window.icon} className={styles.tabIcon} />
      {window.title}
    </Tab>
  )
}

export default connect(mapStateToProps)(TaskbarTab);