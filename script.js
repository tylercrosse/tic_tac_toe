$(document).ready(function() {

// on click add or remove class .active to td's

  $("td").on("click", function() {
    // if ($(this).hasClass("active")) {
    //   $(this).removeClass("active");
    // } else {
      $(this).addClass("active");
    // }
  });

//when you press reset remove class active from all td's
  $(".reset").on("click", function(){
    $("td").removeClass("active");
  });

});
