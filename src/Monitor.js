import React from 'react';
import axios from "axios";
import { connect } from "react-redux";

import styles from './App.module.css';
import Screen from "./Screen/Screen";
import StartupScreen from "./Screen/StartupScreen";
import { setBgURL } from "./store";

function mapStateToProps(state) {
  return { bgURL: state.bgURL }
}

const mapDispatchToProps = {
  setBgURL
}

class Monitor extends React.Component {
  state = {
    bgURL: null
  }

  componentDidMount() {
    axios.get("https://picsum.photos/1000/700").then(res => {
      const id = res.headers["picsum-id"];
      axios.get(`https://picsum.photos/id/${id}/info`).then(res => {
        this.props.setBgURL(`https://picsum.photos/id/${id}/1000/700`);
      });
    });
  }

  renderScreen = () => {
    if (this.props.bgURL) {
      return (
        <Screen bgURL={this.props.bgURL} />
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

export default connect(mapStateToProps, mapDispatchToProps)(Monitor);