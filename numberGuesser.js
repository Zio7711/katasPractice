let prompt = require("prompt-sync")();

let num = Math.floor((Math.random() * 100) + 1)
let result = true
let times = 0
let previousAnswer

while(result){
  let answer = prompt("Guess a number: ");
  if(answer == previousAnswer) {
    console.log("Already Guessed!")
    times += 1
  } else if(answer > num){
    console.log("Too High!")
    times += 1
    previousAnswer = answer
  } else if(answer < num) {
    console.log("Too Low")
    times += 1
    previousAnswer = answer
  } else if(answer == num) {
    times += 1
    if(times == 1) {
      console.log("You got it! You took 1 attempt")
    } else {
      console.log("You got it! You took " + times + " attempts")
    } 
    result = false
  } else if(answer == 'stop') {
    result = false
  } else {
    console.log("Not a number! Try again!")
  }
}






