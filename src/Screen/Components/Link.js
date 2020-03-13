import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return {
    palette: state.palette
  }
}

function Link(props) {
  const { palette } = props;

  const Link = styled.a`
  color: ${palette.vibrant};

  &:hover {
    color: ${palette.lightVibrant};
  }
  `;

  return (
    <Link {...props} />
  )
}

export default connect(mapStateToProps)(Link);