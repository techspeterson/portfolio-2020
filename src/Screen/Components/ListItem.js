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
    height: 50px;

    &:hover {
      color: white !important;
      background-color: ${palette.muted};
      cursor: pointer;
    }
  `;

  return (
    <ListItem {...props} />
  )
}

export default connect(mapStateToProps)(ListItem);