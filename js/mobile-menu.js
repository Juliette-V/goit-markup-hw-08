const openBtn = document.getElementById('burger');
const closebtn = document.getElementById('mobile-menu__close');
const menu = document.getElementById('mobile-menu');

openBtn.addEventListener('click', ()=>{
    menu.classList.add('mobile-menu--open')
})
closebtn.addEventListener('click', ()=>{
    menu.classList.remove('mobile-menu--open')
})