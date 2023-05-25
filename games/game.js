var buttonColors=["red", "blue", "green", "yellow"];
var gamePattern=[];
var level=0;
var userClickedPattern=[];
var gameStarted=false;
function nextSequence () {
    userClickedPattern=[];
    var randomNumber=Math.floor((Math.random())*4);
    var randomColorChosen=buttonColors[randomNumber];
    gamePattern.push(randomColorChosen);
    $("#" + randomColorChosen).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomColorChosen);
    level++;
    $("h1").text("Level "+level);
    gameStarted=true;
}

$(".btn").click(function() {
    var userChosenColor=this.id;
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer(userClickedPattern.length-1);
})

function animatePress(buttonId){
    $("#"+buttonId).addClass("pressed");
    setTimeout(function () {
        $("#"+buttonId).removeClass("pressed");
    },100);
}

function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
  }

$(document).keypress(function(){
    if (!gameStarted) {
        nextSequence();
        gameStarted = true;
      }
})
function checkAnswer(currentLevel) {
    if (userClickedPattern[currentLevel]===gamePattern[currentLevel]) {
        console.log("success");
        if (userClickedPattern.length===gamePattern.length) {
            setTimeout(function () {
                nextSequence(); 
            },1000)
        }
    }else{
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        },200);
        $("h1").text("Game Over, Press Any Key to Restart");
        startOver();


    }
}
function startOver() {
    level=0;
    gamePattern=[];
    gameStarted=false;
}