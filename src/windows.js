import React from "react";
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

export default windows;