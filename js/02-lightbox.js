import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const galleryList = createGalleryImagesList(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', galleryList);

galleryContainer.addEventListener('click', onOpenClick);

function createGalleryImagesList(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
  <div class = "gallery__item">
  <a class = "gallery__link" href="${original}">
  <img
  class="gallery__image"
  src="${preview}"
  data-source="${original}"
  alt="${description}"
  />
  </a>
  </div>
  `;
    }).join('');
}

var lightBox = new SimpleLightbox('.gallery a', {
    captionDelay: 250
});