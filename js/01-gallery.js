import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const cardsMarkup = createGalleryItemMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup);

function createGalleryItemMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
        <div class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img
              class="gallery__image"
              src="${preview}"
              data-source="${original}"
              alt="${description}"
            />
          </a>
        </div>
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

    const modalWindow = basicLightbox.create(
        `<img src="${event.target.dataset.source}" >`
    );

    modalWindow.show(onClickModalClose);
    window.addEventListener("keydown", onEscapeClose);

    function onEscapeClose(event) {
        if (event.key === "Escape") {
            modalWindow.close();
        }
    }
 };

