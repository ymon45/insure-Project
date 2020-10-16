const hum = document.getElementById('hum');
const menu = document.getElementById('menu');

hum.addEventListener('click', ()=>{
hum.classList.toggle('show');
menu.classList.toggle('show');
});