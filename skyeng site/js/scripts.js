document.addEventListener('DOMContentLoaded', function(){
    let openMenu = document.querySelector('.menu-btn');
    let menu = document.querySelector('.menu');
    openMenu.addEventListener('click', function(){
        menu.classList.add('menu_active')
    });
    let closeMenu = document.querySelector('.menu__close');
    closeMenu.addEventListener('click', function(){
          menu.classList.remove('menu_active')
    })
})