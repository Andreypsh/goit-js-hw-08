import { galleryItems } from './gallery-items';
// Change code below this line
const list = document.querySelector('.gallery');
(function () {
  const markup = galleryItems.map(
    ({ description, original, preview }) => `
    <li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
  </li>`
  );
  list.insertAdjacentHTML('beforeend', markup.join(''));
})();

import SimpleLightbox from 'simplelightbox';

var lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

import 'simplelightbox/dist/simple-lightbox.min.css';
