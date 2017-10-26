$(document).ready(function() {

  var randomNames = [];
  var allNames = [];

  $("#enterButton").click(function() {
    randomNames = [];
    allNames = [
      $("#text1").val(),
      $("#text2").val(),
      $("#text3").val(),
      $("#text4").val(),
      $("#text5").val(),
      $("#text6").val(),
      $("#text7").val(),
      $("#text8").val(),
      $("#text9").val()
    ];

    for (var i = 0; i < 9; i++) {
      var arrayNumber = randomArrayNumber();

      randomNames.push(allNames[arrayNumber]);

      allNames.splice(arrayNumber, 1);
    }

    console.log(randomNames);

    for (var j = 0; j < randomNames.length; j++) {
      if (j != 8) {
        console.log(randomNames[j] + "-" + randomNames[j + 1]);
      } else {
        console.log(randomNames[8] + "-" + randomNames[0]);
      }
    }
  });

  function randomArrayNumber() {
    return Math.floor(Math.random() * allNames.length);
  }

});