import { Component } from '@angular/core';
import { Peli } from 'src/app/common/models/pelis.model';
import { PeliculaDataService } from 'src/app/common/services/peliculas-data.service';

@Component({
  selector: 'new-peli',
  templateUrl: './new-peli.component.html',
})
export class NewPeliComponent {
  peli: Peli = {
    id: 0,
    nombre: '',
    genero: '',
    precio: 0,
    relacion:'',
    image:'',
  };

  constructor(private peliculaDataService: PeliculaDataService) {}

  save(): void {
    if (this.validate(this.peli)) {
      let result = this.peliculaDataService.addNewPeli(this.peli);
      if (result) console.log('Saved success!');
      else {
        console.log('error in save :(');
      }
    }
  }

  printConsole(): void {
    console.log(this.peli.nombre);
  }

  validate(peli: Peli): boolean {
    if (peli.id !== 0) return false;
    if (peli.nombre === '') return false;
    if (peli.genero === '') return false;
    if (peli.relacion === '') return false;
    if (peli.precio === 0) return false;
    if (peli.image === '') return false;
    return true;
  }
}
