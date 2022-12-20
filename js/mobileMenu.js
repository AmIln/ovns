let burgerIcon = document.querySelector('.menu-mobileButton'),
burgerMenu = document.querySelector('.menu-burger'),
warningText = document.querySelector('.warning'),
headerContainer = document.querySelector('.header-container'),
header = document.querySelector('.header'),
menuMobile = document.querySelector('.menu-mobile');
/* БУРГЕР */
burgerIcon.addEventListener('click', function() {
    burgerIcon.classList.toggle('menu-mobileButton_active');
    burgerMenu.classList.toggle('menu-burger_active');
    warningText.classList.toggle('warning_fixed');
    headerContainer.classList.toggle('header-container_fixed');
    header.classList.toggle('header_fixed');
    menuMobile.classList.toggle('menu-mobile_active');
})