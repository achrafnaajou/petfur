import { Component, OnInit } from '@angular/core';

import { RouterOutlet } from '@angular/router';
import { NavComponent } from './entities/nav/nav.component';
import { SliderComponent } from './entities/slider/slider.component';
import { HomeCollectionComponent } from './entities/home-collection/home-collection.component';
import { FooterComponent } from "./entities/footer/footer.component";
import { BlogComponent } from "./entities/blog/blog.component";
import { CloudinaryModule } from '@cloudinary/angular-5.x';
import { Cloudinary } from '@cloudinary/url-gen/index';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent,
     SliderComponent, HomeCollectionComponent,
      FooterComponent, BlogComponent,



    ],
    providers:[CloudinaryModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'ecom';


  ngOnInit() {

    // Create a Cloudinary instance and set your cloud name.
    const cld = new Cloudinary({
      cloud: {
        cloudName: 'du1rqxwmr'
      }
    });
  }
}
