// When hamburger icon is clicked
$("#ham").click(function() {
  if ($("#sideNav").hasClass("hidden")) {
    $("#sideNav").removeClass("hidden");
  } else {
    $("#sideNav").addClass("hidden");
  }
});

// When X icon is clicked
$("#menuX").click(function() {
  $("#sideNav").addClass("hidden");
});
