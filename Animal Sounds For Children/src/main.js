
let animals_div = document.getElementsByClassName('animals')[0];

fetch("src/animals.json")
  .then(response => response.json())
  .then(animals =>
    animals.forEach(animal => {
      var div = document.createElement('div')
      div.dataset.key = (animal.key);
      div.classList.add('animal');

      var img = document.createElement('img')
      img.dataset.key = (animal.key);
      img.src = "https://www.google.com/logos/fnbx/animal_sounds/" + animal.key + ".png";

      var span = document.createElement('span')
      span.innerText = animal.name;
      span.dataset.key = (animal.key);

      div.appendChild(img)
      div.appendChild(span)

      animals_div.appendChild(div);
    })
  );

document.addEventListener("DOMContentLoaded", function (event) {
  document.addEventListener('click', function (e) {
    let animalName = e.target.dataset.key;
    if (!animalName) return;
    let audio = new Audio("https://www.google.com/logos/fnbx/animal_sounds/" + animalName + ".mp3")
    audio.pause();
    audio.currentTime = 0;
    audio.play();
  })
})