const btnMenu = document.getElementById('btnMenu');
const mobileNav = document.getElementById('mobileNav');
const iconMenu = document.getElementById('iconMenu');

let isOpen = false;

btnMenu.addEventListener('click', () => {
    isOpen = !isOpen;
    mobileNav.classList.toggle('active');
    iconMenu.src = isOpen
        ? './assets/icons/close.svg'
        : './assets/icons/nav.svg';
});