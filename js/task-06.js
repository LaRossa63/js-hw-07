const ref = {
  input: document.querySelector('.validation__input'),
  maxLength: Number(
    document.querySelector('.validation__input').dataset.length
  ),
};

const handleInputBlur = (event) => {
  const value = event.target.value;

  if (value.length === ref.maxLength) {
    ref.input.classList.add('valid');
    return;
  }

  ref.input.classList.add('invalid');
};

const handleInputFocus = () => {
  ref.input.className = 'validation__input';
};

ref.input.addEventListener('blur', handleInputBlur);
ref.input.addEventListener('focus', handleInputFocus);
