import axios from 'axios';
axios.defaults.baseURL = 'https://gateway.marvel.com:443/v1/public';
axios.defaults.headers.common['Content-Type'] = 'application/json';
export const PUBLIKEY = '5f9f16a5a636b158cf398fcdf88c3b79';
export const PRIVATEKEY = 'f04ec15231921e75a3639ed081d2fc7374f482d0';
export const HASH = 'dad1204a0c10a2b62a9679dbe4b5e5e9';

export const EMAIL = 'EMAIL';
export const NUMEROS_DECIMALES = 'numerosdecimales';
export const NO_SPACE = 'NO_SPACE';
export const LETRAS_Y_ACENTOS = 'letrayacentos';
