import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://my-json-server.typicode.com/jeanmottin12/desafio03-trilha-reactjs-hook-cart',
});
