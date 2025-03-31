import { Component } from '@angular/core';
import { SliderComponent } from '../slider/slider.component';
import { HomeCollectionComponent } from "../home-collection/home-collection.component";
import { NewArrvHomeComponent } from "../new-arrv-home/new-arrv-home.component";
import { SocialMediaHomeComponent } from "../social-media-home/social-media-home.component";
import { BlogHomeComponent } from "../blog-home/blog-home.component";
import { NavCollectionsComponent } from '../nav-collections/nav-collections.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SliderComponent, HomeCollectionComponent, NewArrvHomeComponent, SocialMediaHomeComponent, BlogHomeComponent, NavCollectionsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
