import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser, faPencilAlt, faPaperPlane, faCode, faBatteryFull, faBatteryThreeQuarters, faBatteryHalf, faBatteryQuarter, faBatteryEmpty, faWifi, faWindowMaximize, faWindowClose, faWindowMinimize, faFilePdf, faFile, faEnvelope, faAtom, faStar, faReply, faReplyAll, faExternalLinkSquareAlt } from "@fortawesome/free-solid-svg-icons";
import { fab } from '@fortawesome/free-brands-svg-icons';
import { Provider } from "react-redux";

import store from "./store";
import Monitor from "./Monitor";

library.add(faUser, faPencilAlt, faPaperPlane, faCode, faBatteryFull, faBatteryThreeQuarters, faBatteryHalf, faBatteryQuarter, faBatteryEmpty, faWifi, faWindowMaximize, faWindowClose, faWindowMinimize, faFilePdf, faAtom, faStar, faFile, faEnvelope, faReply, faReplyAll, faExternalLinkSquareAlt, fab);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Monitor />
      </Provider>
    );
  }
}

export default App;
