const burgerButton = document.querySelector('.navbar-toggle');
const navBar = document.querySelector('.navbar');

burgerButton.addEventListener('click', () => {
    navBar.classList.toggle("show");
}) 