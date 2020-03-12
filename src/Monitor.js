import React from 'react';
import axios from "axios";
import { connect } from "react-redux";
import { Palette } from 'react-palette'

import styles from './App.module.css';
import Screen from "./Screen/Screen";
import StartupScreen from "./Screen/StartupScreen";
import { setBgInfo, setPalette } from "./store";

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

  // componentDidMount() {
  //   axios.get("https://picsum.photos/1000/700").then(res => {
  //     const id = res.headers["picsum-id"];
  //     axios.get(`https://picsum.photos/id/${id}/info`).then(res => {
  //       const url = `https://picsum.photos/id/${id}/1000/700`;
  //       this.setState({ bgURL: url });
  //       this.props.setBgInfo(res.data);
  //     });
  //   });
  // }
  componentDidMount() {
    axios.get(`${process.env.REACT_APP_SERVER_URL}/bg`).then(res => {
      console.log("received")
      this.setState({ bgURL: res.data.imageURL + "&fm=jpg&w=1000&h=700&fit=crop" });
      this.props.setBgInfo(res.data);
    })
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