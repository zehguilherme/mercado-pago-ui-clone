const menuToggle = document.querySelector('.menu-toggle')
const mobileNavbar = document.querySelector('.mobile-navbar')

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('menu-toggle-active')
    mobileNavbar.classList.toggle('mobile-navbar-active')
})