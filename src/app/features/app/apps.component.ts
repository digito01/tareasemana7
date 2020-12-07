import { Component,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import{AppsDataService} from 'src/app/common/services/apps-data.service'


@Component({
  selector: 'apps',
  templateUrl: './apps.component.html',
})
export class AppsComponent implements OnInit{

  appsDetail: any;
  appsModel: any ;
  
  constructor(
    private router: Router,
    private appsDataService: AppsDataService
  ) {}
  ngOnInit(): void {
    this.appsModel = this.appsDataService.getAllApps();
  }

  viewAppsDetail(app: any): void {
    this.router.navigate(['/app', app.id]);
  }
}

