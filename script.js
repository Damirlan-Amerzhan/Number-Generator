document.getElementById('button').addEventListener('click', random)

let randomNumber = 0
let userGuess = 0

function random () {
  userGuess = document.getElementById('input').value
  userGuess = parseInt(userGuess)

  randomNumber = (Math.random() * 6) + 1
  randomNumber = parseInt(randomNumber)

  if (userGuess == randomNumber) {
    document.getElementById('correct').innerHTML = "Correct!"
    
  } 
}