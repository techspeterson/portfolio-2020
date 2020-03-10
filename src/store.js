import React from "react";
import { createStore } from "redux";
import AboutMe from "./Screen/Windows/AboutMe";

const windows = {
  about: {
    title: "about-me.pdf",
    icon: "file-pdf",
    component: <AboutMe title="about-me.pdf" />,
    open: false,
    maximised: false
  }
}

const initialState = {
  currentWindows: []
}

function openWindow(name) {
  return { type: "OPEN_WINDOW", name: name }
}

function reducer(state = initialState, action) {
  let newState = { ...state };

  switch (action.type) {
    case "OPEN_WINDOW":
      let newWindows = [...state.currentWindows];
      let window = windows[action.name];
      window.open = true;
      window.maximised = true;
      newWindows.push(window);
      newState.currentWindows = newWindows;
      break;
    case "MINIMISE_WINDOW":
      break;
    case "MAXIMISE_WINDOW":
      break;
    case "CLOSE_WINDOW":
      break;
    default:
      break;
  }

  return newState;
}

export default createStore(reducer);

export { openWindow };