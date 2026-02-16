import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
const simpleLightbox = new SimpleLightbox('.gallery a', {
  overlay: true,
  nav: true,
  captionDelay: 250,
});

export const createGallery = images => {
  const markup = images
    .map(image => {
      return `<li class="gallery-item">
      <a class="gallery-link" href="${image.largeImageURL}">
        <img
          class="gallery-image"
          src="${image.webformatURL}"
          alt="${image.tags}"
        />
      </a>
      <ul class="gallery-image-metainfo">
        <li class="metainfo-item">
            <p>Likes</p>
            <span>${image.likes}</span>
        </li>
        <li class="metainfo-item">
            <p>Views</p>
            <span>${image.views}</span>
        </li>
        <li class="metainfo-item">
            <p>Comments</p>
            <span>${image.comments}</span>
        </li>
        <li class="metainfo-item">
            <p>Downloads</p>
            <span>${image.downloads}</span>
        </li>
      </ul>
    </li>`;
    })
    .join('');

  gallery.insertAdjacentHTML('beforeend', markup);
  simpleLightbox.refresh();
};

export const clearGallery = () => {
  gallery.innerHTML = '';
};

const loader = document.querySelector('.loader');

export const showLoader = () => {
  loader.style.display = 'block';
};

export const hideLoader = () => {
  loader.style.display = 'none';
};
