import { Component, Input } from '@angular/core'

    @Component({
        selector: 'appsDetail',
        templateUrl: './appsDetail.component.html',
        styleUrls: ['./appsDetail.component.scss']
})

export class AppsDetailComponent {
    @Input() apps:any;
}