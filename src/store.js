import { createStore } from "redux";

import windows from "./windows";

const initialState = {
  currentWindows: [],
  bgURL: undefined,
  palette: undefined
}

function openWindow(name) {
  return { type: "OPEN_WINDOW", name: name }
}

function closeWindow() {
  return { type: "CLOSE_WINDOW" }
}

function setBgURL(url) {
  return { type: "SET_BG_URL", url: url }
}

function setPalette(palette) {
  return { type: "SET_PALETTE", palette: palette }
}

function reducer(state = initialState, action) {
  let newState = { ...state };
  let newWindows = [...state.currentWindows];

  switch (action.type) {
    case "OPEN_WINDOW":
      let window = windows[action.name];
      window.open = true;
      newWindows.push(window);
      newState.currentWindows = newWindows;
      break;
    case "MINIMISE_WINDOW":
      break;
    case "MAXIMISE_WINDOW":
      break;
    case "CLOSE_WINDOW":
      newWindows.pop();
      newState.currentWindows = newWindows;
      break;
    case "SET_BG_URL":
      newState.bgURL = action.url;
      break;
    case "SET_PALETTE":
      newState.palette = action.palette;
      break;
    default:
      break;
  }

  return newState;
}

export default createStore(reducer);

export { openWindow, closeWindow, setBgURL, setPalette };