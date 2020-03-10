import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser, faImages, faCode } from "@fortawesome/free-solid-svg-icons";
import { fab } from '@fortawesome/free-brands-svg-icons';
import './App.css';

import Screen from "./Screen/Screen";

library.add(faUser, faImages, faCode, fab);

function App() {
  return (
    <div className="App">
      <Screen />
    </div>
  );
}

export default App;
