import { Component } from '@angular/core';
@Component({
  selector: 'peliculas-cmp',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.scss'],
})
export class PelisComponent {
  pelisDetail: any;
  pelisModel: any = {
    pelis: [
      {
        nombre: 'Rapido y Furioso',
        genero: 'Accion',
        precio: 5,
        relacion: 'pelicula para niño',
        image:
          'https://play-lh.googleusercontent.com/5WZEffr_t4UHJGD2H9YxJiVoUnV8jA_DztRtdwkZpC4pJdk8ZIjOkMmabtJyaHPFM8Wp',
      },
      {
        nombre: 'Wallie',
        genero: 'ni;o',
        precio: 99,
        relacion: 'pelicula para niño',
        image:
          'https://play-lh.googleusercontent.com/QOwYeu-cYlmPV7nT8yETQjM4YUdVGcbGQ2xI-gxk--FlZmFTNEy8KASSdbhMM7QSTL-J',
      },
      {
        nombre: 'Robots',
        genero: "Ni'o",
        precio: 99,
        relacion: 'pelicula para niño',
        image:
          'https://lh3.googleusercontent.com/OhSeAk6Lp7oxbT88phF2462kgWp28rnEgtdNw2GvuQLLmFPK3WyJuk6YfQG65z084t4X',
      },
      {
        nombre: 'Seven',
        genero: 'Accion',
        precio: 74,
        relacion: 'pelicula para niño',
        image:
          'https://play-lh.googleusercontent.com/ld5p9WYkmA9nyrpzOgbkCYvIdvxfjhHnexdKix6Dev31jO7YjHI4X3cbFd-i4B3uBgvL',
      },
    ],
  };

  verPelisDetalles(pelis: any): void {
    this.pelisDetail = pelis;
  }
}
