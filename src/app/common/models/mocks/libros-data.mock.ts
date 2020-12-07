import { Libros } from '../libros/libros.model';
import { Libro } from '../libros/libro.model';

const LIBROS: Libro[] = [
  {
    id: 1,
    nombre: 'Gabriela Garcia y MArquez',
    genero: 'Accion',
    precio: 5,
    image:
      'https://kbimages1-a.akamaihd.net/90bf2502-fa94-4da4-853e-c2e70f7cf2dd/1200/1200/False/el-coronel-no-tiene-quien-le-escriba-2.jpg',
  },
  {
    id: 2,
    nombre: 'Wallie',
    genero: 'ni;o',
    precio: 99,
    image:
      'https://kbimages1-a.akamaihd.net/90bf2502-fa94-4da4-853e-c2e70f7cf2dd/1200/1200/False/el-coronel-no-tiene-quien-le-escriba-2.jpg',
  },
  {
    id: 3,
    nombre: 'Robots',
    genero: "Ni'o",
    precio: 99,
    image:
      'https://cdn.wallapop.com/images/10420/98/2r/__/c10420p557760876/i1672351682.jpg?pictureSize=W640',
  },
  {
    id: 4,
    nombre: 'Seven',
    genero: 'Accion',
    precio: 74,
    image:
      'https://kbimages1-a.akamaihd.net/90bf2502-fa94-4da4-853e-c2e70f7cf2dd/1200/1200/False/el-coronel-no-tiene-quien-le-escriba-2.jpg',
  },
];
export const LIBRO_DATA: Libros = {
  libros: LIBROS,
};
