import axios from 'axios';

const API_KEY = '6a6cc641ccf7f324079c7c10da10ed6f';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATRHER = 'FETCH_WEATRHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  //console.log('Request:', request);

  return {
    type: FETCH_WEATRHER,
    payload: request
  };
}
