import { Component } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [NgbCarouselModule, NgOptimizedImage],
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.scss'
})
export class AboutPageComponent {
  //images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
}
