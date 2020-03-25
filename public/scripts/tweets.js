import { flagIcon, retweetIcon, likeIcon } from "./svgIcons.js";
import { ageCalc } from "./helpers.js";

// Function that creates and returns single tweet element
const createTweetElement = (tweetObj) => {
  // Create tweet element
  const $tweet = $("<article>").addClass("tweet");

  // Add tweet content
  $tweet.append(`
      <header>
        <div class="user">
          <img src="${tweetObj.user.avatar}" alt="avatar" />
          <p>${tweetObj.user.name}</p>
        </div>
        <p class="username">${tweetObj.user.handle}</p>
      </header>
      <main>
        <p class="tweet-content">${tweetObj.content.text}</p>
      </main>
      <footer>
        <p class="age">${ageCalc(tweetObj.created_at)}</p>
        <div class="buttons">
          <button class="flag">
            ${flagIcon}
          </button>
          <button class="retweet">
            ${retweetIcon}
          </button>
          <button class="like">
            ${likeIcon}
          </button>
        </div>
      </footer>
  `);

  return $tweet;
};

// Function thats loops through tweets and renders them to page
const renderTweets = (tweets) => {
  $("#tweets").empty();
  tweets.forEach(tweet =>  $("#tweets").append(createTweetElement(tweet)));
};

// Function that loads tweets and then calls render function
export const loadTweets = () => {
  // AJAX GET request
  $.ajax({
    method: "GET",
    url: "/tweets",
  })
    .then((resp) => {
      // On request success call render function
      renderTweets(resp);
    });
};