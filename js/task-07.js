const ref = {
  input: document.getElementById('font-size-control'),
  output: document.getElementById('text'),
};

const handleChangeSlider = (event) => {
  const value = event.target.value;

  ref.output.style.fontSize = `${value}px`;
};

ref.input.addEventListener('input', handleChangeSlider);
