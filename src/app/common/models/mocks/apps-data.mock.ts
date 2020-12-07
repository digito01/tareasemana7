import { Apps } from '../apps/apps.model';
import { App } from '../apps/app.model';

const APPS: App[] = [
  {
    id:1,
    nombre: 'Whatsapp',
    genero: 'red social',
    precio: "Gratis",
    image:
      'https://www.techspot.com/images2/news/bigimage/2017/11/2017-11-06-image-8.jpg',
  },
  {
    id:2,

    nombre: 'Facebook',
    genero: 'red social',
    precio: "Gratis",
    image:
      'https://i-cdn.phonearena.com/images/articles/319473-image/fbl.png',
  },
  {
    id:3,
    nombre: 'Roinstagrambots',
    genero: "red social",
    precio: "Gratis",
    image:
      'https://i1.wp.com/www.xanjero.com/wp-content/uploads/2017/10/Google-Play-Store-app-rank-popularity-chart-Instagram.png?fit=1080%2C2220&ssl=1',
  },
  {
    id:4,

    nombre: 'Instagram lite',
    genero: 'Red social',
    precio: "Gratis",
    image:
      'https://i1.wp.com/www.xanjero.com/wp-content/uploads/2017/10/Google-Play-Store-app-rank-popularity-chart-Instagram.png?fit=1080%2C2220&ssl=1',
  },
];
export const APP_DATA: Apps = {
  apps: APPS,
};
