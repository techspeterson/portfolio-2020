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
  const { palette, image, caption } = props;

  const Caption = styled.caption`
  color: ${palette.vibrant};
  width: 100%;
  font-style: italic;
  `;

  return (
    <div className={styles.captionedImage} {...props} >
      <img src={image} style={{ width: "100%" }} alt={caption} />
      <Caption>Caption: {caption}</Caption>
    </div>
  )
}

export default connect(mapStateToProps)(CaptionedImage);