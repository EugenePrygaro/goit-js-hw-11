import getImagesByQuery from './js/pixabay-api.js';
import {
  hideLoader,
  showLoader,
  clearGallery,
  createGallery,
} from './js/render-functions.js';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const formInput = document.querySelector('input');

form.addEventListener('submit', async e => {
  e.preventDefault();
  clearGallery();
  if (formInput.value.trim() === '') {
    iziToast.show({
      title: 'Error',
      message: 'Search form is empty!',
    });
    return;
  }
  showLoader();

  try {
    const images = await getImagesByQuery(formInput.value);

    hideLoader();

    if (images.totalHits === 0) {
      iziToast.show({
        title: 'No results',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
      return;
    }

    createGallery(images.hits);
  } catch (error) {
    hideLoader();
    iziToast.show({
      title: 'Error',
      message: 'Something went wrong. Please try again!',
    });
    console.error(error);
  }
});
