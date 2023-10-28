"use strict";
console.log('Hello World');
const button = document.getElementById('submit');
const a = document.getElementById('input1');
const b = document.getElementById('input2');
const result = document.getElementById('result');
const test = document.querySelector('p');
const test2 = document.querySelector('a');
function add(a, b) {
    return a + b;
}
button.addEventListener('click', function () {
    result.innerText = `${add(+a.value, +b.value)}`;
});
