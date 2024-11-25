import {Component, inject} from '@angular/core';
import {NgbCarousel, NgbModal, NgbSlide} from "@ng-bootstrap/ng-bootstrap";
import {RouterLink} from "@angular/router";
import {NgOptimizedImage} from "@angular/common";

@Component({
    selector: 'app-home-page',
    standalone: true,
    imports: [NgbCarousel, NgbSlide, RouterLink, NgOptimizedImage],
    templateUrl: './home-page.component.html',
    styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
    public modalService = inject(NgbModal);

    images: Array<String> = ["/assets/images/banner%20Logo.jpg"];
}
