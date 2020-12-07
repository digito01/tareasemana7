import {NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppsComponent } from './app/apps.component';
import{LibrosComponent} from './libros/libros.component';
import{PelisComponent} from './peliculas/peliculas.component';

import{AppsDetalles} from './app-detalle/app-detalle.component'
import{PeliDetailComponent} from'../features/pelicula-detalle/pelicula-detalle.component'
import{LibroDetailComponent} from'../features/libro-detalle/libro-detalle.component'

import {NewlibroComponent} from './new-libro/new-libro.component'
import{NewAppComponent} from './new-app/new-app.component'
import { NewPeliComponent} from'./new-peli/new-peli.component';

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
        path: 'libro/:id',
        component: LibroDetailComponent,
      },

      {
        path: '',
        redirectTo: '/peliculas',
        pathMatch: 'full',
      },
      {
        path: 'new-libro',
        component: NewlibroComponent,
      },
      {
        path: 'new-app',
        component: NewAppComponent,
      },
      {
        path: 'app/:id',
        component: AppsDetalles,
      },

      

      




];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
  })
  export class AppRoutingModule {}