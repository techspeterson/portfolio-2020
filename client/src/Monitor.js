import React, { useState, useEffect } from 'react';
import axios from "axios";
import { connect } from "react-redux";
import { Palette } from 'react-palette'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from './App.module.css';
import Screen from "./Screen/Screen";
import StartupScreen from "./Screen/StartupScreen";
import { setBgInfo, setPalette } from "./store";
import defaultBg from "./assets/vincentiu-solomon-ln5drpv_ImI-unsplash.jpg";

function mapStateToProps(state) {
  return {
    palette: state.palette
  }
}

const mapDispatchToProps = {
  setBgInfo,
  setPalette
}

function Monitor(props) {
  const [bgURL, setBgURL] = useState();
  const { palette, setBgInfo } = props;

  useEffect(() => {
    axios({ url: "/bg", timeout: 2000 }).then(res => {
      console.log("received")
      setBgURL(res.data.imageURL + "&fm=jpg&w=1000&h=600&fit=crop");
      setBgInfo(res.data);
    })
      .catch(err => {
        console.log("error retrieving bg. using default");
        setBgURL(defaultBg);
        setBgInfo({
          url: "https://unsplash.com/photos/ln5drpv_ImI",
          author: {
            name: "Vincentiu Solomon",
            url: "https://unsplash.com/@vincentiu"
          }
        });
      });
  }, [setBgInfo]);

  const renderScreenWithPalette = (palette, bgURL) => {
    if (!palette.loading) {
      return <Screen bgURL={bgURL} paletteProp={palette.data} />
    }
  }

  const renderScreen = () => {
    if (bgURL) {
      return (
        <Palette src={bgURL}>
          {(palette) => (
            renderScreenWithPalette(palette, bgURL)
          )}
        </Palette>
      );
    }
    else {
      return <StartupScreen />;
    }
  }

  const bgStyle = () => {
    if (palette && !palette.loading) {
      return {
        background: palette.darkMuted
      }
    }
    else return {
      background: "black"
    };
  }

  const monitorStyle = () => {
    if (palette && !palette.loading) {
      return {
        background: `linear-gradient(135deg, rgba(128, 128, 128, 0.9), rgba(128, 128, 128, 0.8)), ${palette.lightVibrant}`
      }
    }
  }

  const engravingStyle = () => {
    if (palette && !palette.loading) {
      return {
        color: palette.darkVibrant
      }
    }
  }

  return (
    <div className={styles.container} style={bgStyle()}>
      <div className={styles.monitor} style={monitorStyle()}>
        <div className={styles.screenContainer}>
          {renderScreen()}
        </div>
        <div className={styles.monitorBottom}>
          <div className={styles.engraving} style={engravingStyle()}>Tessa Peterson</div>
          <div className={styles.powerButton} style={engravingStyle()}>
            <FontAwesomeIcon icon="power-off" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Monitor);