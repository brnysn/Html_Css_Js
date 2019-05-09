/******************
  yasinbaran.com.tr
 ******************/
document.addEventListener("DOMContentLoaded", function (event) {
  let hour_hand = document.getElementById("hour");
  let min_hand = document.getElementById("min");
  let sec_hand = document.getElementById("sec");

  const time = new Date();
  let hour = time.getHours() * 30 + 90;
  let min = time.getMinutes() * 6 + 90;
  let sec = time.getSeconds() * 6 + 90;

  sec_hand.style.transform = "rotate(" + sec + "deg)";
  min_hand.style.transform = "rotate(" + min + "deg)";
  hour_hand.style.transform = "rotate(" + hour + "deg)";

  function setTime() {
    sec += 6;
    sec_hand.style.transform = "rotate(" + sec + "deg)";
    min += 1 / 10;
    min_hand.style.transform = "rotate(" + min + "deg)";
    hour += 1 / 600;
    hour_hand.style.transform = "rotate(" + hour + "deg)";
  }
  setInterval(setTime, 1000);
});

/******************
    brnysn.com
 *****************/
