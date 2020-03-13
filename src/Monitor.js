import React from 'react';
import axios from "axios";
import { connect } from "react-redux";
import { Palette } from 'react-palette'

import styles from './App.module.css';
import Screen from "./Screen/Screen";
import StartupScreen from "./Screen/StartupScreen";
import { setBgInfo, setPalette } from "./store";
import defaultBg from "./assets/photo-1419242902214-272b3f66ee7a.jpg";

function mapStateToProps(state) {
  return {
    bgURL: state.bgURL,
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
      this.setState({ bgURL: res.data.imageURL + "&fm=jpg&w=1000&h=700&fit=crop" });
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
      </div>
    )
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Monitor);