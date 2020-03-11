import React from 'react';
import axios from "axios";
import styles from './App.module.css';

import Screen from "./Screen/Screen";
import StartupScreen from "./Screen/StartupScreen";

class Monitor extends React.Component {
  state = {
    bgURL: null
  }

  componentDidMount() {
    axios.get("https://picsum.photos/1000/700").then(res => {
      const id = res.headers["picsum-id"];
      axios.get(`https://picsum.photos/id/${id}/info`).then(res => {
        this.setState({ bgURL: `https://picsum.photos/id/${id}/1000/700` });
      });
    });
  }

  renderScreen = () => {
    if (this.state.bgURL) {
      return (
        <Screen bgURL={this.state.bgURL} />
      )
    }
    else {
      return (
        <StartupScreen />
      )
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

export default Monitor;