import SimpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';

import './gallery.scss';

// add module markup
const galleryModuleRef = window.document.createElement('div');
galleryModuleRef.classList.add('gallery-module');

// add title
const galleryTitleeRef = window.document.createElement('h2');
galleryTitleeRef.textContent = 'Gallery';
galleryModuleRef.appendChild(galleryTitleeRef);

// add markup
const galleryRef = window.document.createElement('div');
galleryRef.classList.add('gallery');

const createMarkup = (images) => 
    images
    .map(
        ({ preview, original, description }) =>
        `<div class='gallery__item'>
            <a href="${original}" class='gallery__link'>
                <img src="${preview}" alt="${description}" title="${description}" class='gallery__image'/>
            </a>
        </div>
        `,
        )
        .join('');

const galleryMarkup = createMarkup(galleryItems);
galleryRef.innerHTML = galleryMarkup;

galleryModuleRef.appendChild(galleryRef);

// add to DOM
window.document.querySelector('body').appendChild(galleryModuleRef);

// SimpleLightbox plugin initalization
new SimpleLightbox('.gallery a');