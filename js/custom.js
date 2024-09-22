function size() {
  if ($(window).width() <= 768) {
    $(".footer-links-wrapper").addClass("toggle");
  } else {
    $(".footer-links-wrapper").removeClass("toggle");
  }
}

$(window).on("resize", function (event) {
  return size();
});

$(document).on("click", ".toggle h3", function () {
  $(this).next("ul").slideToggle();
  $(this).toggleClass("expanded");
});
