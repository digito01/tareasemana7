import { Component,OnInit} from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'apps',
  templateUrl: './apps.component.html',
  styleUrls: ['./apps.component.scss'],
})
export class AppsComponent {
  appsDetail: any;
  appsModel: any = {
    apps: [
      {
        nombre: 'Whatsapp',
        genero: 'red social',
        precio: "Gratis",
        relacion: 'para mensajear',
        image:
          'https://www.techspot.com/images2/news/bigimage/2017/11/2017-11-06-image-8.jpg',
      },
      {
        nombre: 'Facebook',
        genero: 'red social',
        precio: "Gratis",
        relacion: 'Chatiar',
        image:
          'https://i-cdn.phonearena.com/images/articles/319473-image/fbl.png',
      },
      {
        nombre: 'Roinstagrambots',
        genero: "red social",
        precio: "Gratis",
        relacion: 'chatiar',
        image:
          'https://i1.wp.com/www.xanjero.com/wp-content/uploads/2017/10/Google-Play-Store-app-rank-popularity-chart-Instagram.png?fit=1080%2C2220&ssl=1',
      },
      {
        nombre: 'Instagram lite',
        genero: 'Red social',
        precio: "Gratis",
        relacion: 'pelicula para niño',
        image:
          'https://i1.wp.com/www.xanjero.com/wp-content/uploads/2017/10/Google-Play-Store-app-rank-popularity-chart-Instagram.png?fit=1080%2C2220&ssl=1',
      },
    ],
  };

  verAppsDetalles(apps: any): void {
    this.appsDetail = apps;
  }
}
