const toggleBtn = document.querySelector('.menu-button');
const navList = document.querySelector('.nav-list');

console.log('toggleBtn =', toggleBtn);
console.log('navList =', navList);

if (toggleBtn && navList) {
    toggleBtn.addEventListener('click', () => {
        navList.classList.toggle('nav-open');
    });

    navList.addEventListener('click', (e) => {
        if (e.target.tagName === 'A') {
            navList.classList.remove('nav-open');
        }
    });
}