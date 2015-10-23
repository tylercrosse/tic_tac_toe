var clickCount = 0;
var getVals = function() {
  var row1 = [];
  row1.push($("#e11").attr("class"));
  row1.push($("#e13").attr("class"));
  row1.push($("#e12").attr("class"));
  console.log(row1);
};

$(document).ready(function() {

  // "__'s turn"

  $("td").on("click", function() {
    if (!$(this).hasClass("x") && !$(this).hasClass("o")) {
      clickCount++;
      console.log(clickCount);

      //add something
      if (clickCount % 2 === 0) {
        $(this).addClass("o");
        $(this).html("<h1>O</h1>");
        $("#whosturn").html("X's");
      }
      if (clickCount % 2 !== 0) {
        $(this).addClass("x");
        $(this).html("<h1>X</h1>");
        $("#whosturn").html("O's");
      }
    }
  });

  //when you press reset remove class active from all td's
  $(".reset").on("click", function() {
    $("td").removeClass();
    $("td").html("");
    clickCount = 0;
  });

});
