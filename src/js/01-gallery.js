// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

console.log(galleryItems);

const galleryRef = document.querySelector('.gallery');
const imgMarkup = createGalleryItemMarkup(galleryItems);

galleryRef.insertAdjacentHTML('beforeend', imgMarkup);



function createGalleryItemMarkup(galleryItems) {
    return galleryItems
      .map(({ preview, original, description }) => {
        return `
        <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}"/>
        </a>`
      })
      .join('');
  }

  var lightbox = new SimpleLightbox('.gallery a', { captionsData:"alt", captionDelay:250});
