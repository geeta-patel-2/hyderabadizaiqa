import {Component, inject, TemplateRef} from '@angular/core';
import {ModalDismissReasons, NgbCarouselConfig, NgbCarouselModule, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {NgForOf} from "@angular/common";

@Component({
    selector: 'app-photo-gallery',
    standalone: true,
    imports: [NgbCarouselModule, NgForOf],
    templateUrl: './photo-gallery.component.html',
    styleUrl: './photo-gallery.component.scss',
    providers: [NgbCarouselConfig],
})
export class PhotoGalleryComponent {

    galleryImages: Array<{ imageSource: string }> = [{
        imageSource: 'assets/images/gallery_image1.jpg'
    }, {
        imageSource: 'assets/images/gallery_image2.jpg'
    }, {
        imageSource: 'assets/images/gallery_image3.jpg'
    }, {
        imageSource: 'assets/images/gallery_image4.jpg'
    }, {
        imageSource: 'assets/images/gallery_image5.jpg'
    }, {
        imageSource: 'assets/images/gallery_image6.jpg'
    }, {
        imageSource: 'assets/images/gallery_image7.jpg'
    }];

    images = [700, 533, 807, 124].map((n) => `https://picsum.photos/id/${n}/900/500`);

    constructor(config: NgbCarouselConfig) {
        // customize default values of carousels used by this component tree
        config.interval = 10000;
        config.wrap = false;
        config.keyboard = false;
        config.pauseOnHover = false;
    }

    private modalService = inject(NgbModal);
    closeResult = '';

    open(content: TemplateRef<any>) {
        this.modalService.open(content, {
            ariaLabelledBy: 'modal-basic-title',
            modalDialogClass: 'imgSlidePopUp',
            centered: true,
            size: "",
            animation: true,
            keyboard: true
        }).result.then(
            (result: any) => {
                this.closeResult = `Closed with: ${result}`;
            },
            (reason) => {
                this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
            },
        );
    }

    private getDismissReason(reason: any): string {
        switch (reason) {
            case ModalDismissReasons.ESC:
                return 'by pressing ESC';
            case ModalDismissReasons.BACKDROP_CLICK:
                return 'by clicking on a backdrop';
            default:
                return `with: ${reason}`;
        }
    }
}
