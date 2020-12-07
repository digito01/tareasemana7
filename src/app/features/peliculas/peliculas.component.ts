import { Component,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import{PeliculaDataService} from 'src/app/common/services/album-data.service'


@Component({
  selector: 'peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.scss'],
})
export class PelisComponent implements OnInit{
  pelisDetail: any;
  pelisModel: any ;
   
    constructor(
      private router: Router,
      private peliculaDataService: PeliculaDataService
    ) {}
    ngOnInit(): void {
      this.pelisModel = this.peliculaDataService.getAllPeliculas();
    }
  
    viewPelisDetail(peli: any): void {
      this.router.navigate(['/peli', peli.id]);
    }
}
