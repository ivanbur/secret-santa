$(document).ready(function() {

  var randomNames = [];
  var allNames = [];
  var amountOfPeople = prompt("How many people are participating?");


  $("numberOfPeopleButton").click(function() {
    for (var i = 1; i <= amountOfPeople; i++) {
        $("body").append("
            <br/>
            <input id = 'text" + i + "' type = 'text' />
            <br/>")
    }

    $("button").remove();
    $("body").append("<button id = 'enterButton' type = 'button'>Enter</button>")
  });


  $("#enterButton").click(function() {
    randomNames = [];
    allNames = [];
    // allNames = [
    //   $("#text1").val(),
    //   $("#text2").val(),
    //   $("#text3").val(),
    //   $("#text4").val(),
    //   $("#text5").val(),
    //   $("#text6").val(),
    //   $("#text7").val(),
    //   $("#text8").val(),
    //   $("#text9").val()
    // ];

    for (var names = 1; names <= amountOfPeople; names++) {
      allNames.push($("#text" + names).val());
    }

    for (var i = 0; i < 9; i++) {
      var arrayNumber = randomArrayNumber();

      randomNames.push(allNames[arrayNumber]);

      allNames.splice(arrayNumber, 1);
    }

    console.log(randomNames);

    for (var j = 0; j < randomNames.length; j++) {
      if (j != (randomNames.length - 1) ) {
        console.log(randomNames[j] + "-" + randomNames[j + 1]);
      } else {
        console.log(randomNames[j] + "-" + randomNames[0]);
      }
    }

    sendMail();
  });

  function randomArrayNumber() {
    return Math.floor(Math.random() * allNames.length);
    console.log(allNames.length);
  }

  function sendMail() {
    for (var k = 0; k < randomNames.length; k++) {
      if (k != (randomNames.length - 1) ) {
          emailjs.send("default_service","secret_santa",{
          email: randomNames[k], 
          bodyText: randomNames[k + 1]
        });
      } else {
        emailjs.send("default_service","secret_santa",{
          email: randomNames[k], 
          bodyText: randomNames[0]
        });
      }
    }

    console.log("hi")
    
  }

});