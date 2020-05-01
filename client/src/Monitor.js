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
    axios({ url: "/bg", timeout: 2000 }).then(res => {
      console.log("received")
      this.setState({ bgURL: res.data.imageURL + "&fm=jpg&w=1000&h=600&fit=crop" });
      this.props.setBgInfo(res.data);
    })
      .catch(err => {
        console.log("error retrieving bg. using default");
        this.setState({ bgURL: defaultBg });
        this.props.setBgInfo({
          url: "https://unsplash.com/photos/ln5drpv_ImI",
          author: {
            name: "Vincentiu Solomon",
            url: "https://unsplash.com/@vincentiu"
          }
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

  bgStyle = () => {
    const { palette } = this.props;
    if (palette && !palette.loading) {
      return {
        background: palette.darkMuted
      }
    }
    else return {
      background: "black"
    };
  }

  monitorStyle = () => {
    const { palette } = this.props;
    if (palette && !palette.loading) {
      return {
        background: `linear-gradient(135deg, rgba(128, 128, 128, 0.9), rgba(128, 128, 128, 0.8)), ${palette.lightVibrant}`
      }
    }
  }

  engravingStyle = () => {
    const { palette } = this.props;
    if (palette && !palette.loading) {
      return {
        color: palette.darkVibrant
      }
    }
  }

  render() {
    return (
      <div className={styles.container} style={this.bgStyle()}>
        <div className={styles.monitor} style={this.monitorStyle()}>
          <div className={styles.screenContainer}>
            {this.renderScreen()}
          </div>
          <div className={styles.monitorBottom}>
            <div className={styles.engraving} style={this.engravingStyle()}>Tessa Peterson</div>
            <div className={styles.powerButton} style={this.engravingStyle()}>
              <FontAwesomeIcon icon="power-off" />
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Monitor);