import {Component, inject, TemplateRef} from '@angular/core';
import {RouterLink} from "@angular/router";
import {NgOptimizedImage, NgTemplateOutlet} from "@angular/common";
import { NgbOffcanvas, OffcanvasDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  standalone: true,
    imports: [
        RouterLink,
        NgOptimizedImage,
        NgTemplateOutlet,
    ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
    private offcanvasService = inject(NgbOffcanvas);
    closeResult = '';

    openEnd(rightSlider: TemplateRef<any>) {
        this.offcanvasService.open(rightSlider, { position: 'end' }).result.then(
            (result: any) => {
                this.closeResult = `Closed with: ${result}`;
            },
            (reason: any) => {
                this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
            },
        );
    }

    open(content: TemplateRef<any>) {
        this.offcanvasService.open(content, { ariaLabelledBy: 'offcanvas-basic-title' }).result.then(
            (result: any) => {
                this.closeResult = `Closed with: ${result}`;
            },
            (reason: any) => {
                this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
            },
        );
    }

    private getDismissReason(reason: any): string {
        switch (reason) {
            case OffcanvasDismissReasons.ESC:
                return 'by pressing ESC';
            case OffcanvasDismissReasons.BACKDROP_CLICK:
                return 'by clicking on the backdrop';
            default:
                return `with: ${reason}`;
        }
    }


}
