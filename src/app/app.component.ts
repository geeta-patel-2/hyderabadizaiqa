import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  NgbAccordionBody,
  NgbAccordionButton, NgbAccordionCollapse,
  NgbAccordionDirective,
  NgbAccordionHeader,
  NgbAccordionItem
} from "@ng-bootstrap/ng-bootstrap";
import {HeaderComponent} from "./components/header/header.component";
import {FooterComponent} from "./components/footer/footer.component";
import {HomePageComponent} from "./components/home-page/home-page.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgbAccordionDirective, NgbAccordionItem, NgbAccordionHeader, NgbAccordionButton, NgbAccordionCollapse, NgbAccordionBody, HeaderComponent, FooterComponent, HomePageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'hyderabadizaiqa';
}
