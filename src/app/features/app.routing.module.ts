import { from } from 'rxjs';
import {NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppsComponent } from './appss/apps.component';
import{LibrosComponent} from './libros/libros.component';
import{PelisComponent} from './peliculas/peliculas.component';

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

      




];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
  })
  export class AppRoutingModule {}