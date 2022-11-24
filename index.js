const css = document.getElementsByClassName('h3');
const color1 = document.getElementById('color1');
const color2 = document.getElementById('color2');
const body = document.getElementById('color2');

color1.addEventListener('click',function(){
    console.log(color1.value);
});

color2.addEventListener('click',function(){
    console.log(color2.value);
})