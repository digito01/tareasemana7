import { Component } from '@angular/core';
@Component({
  selector: 'libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.scss'],
})
export class LibrosComponent {
  librosDetail: any;
  librosModel: any = {
    libros: [
      {
        nombre: 'Gabriela Garcia y MArquez',
        genero: 'Accion',
        precio: 5,
        relacion: 'pelicula para niño',
        image:
          'https://kbimages1-a.akamaihd.net/90bf2502-fa94-4da4-853e-c2e70f7cf2dd/1200/1200/False/el-coronel-no-tiene-quien-le-escriba-2.jpg',
      },
      {
        nombre: 'Wallie',
        genero: 'ni;o',
        precio: 99,
        relacion: 'pelicula para niño',
        image:
          'https://kbimages1-a.akamaihd.net/90bf2502-fa94-4da4-853e-c2e70f7cf2dd/1200/1200/False/el-coronel-no-tiene-quien-le-escriba-2.jpg',
      },
      {
        nombre: 'Robots',
        genero: "Ni'o",
        precio: 99,
        relacion: 'pelicula para niño',
        image:
          'https://cdn.wallapop.com/images/10420/98/2r/__/c10420p557760876/i1672351682.jpg?pictureSize=W640',
      },
      {
        nombre: 'Seven',
        genero: 'Accion',
        precio: 74,
        relacion: 'pelicula para niño',
        image:
          'https://kbimages1-a.akamaihd.net/90bf2502-fa94-4da4-853e-c2e70f7cf2dd/1200/1200/False/el-coronel-no-tiene-quien-le-escriba-2.jpg',
      },
    ],
  };

  verLibrosDetalles(libros: any): void {
    this.librosDetail = libros;
  }
}
