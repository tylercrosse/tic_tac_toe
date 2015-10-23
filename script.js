var clickCount = 0;

var indexArray = [
  ["e11", "e12", "e13"],
  ["e21", "e22", "e23"],
  ["e31", "e32", "e33"],
  ["e11", "e21", "e31"],
  ["e12", "e22", "e32"],
  ["e13", "e23", "e33"],
  ["e11", "e22", "e33"],
  ["e13", "e22", "e31"]
];

var getElementClass = function(element) {
  return $("#" + element).attr("class");
};

var checkWinner = function () {
  for (var i = 0; i < indexArray.length; i++) {
    var resultsArray = indexArray[i].map(getElementClass);
    resultsString = resultsArray.toString();
    if (resultsString == "x,x,x") {
      alert("X Won!");
    } else if (resultsString == "o,o,o") {
      alert("O Won!");
    }
  }
};

$(document).ready(function() {

  $("td").on("click", function() {
    if (!$(this).hasClass("x") && !$(this).hasClass("o")) {
      clickCount++;

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
    checkWinner();
  });

  //when you press reset remove class active from all td's
  $(".reset").on("click", function() {
    $("td").removeClass();
    $("td").html("");
    clickCount = 0;
  });

});
