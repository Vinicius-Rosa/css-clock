const deg = 6;

const hr = document.querySelector('#hr');
const mn = document.querySelector('#mn');
const s = document.querySelector('#s');

let day = new Date();

let hour = day.getHours() * 30;
let minute = day.getMinutes() * deg;
let second = day.getSeconds() * deg;

hr.style.transform = `rotateZ(${(hour)+(minute/12)}deg)`;
mn.style.transform = `rotateZ(${minute}deg)`;
s.style.transform = `rotateZ(${second}deg)`;