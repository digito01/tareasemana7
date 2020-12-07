import {NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppsComponent } from './appss/apps.component';
import{LibrosComponent} from './libros/libros.component';
import{PelisComponent} from './peliculas/peliculas.component';
import{PeliDetailComponent} from'../features/pelicula-detalle/pelicula-detalle.component'
import { NewPeliComponent} from'./new-peli/new-peli.component'
const routes :Routes =[

    {
        path: 'apps',
        component: AppsComponent,
      },
      {
        path: 'libros',
        component: LibrosComponent,
      },
      {
        path: 'peliculas',
        component: PelisComponent,
      },
      {
        path: 'peli/:id',
        component: PeliDetailComponent,
      },
      {
        path: 'new-peli',
        component: NewPeliComponent,
      },
      {
        path: '',
        redirectTo: '/peliculas',
        pathMatch: 'full',
      },

      




];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
  })
  export class AppRoutingModule {}