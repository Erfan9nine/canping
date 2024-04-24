let Burger_menu=document.querySelector('.nav__btn');
let Burger_menu_item=document.querySelector('.nav-btn__line');
let nav_menu = document.querySelector('.nav__menu');
let Is_open=false;

Burger_menu.addEventListener('click',function (){
    if(!Is_open){
        nav_menu.classList.add('nav__menu--open');
        Burger_menu_item.classList.add('nav-btn__open');
    }
    else{
        nav_menu.classList.remove('nav__menu--open');
        Burger_menu_item.classList.remove('nav-btn__open');

    }

Is_open=!Is_open;
})
