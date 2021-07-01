/* ------------ Select DOM Item -------------*/
// Grab the box
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
// Grab the item like an array 
const navItems = document.querySelectorAll('.nav-item');

/* ------------ Set initial State Of Menu -------------*/
// open is true, close is false
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if (!showMenu) {
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');
        navItems.forEach(item => item.classList.add('show'));

        //  Set Menu Status
        showMenu = true;
    } else {
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');
        navItems.forEach(item => item.classList.remove('show'));

        //  Set Menu Status
        showMenu = false;
    }
}




/* ------------ Select DOM Item -------------*/
/* ------------ Select DOM Item -------------*/

/* ------------ Select DOM Item -------------*/
/* ------------ Select DOM Item -------------*/
