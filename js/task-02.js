const ref = {
  output: document.getElementById('ingredients'),
};

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const r = ingredients.map((ingredient) => {
  const li = document.createElement('li');

  li.textContent = ingredient;

  return li;
});

ref.output.prepend(...r);
