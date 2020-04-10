import React from 'react';
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

class Monitor extends React.Component {
  state = {
    bgURL: null
  }

  componentDidMount() {
    axios({ url: `${process.env.REACT_APP_SERVER_URL}/bg`, timeout: 2000 }).then(res => {
      console.log("received")
      this.setState({ bgURL: res.data.imageURL + "&fm=jpg&w=1000&h=600&fit=crop" });
      this.props.setBgInfo(res.data);
    })
      .catch(err => {
        console.log("error retrieving bg. using default");
        this.setState({ bgURL: defaultBg });
        this.props.setBgInfo({
          url: "https://unsplash.com/photos/ln5drpv_ImI",
          author: "Vincentiu Solomon"
        });
      });
  }

  renderScreenWithPalette = (palette, bgURL) => {
    if (!palette.loading) {
      return <Screen bgURL={bgURL} paletteProp={palette.data} />
    }
  }

  renderScreen = () => {
    const { bgURL } = this.state;

    if (bgURL) {
      return (
        <Palette src={bgURL}>
          {(palette) => (
            this.renderScreenWithPalette(palette, bgURL)
          )}
        </Palette>
      );
    }
    else {
      return <StartupScreen />;
    }
  }

  render() {
    return (
      <div className={styles.monitor}>
        <div className={styles.screenContainer}>
          {this.renderScreen()}
        </div>
        <div className={styles.monitorBottom}>
          <div className={styles.engraving}>Tessa Peterson</div>
          <div className={styles.powerButton}>
            <FontAwesomeIcon icon="power-off" />
          </div>
        </div>
      </div>
    )
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Monitor);