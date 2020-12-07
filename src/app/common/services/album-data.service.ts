import { Injectable } from '@angular/core';
import { Peliculas } from '../models/peliculas.model';
import { PELI_DATA } from '../models/mocks/peliculas-data.mock';
import { Peli } from '../models/pelis.model';

@Injectable({ providedIn: 'root' })
export class PeliculaDataService {
  constructor() {}

  // 1. get all data
  getAllPeliculas(): Peliculas {
    return PELI_DATA;
  }

  // 2. find song by id (num)
  getSongById(id: number): Peli {
    return PELI_DATA.peliculas.find((t) => t.id === id);
  }

  // // 3. add new song to data
  addNewPeli(peli: Peli): boolean {
    // buscar dentro de ALBUM_DATA la última song
    // -: obtendremos el id de la ultima son
    try {
      let lastId =
      PELI_DATA.peliculas.length === 0
          ? 0
          : PELI_DATA.peliculas[PELI_DATA.peliculas.length - 1].id;
      peli.id = lastId + 1;
      PELI_DATA.peliculas.push(peli);

      return true;
    } catch (err) {
      console.error(err);
      return false;
    }
  }
}
