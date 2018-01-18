var randomNames = [];
var allNames = [];
var amountOfPeople = 0;

function enterButton() {
  console.log("hey");

  randomNames = [];
  allNames = [];

  for (var names = 1; names <= amountOfPeople; names++) {
    allNames.push($("#text" + names).val());
    console.warn("whatup")
  }

  for (var i = 0; i < amountOfPeople; i++) {
    var arrayNumber = Math.floor(Math.random() * allNames.length);

    console.error("1 - allNames: " + allNames.length + " - randomNames: " + randomNames.length)

    randomNames.push(allNames[arrayNumber]);

    console.error("2 - allNames: " + allNames.length + " - randomNames: " + randomNames.length)

    allNames.splice(arrayNumber, 1);

    console.error("3 - allNames: " + allNames.length + " - randomNames: " + randomNames.length)
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
};

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

  console.log("Sent!");
    
}

$(document).ready(function() {

  $("#numberOfPeopleButton").click(function() {
    amountOfPeople = prompt("How many people are participating?");

    for (var i = 1; i <= amountOfPeople; i++) {
        $("body").append("<br/>Person " + i + "\'s email: <input id = 'text" + i + "' type = 'text' /><br/>")
    }

    $("button").remove();
    $("body").append("<br/><button id = 'enterButton' type = 'button' onclick='enterButton()'>Enter</button>")
  });
});