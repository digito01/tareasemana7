import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component'
import { LibrosComponent } from './features/libros/libros.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PelisComponent } from './features/peliculas/peliculas.component';
import {PelisDetailComponent} from './features/peliculasDetalles/peliculasDetail';
import {LibrosDetailComponent} from './features/librosDetails/librosDetail';
import {AppsDetailComponent} from './features/appsdetails/appsDetail';
import {AppsComponent} from './features/appss/apps.component';
@NgModule({
  declarations: [
    AppComponent, 
    PelisComponent,
    LibrosComponent,PelisDetailComponent,LibrosDetailComponent,AppsDetailComponent,AppsComponent
    ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
