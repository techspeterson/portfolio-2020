import React from "react";
import Link from "../Components/Link";

import werewolfImg from "../../assets/werewolf.png";
import werewolfTh from "../../assets/werewolf-thumb.png";
import ttcImg from "../../assets/tic-tac-toe.png";
import ttcTh from "../../assets/tic-tac-toe-thumb.png";
import cluedoImg from "../../assets/cluedo-app.png";
import cluedoTh from "../../assets/cluedo-app-thumb.png";
import gameswapImg from "../../assets/gameswap.png";
import gameswapTh from "../../assets/gameswap-thumb.png";
import portfolioImg from "../../assets/portfolio-v1.png";
import portfolioTh from "../../assets/portfolio-v1-thumb.png";
import reviewImg from "../../assets/review-finder.png";
import reviewTh from "../../assets/review-finder-thumb.png";
import stoareeImg from "../../assets/stoaree.png";
import stoareeTh from "../../assets/stoaree-thumb.png";
import zenImg from "../../assets/zen-garden.png";
import zenTh from "../../assets/zen-garden-thumb.png";

import rubyIcon from "../../assets/ruby.svg";
import railsIcon from "../../assets/rails.svg";
import expressIcon from "../../assets/expressjs-icon.svg";
import mongoIcon from "../../assets/mongodb.svg";
import postgresIcon from "../../assets/postgresql.svg";

const techs = {
  css: {
    id: "css",
    label: "CSS3",
    faicon: "css3-alt"
  },
  html: {
    id: "html",
    label: "HTML5",
    faicon: "html5"
  },
  react: {
    id: "react",
    label: "React.js",
    faicon: "react"
  },
  ruby: {
    id: "ruby",
    label: "Ruby",
    svgicon: rubyIcon
  },
  js: {
    id: "js",
    label: "JavaScript",
    faicon: "js"
  },
  rails: {
    id: "rails",
    label: "Ruby on Rails",
    svgicon: railsIcon
  },
  express: {
    id: "express",
    label: "Express.js",
    svgicon: expressIcon
  },
  mongo: {
    id: "mongo",
    label: "MongoDB",
    svgicon: mongoIcon
  },
  aws: {
    id: "aws",
    label: "Amazon Web Services",
    faicon: "aws"
  },
  postgres: {
    id: "postgres",
    label: "PostgreSQL",
    svgicon: postgresIcon
  }
}

export default [
  {
    id: "stoaree",
    name: "Stoaree",
    thumb: stoareeTh,
    image: stoareeImg,
    site: "https://stoaree.netlify.com/",
    repo: "https://github.com/Stoaree",
    techs: [techs.express, techs.react, techs.mongo, techs.aws, techs.css],
    purpose: "Graded Group Assignment",
    institution: "Coder Academy",
    tabContent: <div>
      <p>
        Stoaree is a proof of concept site created for Mark Howard, based on his podcast <Link href="https://www.howiegames.com/">The Howie Games</Link>. The purpose of the site is to take the concept of the podcast (an interview show covering the guest's life story) and, based on a provided set of questions, allow anyone to record and upload their own life story.
      </p>
      <p>
        Users can sign up and immediately begin recording stories, optionally nominating another user of the site as the "interviewee". Users completing an interview navigate through the question tree based on their responses to given yes/no questions. Answers are recorded for each individual question and uploaded to an AWS S3 bucket. Stories can be browsed based on title, description and tags.
      </p>
    </div>
  },
  {
    id: "werewolf",
    name: "Werewolf Moderator Tool",
    thumb: werewolfTh,
    image: werewolfImg,
    site: "https://techspeterson-werewolf.netlify.com/",
    repo: "https://github.com/techspeterson/werewolf",
    techs: [techs.react, techs.css],
    purpose: "Personal Project",
    tabContent: <div>
      <p>I have a great time moderating games of Werewolf when the class at CA gets together for a board game night, but it's admittedly pretty tough to keep track of everything that goes on. I already keep notes on who has which role and what their choices are each night, so I thought, why not make an app to simplify the process?</p>

      <p>To start the game, the moderator enters the names of all the players and chooses their roles from the ones available (currently there's only a few to choose from). From there the game will alternate between day and night phases, letting the moderator choose all the night roles' targets from drop down lists to make the process quick and easy. The game will also inform you who is alive and dead, and if the win condition is met for either team.</p>

      <p>In the future I intend to add support for more of the roles available in the game, and include a timer for the day phases.</p>
    </div>
  },
  {
    id: "review-finder",
    name: "Movie Review Finder",
    thumb: reviewTh,
    image: reviewImg,
    repo: "https://github.com/techspeterson/movie-review-api",
    techs: [techs.js, techs.html, techs.css],
    purpose: "In-Class Exercise",
    institution: "Coder Academy",
    tabContent: <div>
      <p>
        This small project utilises the <Link href="https://developer.nytimes.com/">New York Times API</Link> to retrieve NYT movie reviews based on a search query. The script uses Axios to fetch the API data and displays summaries of the retrieved movie reviews (including images and links to the full reviews) to the browser.
      </p>
      <p>
        I created a similar project using <Link href="https://pokeapi.co/">PokéAPI</Link>, which is less elegantly styled but also allows the user to click on links to retrieve all Pokémon of a specific type in addition to searching by name or Pokédex number. The code for that project can be found <Link href="https://gist.github.com/techspeterson/d232ab522b22c1c09e3f7cd102ca5363">here.</Link>
      </p>
    </div>
  },
  {
    id: "tic-tac-toe",
    name: "Tic-Tac-Toe",
    thumb: ttcTh,
    image: ttcImg,
    site: "https://tictactoe-tp.netlify.com/",
    repo: "https://github.com/techspeterson/tic-tac-toe",
    techs: [techs.js, techs.html, techs.css],
    purpose: "In-Class Exercise",
    institution: "Coder Academy",
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
    id: "gameswap",
    name: "GameSwap Rails Marketplace",
    thumb: gameswapTh,
    image: gameswapImg,
    site: "https://gameswap-tp.herokuapp.com/",
    repo: "https://github.com/techspeterson/gameswap",
    techs: [techs.ruby, techs.rails, techs.postgres, techs.aws, techs.html, techs.css],
    purpose: "Graded Assignment",
    institution: "Coder Academy",
    tabContent: <div>
      <p>
        This Rails project is a two-way marketplace concept for the trading of used video games. Users can sign up and post listings for games they would like to sell, or purchase an existing listing. Users can quickly view their listings and purchase history, browse and search listings by a variety of parameters (game console, genre, price, etc.), and maintain a public profile including a game wishlist.
      </p>
    </div>
  },
  {
    id: "portfoliov1",
    name: "Portfolio Site V1",
    thumb: portfolioTh,
    image: portfolioImg,
    repo: "https://github.com/techspeterson/portfolio-site",
    site: "https://techspeterson-portfolio.netlify.com/",
    techs: [techs.html, techs.css],
    purpose: "Graded Assignment",
    institution: "Coder Academy",
    tabContent: <div>
      <p>
        The original version of my portfolio site. This portfolio was designed to showcase my web design skills while presenting information such as my personal interests, study history, and professional links.
      </p>
      <p>
        The site is required to be a static site that utilises our own manual CSS styling rather than the use of existing frameworks. Multiple reusable components need to be created and utilised and the site's style sheets are SRI protected.
      </p>
    </div>
  },
  {
    id: "zen",
    name: "Zen Garden",
    thumb: zenTh,
    image: zenImg,
    repo: "https://github.com/techspeterson/zen-garden",
    site: "https://techspeterson-zen-garden.netlify.com/",
    techs: [techs.css],
    purpose: "In-Class Exercise",
    institution: "Coder Academy",
    tabContent: <div>
      <p>
        My own version of the <Link href="http://www.csszengarden.com/">CSS Zen Garden</Link>. The challenge was to style the page using only CSS with no changes to the HTML. It was a fun experiment in figuring out how CSS positioning alone can drastically change the flow of the page.
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
    purpose: "Graded Assignment",
    institution: "Coder Academy",
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