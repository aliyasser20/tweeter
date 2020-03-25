// Function handling new tweet submission
const newTweetHandler = () => {
  $(".new-tweet-form").on("submit", function(e) {
    // prevent default submission
    e.preventDefault();
    
    // AJAX POST request
    $.ajax({
      method: "POST",
      url: "/tweets",
      data: $(this).serialize()
    })
      .then(console.log("posted"));
  });
};

export default newTweetHandler;