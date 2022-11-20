const filterShow = () => {
  const filtersShowBtn = document.querySelector('[data-filters-btn]');
  const filtersBlock = document.querySelector('.filters');
  const filtersCloseAreas = document.querySelectorAll('[data-close-filters]');
  const bodyPage = document.querySelector('body');

  if (!filtersShowBtn || !filtersBlock || !filtersCloseAreas) {
    return;
  }

  const onButtonShowFilter = () => {
    if (!filtersBlock.classList.contains('is-open')) {
      filtersBlock.classList.add('is-open');
      bodyPage.style.overflow = 'hidden';
    }
  };

  const onAreaCloseFilter = () => {
    if (filtersBlock.classList.contains('is-open')) {
      filtersBlock.classList.remove('is-open');
      bodyPage.style.overflow = 'auto';
    }
  };

  filtersShowBtn.addEventListener('click', onButtonShowFilter);

  filtersCloseAreas.forEach((item) => {
    item.addEventListener('click', onAreaCloseFilter);
  });
};

export {filterShow};
