import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser, faPencilAlt, faPaperPlane, faCode, faBatteryFull, faBatteryThreeQuarters, faBatteryHalf, faBatteryQuarter, faBatteryEmpty, faWifi, faWindowMaximize, faWindowClose, faWindowMinimize, faFilePdf, faAtom } from "@fortawesome/free-solid-svg-icons";
import { fab } from '@fortawesome/free-brands-svg-icons';
import { Provider } from "react-redux";
import axios from "axios";
import styles from './App.module.css';

import store from "./store";
import Screen from "./Screen/Screen";
import StartupScreen from "./Screen/StartupScreen";

library.add(faUser, faPencilAlt, faPaperPlane, faCode, faBatteryFull, faBatteryThreeQuarters, faBatteryHalf, faBatteryQuarter, faBatteryEmpty, faWifi, faWindowMaximize, faWindowClose, faWindowMinimize, faFilePdf, faAtom, fab);

class App extends React.Component {
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
      <Provider store={store}>
        <div className={styles.monitor}>
          <div className={styles.screenContainer}>
            {this.renderScreen()}
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
