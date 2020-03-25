// Function that handles nav items
export const navHandler = () => {
  $(".new-tweet-nav").on("click", function() {
    console.log("clicked");

    // display or hide new tweet form
    displayHideNewTweet();
  });
};

// Function that manages UI for new tweet
export const displayHideNewTweet = () => {
  // new tweet form displayed or not
  if ($(".new-tweet").css("display") === "none") {
    // scroll to top of page
    window.scroll(0, 0);

    // add active class to write new tweet button
    $(".new-tweet-nav").addClass("active");

    // slide down form
    $(".new-tweet").slideDown("fast");

    // focus on text area
    $("#tweet-text").focus();
  } else {
    // remove active class from write new tweet button
    $(".new-tweet-nav").removeClass("active");

    //  slide up form
    $(".new-tweet").slideUp("fast");
    
    // blur out of text area
    $("#tweet-text").blur();

    // hide message error if present
    $(".error-container").hide();

    // empty text area
    $("#tweet-text").val("");

    // reset counter
    $(".counter").val("140");
    $(".counter").removeClass("over");
  }
};


