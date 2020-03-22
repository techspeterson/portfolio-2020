import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import styles from "./Components.module.css";

function mapStateToProps(state) {
  return {
    palette: state.palette
  }
}

function CaptionedImage(props) {
  const { palette, image, style, caption } = props;

  const Caption = styled.figcaption`
  color: ${palette.vibrant};
  width: 100%;
  font-style: italic;
  `;

  return (
    <div style={style} className={styles.captionedImage} >
      <img src={image} style={{ width: "100%" }} alt={caption} />
      <Caption>Caption: {caption}</Caption>
    </div>
  )
}

export default connect(mapStateToProps)(CaptionedImage);