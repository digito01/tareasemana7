import { Component, Input, OnInit } from '@angular/core';
import { App } from 'src/app/common/models/apps/app.model';
import { APP_DATA } from '../../common/models/mocks/apps-data.mock';
import { ActivatedRoute } from '@angular/router';
import { Apps } from 'src/app/common/models//apps//apps.model';

@Component({
  selector: 'app-detalle',
  templateUrl: './app-detalle.component.html',
})
export class AppsDetalles implements OnInit {
  data: Apps = APP_DATA;
  app: App;
  constructor(private activedRoute: ActivatedRoute) {}
  ngOnInit(): void {
    const id = Number.parseInt(this.activedRoute.snapshot.paramMap.get('id'));
    console.log(id);
    this.app = this.data.apps.find((t) => t.id === id);
    console.log(this.app);
  }
}
