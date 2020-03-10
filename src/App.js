import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser, faPencilAlt, faPaperPlane, faCode, faBatteryFull, faBatteryThreeQuarters, faBatteryHalf, faBatteryQuarter, faBatteryEmpty, faWifi, faWindowMaximize, faWindowClose, faWindowMinimize, faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { fab } from '@fortawesome/free-brands-svg-icons';
import { Provider } from "react-redux";
import './App.css';

import store from "./store";
import Screen from "./Screen/Screen";

library.add(faUser, faPencilAlt, faPaperPlane, faCode, faBatteryFull, faBatteryThreeQuarters, faBatteryHalf, faBatteryQuarter, faBatteryEmpty, faWifi, faWindowMaximize, faWindowClose, faWindowMinimize, faFilePdf, fab);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Screen />
      </div>
    </Provider>
  );
}

export default App;
