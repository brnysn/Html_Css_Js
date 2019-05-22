/******************
  yasinbaran.com.tr
 *****************/

const lowers = ('abcdefghijklmnopqrstuvwxyz'.split(''));
const uppers = lowers.map(low => low.toUpperCase());
const numbers = ('0123456789'.split(''));
const symbols = ('!"?$?%^&*()_-+={[}]:;\'~#\\<>.?/'.split(''));

let selected = [];

let digit = null;
let resultElement = document.getElementById('result');

function generate() {
  digit = document.getElementById('digit').value;
  selected = [];
  var isLower = document.getElementById('lower').checked;
  var isUpper = document.getElementById('upper').checked;
  var isNumber = document.getElementById('number').checked;
  var isSymbol = document.getElementById('symbol').checked;

  if (isLower == true) {
    selected = selected.concat(lowers);
  }
  if (isUpper == true) {
    selected = selected.concat(uppers);
  }
  if (isNumber == true) {
    selected = selected.concat(numbers);
  }
  if (isSymbol == true) {
    selected = selected.concat(symbols);
  }
  write();
}

function write() {
  let password = [];
  for (let i = 0; i < digit; i++) {
    let sign = selected[Math.floor(Math.random() * selected.length)];
    password.push(sign);
  }
  resultElement.textContent = password.join('');

}

/******************
    brnysn.com
*****************/