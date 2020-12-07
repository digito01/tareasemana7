import { Component } from '@angular/core';
import { App } from 'src/app/common/models/apps/app.model';
import { AppsDataService } from 'src/app/common/services/apps-data.service';

@Component({
  selector: 'new-app',
  templateUrl: './new-app.component.html',
})
export class NewAppComponent {
  app: App = {
    id: 0,
    nombre: '',
    genero: '',
    precio: "",
    image:'',
  };

  constructor(private appsDataService: AppsDataService) {}

  save(): void {
    if (this.validate(this.app)) {
      let result = this.appsDataService.addNewApps(this.app);
      if (result) console.log('Saved success!');
      else {
        console.log('error in save :(');
      }
    }
  }

  printConsole(): void {
    console.log(this.app.nombre);
  }

  validate(app: App): boolean {
    if (app.id !== 0) return false;
    if (app.nombre === '') return false;
    if (app.genero === '') return false;
    if (app.precio === "") return false;
    if (app.image === '') return false;
    return true;
  }
}
