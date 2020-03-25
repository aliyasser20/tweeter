import characterCounter from "./composer-char-counter.js";
import { renderTweets } from "./tweets.js";

// Function to run when page is ready
const onReady = () => {
  // Execute new tweet character counter
  characterCounter();

  // Render all tweets
  renderTweets(data);
};

// Fake data taken from initial-tweets.json
const data = [
  {
    "user": {
      "name": "Newton",
      "avatar": "../images/man-1.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatar": "../images/man-2.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
];

// Run when page is ready
$(document).ready(onReady);
