
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

// Detecting button clicks
$('.btn').click(function(event) {
  var userChosenColor = $(this).attr('id');

  userClickedPattern.push(userChosenColor);

  checkAnswer(userClickedPattern.length);

  animatePress(userChosenColor);
  playSound(userChosenColor);
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

function checkAnswer(currentLevel) {
  var index = currentLevel - 1;
  if (gamePattern[index] !== userClickedPattern[index]) {
    playSound("wrong");

    $("h1").text("Game Over, Press Any Key to Restart");
    $('body').addClass('game-over');
    setTimeout(function() {
      $('body').removeClass('game-over');
    }, 200);

    startOver();
  }

  if (level === currentLevel) {
    userClickedPattern = [];
    setTimeout(nextSequence, 750);
  }
}

function startOver() {
  gamePattern = [];
  userClickedPattern = [];
  started = false;
  level = 0;

}

function playSound(name) {
  var sound = new Audio('sounds/' + name + '.mp3');
  sound.play();
}

function animatePress(currentColor) {
  $('#' + currentColor).addClass('pressed');
  setTimeout(function() {
    $('#' + currentColor).removeClass('pressed');
  }, 100);
}
