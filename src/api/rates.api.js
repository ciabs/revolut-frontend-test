import axios from 'axios';

import config from '../config';

export const getRatesFromApi = (base, symbols) =>
  axios
    .get(`${config.apiUrl}?base=${base}&symbols=${symbols}`)
    .then(res => res.data);
