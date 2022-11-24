const css = document.getElementsByClassName('h3');
const color1 = document.getElementById('color1');
const color2 = document.getElementById('color2');
const body = document.getElementById('gradient');


function setGradient(){
    body.style.background =`linear-gradient(to right, ${color1.value} ,${color2.value}`;
}

color1.addEventListener('input',setGradient) 
color2.addEventListener('input',setGradient)