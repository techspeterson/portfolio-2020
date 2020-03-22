import React from "react";
import { connect } from "react-redux";
import styles from "./Components.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function mapStateToProps(state) {
  return {
    palette: state.palette
  }
}

function FullsizeImage(props) {
  const { image, alt, palette } = props;

  return (
    <div {...props} className={styles.fullsizeImageContainer}>
      <a href={image} target="_blank" rel="noopener noreferrer">
        <img src={image} className={styles.fullsizeImage} alt={alt} />
        <FontAwesomeIcon icon="external-link-square-alt" className={styles.icon} color={palette.vibrant} />
      </a>
    </div>
  )
}

export default connect(mapStateToProps)(FullsizeImage);