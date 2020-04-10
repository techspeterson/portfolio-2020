import React from "react";
import { H1, H2 } from "../Components/Headers";
import CaptionedImage from "../Components/CaptionedImage";
import portrait from "../../assets/portrait-casual.jpg"

class AboutMe extends React.Component {
  render() {
    return (
      <div>
        <H1>Tessa Peterson</H1>
        <H2>Junior Developer</H2>

        <CaptionedImage image={portrait} caption="A portrait of Tessa" style={{ width: "40%", float: "left" }} />

        <p>Though I haven't always described myself as a developer, I've had an interest in coding since my childhood. I was on Neopets, learning how to create webpages for my virtual pets - this was definitely a formative experience for me.</p>

        <p>I've always been interested in creating things, in various mediums - art and creative writing are ongoing passions of mine, and have been for some time. I've also felt I've had a knack for the logical thought processes and syntax that go into coding, so it's only natural that those two things would coincide. In my free time, I've fiddled with CSS for blog layouts, dabbled in game development (video games are another of my hobbies), and other small coding projects.</p>

        <p>I studied Engineering and Science at Deakin University, but haven't yet entered the workforce outside of an internship and some freelance work in art and tutoring. Dissatisfaction with my existing career path led me to pursue one in Information Technology, which led me to Coder Academy, where I recently finished up the Fast Track bootcamp course.</p>

        <p>I still don't know exactly where I want to work, but I've always been interested in making things that are helpful, accessible and enjoyable to look at, and I'm open to exploring my options and discovering new possibilities.</p>
      </div>
    );
  }
}

export default AboutMe;