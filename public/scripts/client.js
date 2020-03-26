import characterCounter from "./composer-char-counter.js";
import { loadTweets } from "./tweets.js";
import newTweetHandler from "./new-tweet.js";
import { navHandler } from "./nav.js";
import secondary from "./secondary.js";

// Function to run when page is ready
const onReady = () => {
  // Load navigation items handler
  navHandler();

  // Load secondary
  secondary();

  // Load new tweet character counter
  characterCounter();

  // Load and render all tweets
  loadTweets();

  // Load new tweet handler
  newTweetHandler();
};

// Run when page is ready
$(document).ready(onReady);
