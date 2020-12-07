import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './features/app.routing.module';

import { FormsModule } from '@angular/forms';
import {PeliculaDataService}from'./common/services/peliculas-data.service'
import { AppComponent } from './app.component'
import { LibrosComponent } from './features/libros/libros.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PelisComponent } from './features/peliculas/peliculas.component';
import {LibroDetailComponent} from './features/libro-detalle/libro-detalle.component';
import {AppsDetailComponent} from './features/appsdetails/appsDetail';
import {AppsComponent} from './features/app/apps.component';
import {PeliDetailComponent}from './features/pelicula-detalle/pelicula-detalle.component'
import {NewPeliComponent} from './features/new-peli/new-peli.component'
import { LibrosDataService } from './common/services/libros-data.service';
import { AppsDataService } from './common/services/apps-data.service';
import{AppsDetalles}from './features/app-detalle/app-detalle.component'
import{NewlibroComponent}from './features/new-libro/new-libro.component'

@NgModule({
  declarations: [
    AppComponent, 
    PelisComponent,PeliDetailComponent,NewPeliComponent,AppsDetalles,NewlibroComponent,
    LibrosComponent,LibroDetailComponent,AppsDetailComponent,AppsComponent
    ],
  imports: [
    BrowserModule,AppRoutingModule,FormsModule,
    NgbModule
  ],
  providers: [PeliculaDataService,LibrosDataService,AppsDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
