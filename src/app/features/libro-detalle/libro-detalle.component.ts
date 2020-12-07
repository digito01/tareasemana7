import { Component, Input, OnInit } from '@angular/core';
import { Libro } from 'src/app/common/models/libros/libro.model';
import { LIBRO_DATA } from '../../common/models/mocks/libros-data.mock';
import { ActivatedRoute } from '@angular/router';
import { Libros } from 'src/app/common/models/libros/libros.model';

@Component({
  selector: 'libro-detalle',
  templateUrl: './libro-detalle.component.html',
})
export class LibroDetailComponent implements OnInit {
  data: Libros = LIBRO_DATA;
  libro: Libro;
  constructor(private activedRoute: ActivatedRoute) {}
  ngOnInit(): void {
    const id = Number.parseInt(this.activedRoute.snapshot.paramMap.get('id'));
    console.log(id);
    this.libro = this.data.libros.find((t) => t.id === id);
    console.log(this.libro);
  }
}
