const ref = {
  decrement: document.querySelector('[data-action="decrement"]'),
  increment: document.querySelector('[data-action="increment"]'),

  output: document.getElementById('value'),
};

const getCurrentValue = () => {
  return Number(ref.output.textContent);
};

const setValue = (value) => {
  ref.output.textContent = value;
};

const handleClickDecrement = () => {
  setValue(getCurrentValue() - 1);
};

const handleClickIncrement = () => {
  setValue(getCurrentValue() + 1);
};

ref.decrement.addEventListener('click', handleClickDecrement);
ref.increment.addEventListener('click', handleClickIncrement);
