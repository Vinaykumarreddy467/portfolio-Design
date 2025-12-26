// toggle section

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

// End of toggle section

// filtering projects section

  document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const items = document.querySelectorAll('.project-item');

    filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const filterValue = btn.getAttribute('data-filter');

        // filter items
        items.forEach(item => {
          const card = item.querySelector('.project-card');
          const category = card.getAttribute('data-category');

          if (filterValue === 'all' || category === filterValue) {
            item.classList.remove('hide');
          } else {
            item.classList.add('hide');
          }
        });

        // active state on li
        document
          .querySelectorAll('.projectTypes li')
          .forEach(li => li.classList.remove('active'));
        btn.parentElement.classList.add('active');
      });
    });
  });