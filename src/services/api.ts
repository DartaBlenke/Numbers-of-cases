import axios from 'axios';

const api = axios.create({
  baseURL: 'https://covid19-update-api.herokuapp.com',
});

export {api};