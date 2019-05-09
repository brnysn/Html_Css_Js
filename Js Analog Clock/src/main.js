/******************
  yasinbaran.com.tr
 ******************/
document.addEventListener("DOMContentLoaded", function (event) {

  let hour_hand = document.getElementById('hour')
  let min_hand = document.getElementById('min')
  let sec_hand = document.getElementById('sec')

  let hour = 90;
  let min = 90;
  let sec = 90;


  function setClock() {
    const time = new Date();
    hour = (time.getHours() * 30) + 90;
    min = (time.getMinutes() * 6) + 90;
    sec = (time.getSeconds() * 6) + 90;
    hour_hand.style.transform = "rotate(" + hour + "deg)"
    min_hand.style.transform = "rotate(" + min + "deg)"
    sec_hand.style.transform = "rotate(" + sec + "deg)"
  }
  setClock();
  setInterval(setClock, 1000);
})

/******************
    brnysn.com
 *****************/