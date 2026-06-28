var gamePattern = [];
var buttonColors = ["red", "green", "yellow", "blue"];

function nextSequence() {

    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColors[randomNumber];

    gamePattern.push(randomChosenColor);

    document.querySelector("#" + randomChosenColor)
        .classList.add("pressed");

    setTimeout(function () {
        document.querySelector("#" + randomChosenColor)
            .classList.remove("pressed");
    }, 100);

    var audio = new Audio("sounds/" + randomChosenColor + ".mp3");
    audio.play();
}
