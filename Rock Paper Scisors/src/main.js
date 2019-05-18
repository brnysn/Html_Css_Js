document.addEventListener('DOMContentLoaded', function () {

  // outputs = ['Scissors', 'Rock', 'Paper'];

  function makeChoices(e) {
    //Player Makes choice and computer Makes choice
    let playerMove = (e.srcElement.dataset.key);
    let computerMove = (Math.floor(Math.random() * 3) + 1);
    //making Computers Move visible
    document.getElementById('computerOption').style.display = "inline"
    document.getElementById('computerMoveImg').src = "src/img/" + computerMove + ".svg"

    let result = document.getElementById('result')

    if (playerMove == computerMove) {
      result.innerHTML = "DRAW &#129309;"
    } else if ((++playerMove % 3) == computerMove) {
      result.innerHTML = "LOSER &#129318;"
    } else {
      result.innerHTML = "YOU WON &#128079;"
    }
  }
  let photos = Array.from(document.getElementsByTagName('img'));
  photos.forEach(choice => choice.addEventListener('click', makeChoices))

})