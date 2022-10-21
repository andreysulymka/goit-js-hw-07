import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const cardsMarkup = createGalleryItemMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup);

function createGalleryItemMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
        <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
      `;
    })
    .join('');
};
galleryContainer.addEventListener('click', onGalleryContainerClick);

let onClickModalClose;

function onGalleryContainerClick(event) {
    event.preventDefault();
    const isGalleryRef = event.target.classList.contains('gallery__image');
    if (!isGalleryRef) {
        return;
    };
};

const lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });

console.log(galleryItems);
