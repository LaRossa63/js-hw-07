const ref = {
  input: document.getElementById('name-input'),
  output: document.getElementById('name-output'),
};

const handleChangeInput = (event) => {
  const value = event.target.value;

  if (!value.length) {
    ref.output.textContent = 'незнакомец';
    return;
  }

  ref.output.textContent = value;
};

ref.input.addEventListener('input', handleChangeInput);
