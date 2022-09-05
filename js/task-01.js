const ref = {
  item: document.querySelectorAll('.item'),
};

ref.item.forEach((element) => {
  console.log('');
  console.log(`Категория: ${element.firstElementChild.textContent}`);
  console.log(
    `Количество элементов: ${element.querySelector('ul').childElementCount}`
  );
});
