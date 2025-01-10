import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {NgForOf} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
    selector: 'app-menu-details',
    standalone: true,
    imports: [
        NgForOf,
        RouterLink
    ],
    templateUrl: './menu-details.component.html',
    styleUrl: './menu-details.component.scss'
})
export class MenuDetailsComponent {

    categories: Array<{ categoryName: string, items: Array<{ name: string, price: string, details: string, imageUri: string }> }> = [];

    constructor(private http: HttpClient) {
        this.http.get('assets/json/menu.json').subscribe((response: any) => {
            this.categories = response;
            console.log(this.categories);
        });
    }
}
