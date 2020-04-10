import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return {
    palette: state.palette
  }
}

function header1(props) {
  const { palette } = props;

  const H1 = styled.h1`
  color: ${palette.vibrant};
  margin: 0.5em 0;
  `;

  return (
    <H1 {...props} />
  )
}

function header2(props) {
  const { palette } = props;

  const H2 = styled.h2`
  color: ${palette.darkVibrant};
  margin: 0.4em 0;
  `;

  return (
    <H2 {...props} />
  )
}

function header3(props) {
  const { palette } = props;

  const H3 = styled.h3`
  color: ${palette.darkMuted};
  margin: 0.3em 0;
  `;

  return (
    <H3 {...props} />
  )
}

const H1 = connect(mapStateToProps)(header1);
const H2 = connect(mapStateToProps)(header2);
const H3 = connect(mapStateToProps)(header3);

export { H1, H2, H3 }