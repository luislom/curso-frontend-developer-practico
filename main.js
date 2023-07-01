const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burgerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

const cartMenuIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');


menuEmail.addEventListener('click', toggleDesktopMenu);
burgerMenu.addEventListener('click', toggleMobileMenu);
cartMenuIcon.addEventListener('click', toggleCart);

function toggleDesktopMenu(){
    
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    aside.classList.add('inactive')
    mobileMenu.classList.toggle('inactive');
}

function toggleCart(){
    mobileMenu.classList.add('inactive');
    aside.classList.toggle('inactive');

}