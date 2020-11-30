import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component'
import { LibroComponent } from './features/libro/libro.component';
import { PeliculaComponent } from './features/pelicula/pelicula.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppFerMelComponent } from './features/app/appfermel.component';


@NgModule({
  declarations: [
    AppComponent, 
    AppFerMelComponent,
    LibroComponent,
    PeliculaComponent
    ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
