import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-our-menus',
  standalone: true,
    imports: [
        RouterLink
    ],
  templateUrl: './our-menus.component.html',
  styleUrl: './our-menus.component.scss'
})
export class OurMenusComponent {

}
