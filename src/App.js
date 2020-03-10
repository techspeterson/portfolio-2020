import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser, faPencilAlt, faPaperPlane, faCode, faBatteryFull, faBatteryThreeQuarters, faBatteryHalf, faBatteryQuarter, faBatteryEmpty, faWifi, faWindowMaximize, faWindowClose, faWindowMinimize } from "@fortawesome/free-solid-svg-icons";
import { fab } from '@fortawesome/free-brands-svg-icons';
import './App.css';

import Screen from "./Screen/Screen";

library.add(faUser, faPencilAlt, faPaperPlane, faCode, faBatteryFull, faBatteryThreeQuarters, faBatteryHalf, faBatteryQuarter, faBatteryEmpty, faWifi, faWindowMaximize, faWindowClose, faWindowMinimize, fab);

function App() {
  return (
    <div className="App">
      <Screen />
    </div>
  );
}

export default App;
