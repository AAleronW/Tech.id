const menuToggle = document.querySelector('.menu-toogle input');
const Nav = document.querySelector('nav ul');
const list = document.querySelector('ul li');
menuToggle.addEventListener('click', function(){
    Nav.classList.toggle('slide');
})  