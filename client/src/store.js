import { createStore } from "redux";

import windows from "./windows";

const initialState = {
  currentWindows: [],
  bgInfo: undefined,
  palette: undefined
}

function openWindow(name) {
  return { type: "OPEN_WINDOW", name: name }
}

function closeWindow(index) {
  return { type: "CLOSE_WINDOW", index: index }
}

function setBgInfo(data) {
  return { type: "SET_BG_INFO", data: data }
}

function setPalette(palette) {
  return { type: "SET_PALETTE", palette: palette }
}

function setActiveWindow(index) {
  return { type: "SET_ACTIVE_WINDOW", index: index }
}

function reducer(state = initialState, action) {
  let newState = { ...state };
  let newWindows = [...state.currentWindows];

  switch (action.type) {
    case "OPEN_WINDOW":
      let window = Object.create(windows[action.name]);
      window.open = true;
      newWindows = newWindows.map(window => {
        window.active = false;
        return window;
      });
      window.active = true;
      newWindows.push(window);
      newState.currentWindows = newWindows;
      break;
    case "SET_ACTIVE_WINDOW":
      newWindows = newWindows.map(window => {
        window.active = false;
        return window;
      });
      newWindows[action.index].active = true;
      newState.currentWindows = newWindows;
      break;
    case "CLOSE_WINDOW":
      newWindows.splice(action.index, 1);
      if (newWindows.length) {
        newWindows[newWindows.length - 1].active = true;
      }
      newState.currentWindows = newWindows;
      break;
    case "SET_BG_INFO":
      newState.bgInfo = action.data;
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

export { openWindow, setActiveWindow, closeWindow, setBgInfo, setPalette };