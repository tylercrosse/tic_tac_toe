var clickCount = 0;

$(document).ready(function() {

  // var turn = function(){
  //   if (clickCount % 2 === 0) {
  //     console.log("x");
  //   }
  // };
  // on click add or remove class .active to td's

  $("td").on("click", function() {
    // if ($(this).hasClass("active")) {
    //   $(this).removeClass("active");
    // } else {
    $(this).addClass("active");
    clickCount++;
    console.log(clickCount);
    if (clickCount % 2 === 0) {
      console.log("o");
    }
    if (clickCount % 2 !== 0) {
      console.log("x");
    }
  });

  //when you press reset remove class active from all td's
  $(".reset").on("click", function() {
    $("td").removeClass("active");
  });

});
