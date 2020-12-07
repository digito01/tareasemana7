import { Component, Input, OnInit } from '@angular/core';
import { Peli } from 'src/app/common/models/pelis.model';
import { PELI_DATA } from '../../common/models/mocks/peliculas-data.mock';
import { ActivatedRoute } from '@angular/router';
import { Peliculas } from 'src/app/common/models/peliculas.model';

@Component({
  selector: 'pelicula-detalle',
  templateUrl: './pelicula-detalle.component.html',
  
})
export class PeliDetailComponent implements OnInit {
  // OnInit es interface, life-cicle hooks
  data: Peliculas = PELI_DATA;
  peli: Peli;

  // vamos a inyectar un servicio -> DI - (Dependency Injection)
  constructor(private activedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    const id = Number.parseInt(this.activedRoute.snapshot.paramMap.get('id'));
    console.log(id);

    // busqueda
    // find me devuelve singular
    // filter, buscar criterios y devuelve un arreglo
    this.peli = this.data.peliculas.find((t) => t.id === id);
    console.log(this.peli);
  }
}
