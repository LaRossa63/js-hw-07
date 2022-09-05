const ref = {
  output: document.querySelector('.gallery'),
};

const images = [
  {
    url: 'https://img.fonwall.ru/o/33/goryi-sneg-derevya-polyana.jpg?route=mid&amp;h=750',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://s1.1zoom.ru/big0/768/388156-svetik.jpg',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://vsegda-pomnim.com/uploads/posts/2022-04/1649132862_2-vsegda-pomnim-com-p-gornaya-priroda-foto-2.jpg',
    alt: 'Group of Horses Running',
  },
];

const element = images.map((image) => {
  return `
  <li class="gallery__li"> 
    <img class="gallery__li-img" src="${image.url}" alt="${image.alt}">
  </li>
  `;
});

ref.output.insertAdjacentHTML('beforeend', element.join(' '));
