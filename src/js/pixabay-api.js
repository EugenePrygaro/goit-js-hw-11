import axios from 'axios';

const apiKey = '54674722-b145bb2552402daa868c731d8';
const getImagesByQuery = async query => {
  const response = await axios.get('https://pixabay.com/api/', {
    params: {
      key: apiKey,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  });

  return response.data;
};

export default getImagesByQuery;
