## BackgrounGradient Generator
`before copy button the code is:`
```javascript
const css = document.getElementById('output');
const color1 = document.getElementById('color1');
const color2 = document.getElementById('color2');
const color3 = document.getElementById('color3');
const body = document.getElementById('gradient');


function setGradient(){
    body.style.background =`linear-gradient(to right, ${color1.value} ,${color2.value},${color3.value}`;
    css.value = `${body.style.background}`;
}

color1.addEventListener('input',setGradient) 
color2.addEventListener('input',setGradient)
color3.addEventListener('input',setGradient)
```