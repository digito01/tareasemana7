import { Injectable } from '@angular/core';
import { Apps } from '../models/apps/apps.model';
import { APP_DATA } from '../models/mocks/apps-data.mock';
import { App } from '../models/apps/app.model';

@Injectable({ providedIn: 'root' })
export class AppsDataService {
  constructor() {}
  getAllApps(): Apps {
    return APP_DATA;
  }
  getAppById(id: number): App {
    return APP_DATA.apps.find((t) => t.id === id);
  }
  addNewApps(app: App): boolean {
    try {
      let lastId =
      APP_DATA.apps.length === 0
          ? 0
          : APP_DATA.apps[APP_DATA.apps.length - 1].id;
          app.id = lastId + 1;
          APP_DATA.apps.push(app);

      return true;
    } catch (err) {
      console.error(err);
      return false;
    }
  }
}
