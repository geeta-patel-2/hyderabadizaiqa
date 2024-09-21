import {Component, inject, TemplateRef} from '@angular/core';
import {NgbCarousel, NgbModal, NgbSlide} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    NgbCarousel,
    NgbSlide
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

  public modalService = inject(NgbModal);
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);


}
