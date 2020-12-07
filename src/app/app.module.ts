import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './features/app.routing.module';

import { FormsModule } from '@angular/forms';
import {PeliculaDataService}from'./common/services/album-data.service'
import { AppComponent } from './app.component'
import { LibrosComponent } from './features/libros/libros.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PelisComponent } from './features/peliculas/peliculas.component';
import {PelisDetailComponent} from './features/peliculasDetalles/peliculasDetail';
import {LibrosDetailComponent} from './features/librosDetails/librosDetail';
import {AppsDetailComponent} from './features/appsdetails/appsDetail';
import {AppsComponent} from './features/appss/apps.component';
import {PeliDetailComponent}from './features/pelicula-detalle/pelicula-detalle.component'
import {NewPeliComponent} from './features/new-peli/new-peli.component'

@NgModule({
  declarations: [
    AppComponent, 
    PelisComponent,PeliDetailComponent,NewPeliComponent,
    LibrosComponent,PelisDetailComponent,LibrosDetailComponent,AppsDetailComponent,AppsComponent
    ],
  imports: [
    BrowserModule,AppRoutingModule,FormsModule,
    NgbModule
  ],
  providers: [PeliculaDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
