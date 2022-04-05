
//AUTHOR: OM Kudalkar
//javascript for logic to determine if user guess is correct or not.

var answer; //variable to keep track of answer.
var prev_guess; // to tell user their last guess.
var attempts = 0; // total attempts


//this function is run when the page is reloaded. Creates a random number to guess.
//The max and min are both inclusive.
//min max

/**
* this function is run when the page is reloaded. Creates a random number to guess.
* The max and min are both inclusive.
* min and max are the bounds for making the random number.
*/
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  answer = Math.floor(Math.random() * (max - min + 1) + min);

  var paragraph = document.getElementById("answer");
  paragraph.textContent += answer;

}

/**
* Restarts/refreshes the page so a new number is created.
*/
function restart(){
  window.location.reload();
}

/**
* when a button is clicked, this checks which button is clicked and accordingly executes the next set of
* steps.
* btn is the id of the button that is clicked.
*/
function setColor(btn) {
      attempts = attempts+1;
      var property = document.getElementById(btn);

      //when user guesses lower.
      if (document.getElementById(btn).id < answer){
        prev_guess = btn

        //get button element and and feedback text element change required properties.
        var high_low = document.getElementById("high_low");
        property.style.border="solid 2px #FFFBE9"
        property.style.color = "#FAE7CB"
        property.style.backgroundColor = "#FF4646"

        //feedback - high/low/correct
        high_low.textContent = "You last guessed number "+ btn+ ". Guess Higher!";
      }

      //when user guesses higher.
      else if (document.getElementById(btn).id > answer) {
        prev_guess = btn

        //get button element and feedback text element and change required properties.
        var high_low = document.getElementById("high_low");
        property.style.border="solid 2px #FFFBE9"
        property.style.color = "#FAE7CB"
        property.style.backgroundColor = "#FF4646"

        //feedback - high/low/correct
        high_low.textContent = "You last guessed number "+ btn+ ". Guess Lower!";


      }

      //else covers corect answer case.
      else {

      //get button element and feedback text element and change required properties.
        var high_low = document.getElementById("high_low");
        property.style.border="solid 2px #66806A"
        property.style.backgroundColor = "#C3F584"
        property.style.color = "#1E2A78"

        //feedback - high/low/correct
        var win_msg = "Correct Guess! You got it on attempt number " + attempts + "! " + "Click 'Restart' to play a new game.";
        high_low.textContent = win_msg;

      }

}
