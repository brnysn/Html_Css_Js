/******************
  yasinbaran.com.tr
 *****************/

document.addEventListener('DOMContentLoaded', function () {

  const card_container = document.getElementById('card_container');

  let first = null;
  let second = null;

  let photos = ['codepen', 'css', 'html', 'jquery', 'js', 'nodejs', 'php', 'ps', 'rails', 'sass', 'sublime', 'wp', 'codepen', 'css', 'html', 'jquery', 'js', 'nodejs', 'php', 'ps', 'rails', 'sass', 'sublime', 'wp'];

  // photos = photos.concat(photos);

  shuffle(photos);

  function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
    }
    sort(a);
  }

  function sort(a) {
    for (let i = 0; i < 24; i++) {
      let card = document.createElement('div');
      card.classList.add('card');
      card_container.appendChild(card);
      card.dataset.key = a[i];

      let front = document.createElement('img');
      front.classList.add('front');
      front.src = "src/img/question.png";
      card.appendChild(front);

      let back = document.createElement('img');
      back.classList.add('back');
      back.src = "src/img/" + a[i] + ".png";
      card.appendChild(back);
    }
  }

  function playerMove() {
    if ((this == first)) {
      return
    } else if (first == null) {
      first = this;
      this.classList.toggle('flip');
    } else if (second == null) {
      second = this
      this.classList.toggle('flip');
      setTimeout(match, 650);
    } else {
      first.classList.toggle('flip');
      second.classList.toggle('flip');
      first = this;
      first.classList.toggle('flip');
      second = null;
    }
  }

  function match() {
    (first.dataset.key == second.dataset.key) ? correct() : wrong();
  }

  let count = 0;
  function correct() {
    // first.classList.add('disabled');
    // second.classList.add('disabled');
    first.removeEventListener('click', playerMove);
    second.removeEventListener('click', playerMove);
    first = null;
    second = null;
    count += 1;
    if (count == photos.length / 2) {
      setTimeout(resetGame, 300);
    }
  }

  function wrong() {
    first.classList.toggle('flip');
    second.classList.toggle('flip');
    first = null;
    second = null;
  }

  function resetGame() {
    document.location.reload()=true;
  }
  const cards = Array.from(document.getElementsByClassName('card'));
  cards.forEach(choice => choice.addEventListener('click', playerMove))

})

/******************
    brnysn.com
*****************/