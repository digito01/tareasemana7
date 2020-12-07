import { Component,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import{LibrosDataService} from 'src/app/common/services/libros-data.service'

@Component({
  selector: 'libros',
  templateUrl: './libros.component.html',
})
export class LibrosComponent implements OnInit{

  librosDetail: any;
  librosModel: any ;
  
  constructor(
    private router: Router,
    private librosDataService: LibrosDataService
  ) {}
  ngOnInit(): void {
    this.librosModel = this.librosDataService.getAllLibros();
  }

  viewLibrosDetail(libro: any): void {
    this.router.navigate(['/libro', libro.id]);
  }
}