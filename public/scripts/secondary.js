// Function that creates secondary page functions
const secondary = () => {
  // scroll event listener
  $(document).on("scroll", () => {

    // if page is at top (100 scroll y), hide scroll up button. Otherwise show button
    if (window.scrollY > 100) {
      $(".scroll-up").removeClass("hidden");
    } else {
      $(".scroll-up").addClass("hidden");
    }
  });

  // on scroll up button click, scroll to top of page (0 scroll y)
  $(".scroll-up").on("click", () => {
    window.scroll(0, 0);
  });
};

export default secondary;