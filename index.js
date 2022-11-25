const css = document.getElementById("output");
const color1 = document.getElementById("color1");
const color2 = document.getElementById("color2");
const color3 = document.getElementById("color3");
const body = document.getElementById("gradient");
const changeBtn = document.getElementById("change-btn");

function setGradient() {
  body.style.background = `linear-gradient(to right, ${color1.value} ,${color2.value},${color3.value}`;
  css.value = `${body.style.background}`;
}

document.getElementById("copy-btn").addEventListener("click", function () {
  navigator.clipboard.writeText(css.value);
});

function generateColor() {
//hex calculating  
  let hexCodes = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];

  let color = "#";

  for (let i = 0; i < 6; i++) {
    let num = Math.round(Math.random() * 15);
    let num2 = hexCodes[num];
    color += num2;
    // console.log(color);
  }
  return color;
}


function setGenerateColor() {
// it is generate with outher input
  color1.value = generateColor();
  color2.value = generateColor();
  color3.value = generateColor();
  setGradient();
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
color3.addEventListener("input", setGradient);
changeBtn.addEventListener("click", setGenerateColor);   //call the button 
