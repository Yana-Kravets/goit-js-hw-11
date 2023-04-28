import axios from "axios";

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '35857007-5cd1c4f05c8d06f05cd6de322';

export default async function fetch(value, page) {
  const filter = `key=${API_KEY}&q=${value}&image_type=photo&min_width=800&orientation=horizontal&safesearch=true&per_page=40&page=${page}`;

  return await axios.get(`${BASE_URL}?${filter}`).then(response => response.data);
}

// import axios from 'axios';

// export default async function fetch(value, page) {
//   const url = 'https://pixabay.com/api/';
//   const key = '29413713-a123049087085ca77c45184ac';
//   const filter = `key=${key}&q=${value}&image_type=photo&min_width=800&orientation=horizontal&safesearch=true&per_page=40&page=${page}`;

//   return await axios.get(`${url}?${filter}`).then(response => response.data);
// }