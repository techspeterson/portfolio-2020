import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return {
    palette: state.palette
  }
}

function ListItem(props) {
  const { palette } = props;

  const ListItem = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 50px;
    border-width: 1px 0 0 0;
    border-style: solid;
    border-color: ${palette.lightVibrant};

    &:hover {
      color: white !important;
      background-color: ${palette.lightMuted};
      cursor: pointer;
    }
  `;

  return (
    <ListItem {...props} />
  )
}

export default connect(mapStateToProps)(ListItem);