import { Component } from '@angular/core';
import { Libro } from 'src/app/common/models/libros/libro.model';
import { LibrosDataService } from 'src/app/common/services/libros-data.service';

@Component({
  selector: 'new-libro',
  templateUrl: './new-libro.component.html',
})
export class NewlibroComponent {
  libro: Libro = {
    id: 0,
    nombre: '',
    genero: '',
    precio: 0,
    image:'',
  };

  constructor(private librosDataService: LibrosDataService) {}

  save(): void {
    if (this.validate(this.libro)) {
      let result = this.librosDataService.addNewLibros(this.libro);
      if (result) console.log('Saved success!');
      else {
        console.log('error in save :(');
      }
    }
  }

  printConsole(): void {
    console.log(this.libro.nombre);
  }

  validate(libro: Libro): boolean {
    if (libro.id !== 0) return false;
    if (libro.nombre === '') return false;
    if (libro.genero === '') return false;
    if (libro.precio === 0) return false;
    if (libro.image === '') return false;
    return true;
  }
}
