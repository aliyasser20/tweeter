import { loadTweets } from "./tweets.js";

// Function handling new tweet submission
const newTweetHandler = () => {
  $(".new-tweet-form").on("submit", function(e) {
    // prevent default submission
    e.preventDefault();

    // text area input by user
    const tweetInput = $("#tweet-text").val();
    
    // post if validation passes, otherwise display error message
    if (tweetInput && tweetInput.length > 0 && tweetInput.length <= 140) {
      // AJAX POST request
      $.ajax({
        method: "POST",
        url: "/tweets",
        data: $(this).serialize()
      })
        .then(() => {
          // slide up any error message
          $(".error-container").slideUp("fast");

          // empty text area
          $("#tweet-text").val("");

          // reset counter
          $(".counter").val("140");

          // load tweets again
          loadTweets();

          // blur out of form button
          $(".new-tweet-form button").blur();
        });
    } else {
      // error message depending on case
      const message = `Error: ${tweetInput.length === 0 ? "Field can not be empty!" : "Tweet is too long!"}`;
     
      // hide message for error change case
      $(".error-container").hide();

      // slide down error message
      $(".error-container").slideDown({
        duration: "fast",
        start: function() {
          $(this).css({
            display: "flex"
          });
        }
      });

      $(".error-container p").text(message);

      // blur out of form button
      $(".new-tweet-form button").blur();
    }
  });
};

export default newTweetHandler;