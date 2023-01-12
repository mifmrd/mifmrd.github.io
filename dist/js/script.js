//Navbarfixed
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    const toTop = document.querySelector('#to-top');

    if(window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
        toTop.classList.remove('hidden');
        toTop.classList.add('flex');
    }   else {
        header.classList.remove('navbar-fixed');
        toTop.classList.remove('flex');
        toTop.classList.add('hidden');
    }  
};

//burger navbar gari3
const burger = document.querySelector('#burger');
const navMenu = document.querySelector('#nav-menu');

burger.addEventListener('click', function(){
burger.classList.toggle('burger-active');
navMenu.classList.toggle('hidden');
});

//klik diluar burger menutup burger
window.addEventListener('click', function (e) {
    if (e.target != burger && e.target != navMenu) {
        burger.classList.remove('burger-active');
        navMenu.classList.add('hidden');
    }
});

//darkmode togle
const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darkToggle.addEventListener('click', function () {
    if (darkToggle.checked) {
        html.classList.add('dark');
        localStorage.theme ='dark';
    } else {
        html.classList.remove('dark');
        localStorage.theme ='light';
    }
});

//posisi toggle sesuai mode
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    darkToggle.checked =true;
  } else {
    darkToggle.checked =false;
  }
  
