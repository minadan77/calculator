// Línea original que causaba el error:
// const { precache } = require('sw-precache');

// Línea corregida:
const { precache } = window['workbox-sw'];
