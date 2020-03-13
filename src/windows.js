import React from "react";
import AboutMe from "./Screen/Windows/AboutMe";
import Credits from "./Screen/Windows/Credits";
import Contact from "./Screen/Windows/Contact";

// const aboutTitle = "about-me.pdf";
// const creditsTitle = "credits.txt";

const windows = {
  about: {
    title: "about-me.pdf",
    icon: "file-pdf",
    component: <AboutMe />,
    open: false,
    active: false,
    minimised: false
  },
  credits: {
    title: "credits.txt",
    icon: "file",
    component: <Credits />,
    open: false,
    active: false,
    minimised: false,
    style: { width: "60%", height: "unset" }
  },
  contact: {
    title: "Mail - Contact",
    icon: "file",
    component: <Contact />,
    open: false,
    active: false,
    minimised: false
  }
}

export default windows;