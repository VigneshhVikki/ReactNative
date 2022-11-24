const buttonColors = ["red", "blue", "green", "yellow"];

let gamePattern = [];
let userClickedPattern = [];

let started = false;
let level = 0;

document.addEventListener("keypress", () => {
    if (!started) {
        document.getElementById("level-title").innerText =`Level ${level}`;
        started = true;
        nextSequence();

    }
});

document.querySelectorAll(".btn").forEach((item) => {
    item.addEventListener("click", (event) => {
      let userChosenColor = event.target.id;
      userClickedPattern.push(userChosenColor);

      animatePress(userChosenColor);
      playSound(userChosenColor);


      checkAnswer(userClickedPattern.length - 1);
    });
});

function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
         if (userClickedPattern.length === gamePattern.length) {
             setTimeout(() => {
                 nextSequence();
             }, 1000)
         }
    } else {
       playSound("wrong");
       document.querySelector("body").classList.add("game-over");
       document.getElementById("level-title").innerText =
         "Game Over, Press Any Key to restart";
         setTimeout(() => {
            document.querySelector("body").classList.remove("game-over");
}, 200); 
startOver();
   }
 }

function fadeIn(time, id)  {
    let fade = document.getElementById(id);
    setTimeout(() => {
     fade.style.opacity = 0.1;
    }, time);

}

    function fadeOut(time, id){
        let fade = document.getElementById(id);
        setTimeout(() => {
        fade.style.opacity = 1;
        }, time);
}

function nextSequence() {
    userClickedPattern = [];
    level++;
    document.getElementById("level-title").innerText = `Level ${level}`;
    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);

    fadeIn(200, randomChosenColor);
    fadeOut(400, randomChosenColor);


    playSound(randomChosenColor);
}

function playSound(name) {
     let audio = new Audio("sound/" + name + ".mp3");
     audio.play();
}

function animatePress(currentColor) {
    document.getElementById(currentColor).classList.add("pressed");

    setTimeout(() => {
        document.getElementById(currentColor).classList.remove("pressed");
  }, 200);
}

function startOver(){
    level = 0;
    gamePattern = [];
    started = false;
}