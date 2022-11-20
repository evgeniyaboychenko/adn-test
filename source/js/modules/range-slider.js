import noUiSlider from 'nouislider';

const rangeSlider = () => {
  const slider = document.querySelector('[data-range-slider]');
  const inputMin = document.querySelector('[data-min-price]');
  const inputMax = document.querySelector('[data-max-price]');
  const resetButton = document.querySelector('[data-reset-filters]');
  const MIN = 0;
  const MAX = 10500;

  if (!rangeSlider) {
    return;
  }

  noUiSlider.create(slider, {
    start: [0, 10500],
    connect: true,
    step: 10,
    range: {
      'min': MIN,
      'max': MAX,
    },
  });

  slider.noUiSlider.on('update', function (values, handle) {
    if (handle === 0) {
      inputMin.value = Math.round(values[handle]);
    } else {
      inputMax.value = Math.round(values[handle]);
    }
  });

  const onChangeInputsetValueRange = (index, value) => {
    let range = [null, null];
    range[index] = value;
    slider.noUiSlider.set(range);
  };

  inputMin.addEventListener('change', (evt) => {
    onChangeInputsetValueRange(0, evt.currentTarget.value);
  });

  inputMax.addEventListener('change', (evt) => {
    onChangeInputsetValueRange(1, evt.currentTarget.value);
  });

  resetButton.addEventListener('click', () => {
    slider.noUiSlider.set([MIN, MAX]);
  });
};
export {rangeSlider};

