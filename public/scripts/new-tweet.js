// Function handling new tweet submission
const newTweetHandler = () => {
  $(".new-tweet-form").on("submit", function(e) {
    // prevent default submission
    e.preventDefault();

    // text area input by user
    const tweetInput = $("#tweet-text").val();
    
    console.log(tweetInput.length);
    // post if validation passes, otherwise display error message
    if (tweetInput && tweetInput.length > 0 && tweetInput.length <= 140) {
      // AJAX POST request
      $.ajax({
        method: "POST",
        url: "/tweets",
        data: $(this).serialize()
      })
        .then(console.log("posted"));
    } else {
      tweetInput.length === 0 ? alert("Error: Field can not be empty!") : alert("Error: Tweet is too long!");
    }
  });
};

export default newTweetHandler;