import React from "react";
import AboutMe from "./Screen/Windows/AboutMe";
import Credits from "./Screen/Windows/Credits";
import Contact from "./Screen/Windows/Contact";
import Projects from "./Screen/Windows/Projects";
import styles from "./Screen/Window/Window.module.css";

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
    class: styles.credits
  },
  contact: {
    title: "Inbox - Contact",
    icon: "inbox",
    component: <Contact />,
    open: false,
    active: false,
    minimised: false
  },
  projects: {
    title: "Projects",
    icon: "folder",
    component: <Projects />,
    open: false,
    active: false,
    minimised: false
  }
}

export default windows;