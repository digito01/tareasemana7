import { Component, Input } from '@angular/core'

    @Component({
        selector: 'detallePelis',
        templateUrl: './peliculasDetail.component.html',
        styleUrls: ['./peliculasDetail.component.scss']
})

export class PelisDetailComponent {
    @Input() pelis:any;
}