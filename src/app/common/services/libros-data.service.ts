import { Injectable } from '@angular/core';
import { Libros } from '../models/libros/libros.model';
import { LIBRO_DATA } from '../models/mocks/libros-data.mock';
import { Libro } from '../models/libros/libro.model';

@Injectable({ providedIn: 'root' })
export class LibrosDataService {
  constructor() {}
  getAllLibros(): Libros {
    return LIBRO_DATA;
  }
  getPeliById(id: number): Libro {
    return LIBRO_DATA.libros.find((t) => t.id === id);
  }
  addNewLibros(libro: Libro): boolean {
    try {
      let lastId =
      LIBRO_DATA.libros.length === 0
          ? 0
          : LIBRO_DATA.libros[LIBRO_DATA.libros.length - 1].id;
          libro.id = lastId + 1;
      LIBRO_DATA.libros.push(libro);

      return true;
    } catch (err) {
      console.error(err);
      return false;
    }
  }
}
