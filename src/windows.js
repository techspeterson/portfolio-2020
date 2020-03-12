import React from "react";
import AboutMe from "./Screen/Windows/AboutMe";
import Credits from "./Screen/Windows/Credits";

const aboutTitle = "about-me.pdf";
const creditsTitle = "credits.txt";

const windows = {
  about: {
    title: aboutTitle,
    icon: "file-pdf",
    component: <AboutMe title={aboutTitle} />,
    open: false,
    minimised: false
  },
  credits: {
    title: creditsTitle,
    icon: "file-pdf",
    component: <Credits title={creditsTitle} />,
    open: false,
    minimised: false
  }
}

export default windows;