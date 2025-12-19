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