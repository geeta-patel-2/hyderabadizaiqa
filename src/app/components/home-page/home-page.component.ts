import {Component, inject} from '@angular/core';
import {NgbCarousel, NgbModal, NgbSlide} from "@ng-bootstrap/ng-bootstrap";
import {RouterLink} from "@angular/router";

@Component({
    selector: 'app-home-page',
    standalone: true,
    imports: [
        NgbCarousel,
        NgbSlide,
        RouterLink
    ],
    templateUrl: './home-page.component.html',
    styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
    public modalService = inject(NgbModal);
}
