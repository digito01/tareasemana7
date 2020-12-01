import { Component, Input } from '@angular/core'

    @Component({
        selector: 'librossDetail',
        templateUrl: './librosDetail.component.html',
        styleUrls: ['./librosDetail.component.scss']
})

export class LibrosDetailComponent {
    @Input() libros:any;
}