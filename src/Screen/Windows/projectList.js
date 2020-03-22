import React from "react";
import werewolfImg from "../../assets/werewolf.png";
import werewolfTh from "../../assets/werewolf-thumb.png";
import ttcImg from "../../assets/tic-tac-toe.png";
import ttcTh from "../../assets/tic-tac-toe-thumb.png";

export default [
  {
    id: "werewolf",
    name: "Werewolf Moderator Tool",
    thumb: werewolfTh,
    image: werewolfImg,
    site: "https://techspeterson-werewolf.netlify.com/",
    repo: "https://github.com/techspeterson/werewolf",
    techs: ["react"],
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
    techs: ["js"],
    tabContent: <div>
      <p>
        The classic Javascript project - a small browser version of tic-tac-toe. The player can click on a square on the board to mark it, and the CPU will respond with a move of its own. An alert will appear once the game's outcome is decided! The game also tracks the player's win/loss count and the player can choose to play as noughts or crosses.
      </p>

      <p>
        Presently the CPU's moves are selected completely at random but I would like to implement an actual AI in the future. Otherwise, not bad for a couple afternoon's work.
      </p>
    </div>
  }
]