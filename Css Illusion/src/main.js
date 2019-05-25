/******************
  yasinbaran.com.tr
 *****************/

var duration = document.getElementById("duration");
var output = document.getElementById("result");
output.innerHTML = duration.value;

//* Update the duration slider value (each time you drag the slider handle)
duration.oninput = function () {
  output.innerHTML = this.value;

  for (let i = 0; i < 18; i++) { //* setting duration
    document.getElementsByClassName('circle')[i].style.animation = 'circle ' + this.value + 'ms infinite ease-in-out';
  }
  for (let i = 1; i < 19; i++) { //* setting delay time 
    let circle = document.getElementsByClassName('circle' + i)[0];
    circle.style.animationDelay = (this.value / 36 * i) + 'ms';
  }
}


var delay = document.getElementById("delay");
var delayOutput = document.getElementById("delayResult");
delayOutput.innerHTML = delay.value;

//* Update the delay slider value (each time you drag the slider handle)
delay.oninput = function () {
  delayOutput.innerHTML = this.value;

  for (let i = 1; i < 19; i++) { //* setting delay time
    let circle = document.getElementsByClassName('circle' + i)[0];
    circle.style.animationDelay = (this.value * i) + 'ms';
  }
}


/******************
    brnysn.com
*****************/