var menuIcon = document.querySelector('.menu__icon')
var menu = document.querySelector('.menu')

menuIcon.addEventListener('click', ()=>{
    menu.classList.toggle('menu__aberto')
})