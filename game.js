
var gamePattern = [];
var userClickedPattern =[];
var started = false;
var level = 0;

var buttonColors = ["red", "blue", "green", "yellow"];

// Detecting Keydown at the start of the game
$(document).keydown(function(event) {
  if (!started) {
    nextSequence();
    started = true;
  }
});

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColor = buttonColors[randomNumber];

  gamePattern.push(randomChosenColor);

  level++;

  $('h1').text('Level ' + level);

  setTimeout(function() {
    $("#" + randomChosenColor).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);
  }, 500);
}

function playSound(name) {
  var sound = new Audio('sounds/' + name + '.mp3');
  sound.play();
}
