const ref = {
  input: document.querySelector('.controls__input'),

  create: document.querySelector('[data-action="render"]'),
  clear: document.querySelector('[data-action="destroy"]'),

  output: document.querySelector('.boxes'),
};

const getInputValue = () => {
  return Number(ref.input.value);
};

const getBoxSize = () => {
  const numberElements = document.querySelectorAll('.boxes__box').length;
  const start = 30;
  const step = 10;

  if (!numberElements) {
    return start;
  }

  return numberElements * step + start;
};

function getRBG() {
  var o = Math.round,
    r = Math.random,
    s = 255;
  return (
    'rgba(' +
    o(r() * s) +
    ',' +
    o(r() * s) +
    ',' +
    o(r() * s) +
    ',' +
    r().toFixed(1) +
    ')'
  );
}

const createBoxes = (count) => {
  for (let i = 0; i < count; i++) {
    const size = getBoxSize();

    ref.output.insertAdjacentHTML(
      'beforeend',
      `<div style="width: ${size}px; height: ${size}px; background-color: ${getRBG()};" class="boxes__box"> </div>`
    );
  }
};

const handleClickCreate = () => {
  createBoxes(getInputValue());
};

const handleClickClear = () => {
  ref.output.innerHTML = '';
  ref.input.value = '';
};

ref.create.addEventListener('click', handleClickCreate);
ref.clear.addEventListener('click', handleClickClear);
