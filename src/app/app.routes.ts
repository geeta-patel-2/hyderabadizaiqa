import { Routes } from '@angular/router';
import {HomePageComponent} from "./components/home-page/home-page.component";
import {AboutPageComponent} from "./components/about-page/about-page.component";
import {ContactPageComponent} from "./components/contact-page/contact-page.component";
import {MeetTheChefComponent} from "./components/meet-the-chef/meet-the-chef.component";
import {PhotoGalleryComponent} from "./components/photo-gallery/photo-gallery.component";
import {FranchiseeComponent} from "./components/franchisee/franchisee.component";
import {OurMenusComponent} from "./components/our-menus/our-menus.component";
import {MenuDetailsComponent} from "./components/menu-details/menu-details.component";


export const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'about-us', component: AboutPageComponent},
  {path: 'our-menus', component: OurMenusComponent},
  {path: 'menu-details', component: MenuDetailsComponent},
  {path: 'meet-the-chef', component: MeetTheChefComponent},
  {path: 'photo-gallery', component: PhotoGalleryComponent},
  {path: 'franchisee', component: FranchiseeComponent},
  {path: 'contact-us', component: ContactPageComponent}

];
