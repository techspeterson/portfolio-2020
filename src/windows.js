import React from "react";
import AboutMe from "./Screen/Windows/AboutMe";

const aboutTitle = "about-me.pdf";

const windows = {
  about: {
    title: aboutTitle,
    icon: "file-pdf",
    component: <AboutMe title={aboutTitle} />,
    open: false,
    minimised: false
  }
}

export default windows;