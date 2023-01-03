// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const createGalleryItem = ({ preview, original, description } = {}) => {
    return `
    <div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/>
        </a>
    </div>
  `;
};

const gallery = document.querySelector(".gallery");
const galleryItemsList = galleryItems.map(el => createGalleryItem(el)).join('');
gallery.insertAdjacentHTML('beforeend', galleryItemsList);

var lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionPosition: 'bottom', captionDelay: 250, });

