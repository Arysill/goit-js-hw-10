import axios from 'axios';
axios.defaults.headers.common['x-api-key'] =
  'live_793CeG5q67qnH6fpJBwdr6YWNaVcGC2tcdHB4T47MUXXJN1CFrX7Fw14EMbW77uI';
axios.defaults.baseURL = 'https://api.thecatapi.com/v1/';


export function fetchBreeds(endPoint) {
  return axios.get(endPoint).then(data => {
    return data.data;
  });
}

export function fetchCatByBreed(endPoint, breedId) {
  const catByBreed = endPoint + '?breed_ids=' + breedId;
  return axios.get(catByBreed).then(resp => {
    return resp.data;
  });
}