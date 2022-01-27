/// Adaptive menu

const toggleBtn = document.querySelector('.toggle');
const nav = document.querySelector('.nav');
const navList = document.querySelector('.nav-list');
const navLink = document.querySelectorAll('.nav-link');

function switchMenu() {
    toggleBtn.classList.toggle('collapsed');
    nav.classList.toggle('collapsed');
    navList.classList.toggle('collapsed');
};

toggleBtn.addEventListener('click', switchMenu);

function closeMenu() {
    setTimeout(() => {
        toggleBtn.classList.remove('collapsed');
        nav.classList.remove('collapsed');
        navList.classList.remove('collapsed');
    }, 1000);
};
navLink.forEach(el => el.addEventListener('click', closeMenu));
