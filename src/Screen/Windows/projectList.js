import React from "react";
import werewolfImg from "../../assets/werewolf.png";
import werewolfTh from "../../assets/werewolf-thumb.png";
import ttcImg from "../../assets/tic-tac-toe.png";
import ttcTh from "../../assets/tic-tac-toe-thumb.png";
import cluedoImg from "../../assets/cluedo-app.png";
import cluedoTh from "../../assets/cluedo-app-thumb.png";

import rubyIcon from "../../assets/ruby.svg";

const techs = {
  css: ["CSS3", "css3-alt"],
  html: ["HTML5", "html5"],
  react: ["React.js", "react"],
  js: ["JavaScript", "js"],
  ruby: ["Ruby", null, rubyIcon]
}

export default [
  {
    id: "werewolf",
    name: "Werewolf Moderator Tool",
    thumb: werewolfTh,
    image: werewolfImg,
    site: "https://techspeterson-werewolf.netlify.com/",
    repo: "https://github.com/techspeterson/werewolf",
    techs: [techs.react, techs.html, techs.css],
    tabContent: <div>
      <p>I have a great time moderating games of Werewolf when the class at CA gets together for a board game night, but it's admittedly pretty tough to keep track of everything that goes on. I already keep notes on who has which role and what their choices are each night, so I thought, why not make an app to simplify the process?</p>

      <p>To start the game, the moderator enters the names of all the players and chooses their roles from the ones available (currently there's only a few to choose from). From there the game will alternate between day and night phases, letting the moderator choose all the night roles' targets from drop down lists to make the process quick and easy. The game will also inform you who is alive and dead, and if the win condition is met for either team.</p>

      <p>In the future I intend to add support for more of the roles available in the game, and include a timer for the day phases.</p>
    </div>
  },
  {
    id: "tic-tac-toe",
    name: "Tic-Tac-Toe",
    thumb: ttcTh,
    image: ttcImg,
    site: "https://tictactoe-tp.netlify.com/",
    repo: "https://github.com/techspeterson/tic-tac-toe",
    techs: [techs.js],
    tabContent: <div>
      <p>
        The classic Javascript project - a small browser version of tic-tac-toe. The player can click on a square on the board to mark it, and the CPU will respond with a move of its own. An alert will appear once the game's outcome is decided! The game also tracks the player's win/loss count and the player can choose to play as noughts or crosses.
      </p>

      <p>
        Presently the CPU's moves are selected completely at random but I would like to implement an actual AI in the future. Otherwise, not bad for a couple afternoon's work.
      </p>
    </div>
  },
  {
    id: "cluedo",
    name: "Cluedo Terminal App",
    thumb: cluedoTh,
    image: cluedoImg,
    repo: "https://github.com/techspeterson/cluedo-app",
    techs: [techs.ruby],
    tabContent: <div>
      <p>
        An app that runs in the terminal and lets the user play a stripped-down version of Cluedo. While there's no game board and the CPU players don't actually play against you, they're still happy to show you their cards whenever you make your guess about the conditions of the murder. An ingame checklist will keep track of the cards you've seen. Get your final accusation right to win the game!
      </p>

      <p>
        The user can choose their player character as well as the number of CPU players in the game. Game data can be saved to/loaded from a JSON file. Command line arguments can be used to streamline the process.
      </p>

      <p>
        If given the opportunity to continue development of the app, I would like to add in a full game board for the player to navigate, as well as intelligent CPU players to compete against.
      </p>
    </div>
  }
]