var clickCount = 0;

$(document).ready(function() {

  // "__'s turn"

  $("td").on("click", function() {
    $(this).addClass("active");
    clickCount++;
    console.log(clickCount);
    if (clickCount % 2 === 0) {
      console.log("o");
      $(this).addClass("o");
      $(this).html("<h1>O</h1>");
      $("#whosturn").html("X's");
    }
    if (clickCount % 2 !== 0) {
      console.log("x");
      $(this).addClass("x");
      $(this).html("<h1>X</h1>");
      $("#whosturn").html("O's");
    }
  });

  //when you press reset remove class active from all td's
  $(".reset").on("click", function() {
    $("td").removeClass();
    $("td").html("");
    clickCount = 0;
  });

});
