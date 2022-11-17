const accordionHide = () => {
  const accordionButtons = document.querySelectorAll('.accordion__button');

  if (!accordionButtons) {
    return;
  }

  accordionButtons.forEach((accordionButton) => {
    accordionButton.addEventListener('click', () => {
      accordionButton.classList.toggle('is-open');
    });
  });
};

export {accordionHide};
