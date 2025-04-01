import { Component , OnInit } from '@angular/core';
import { CloudinaryModule } from '@cloudinary/angular-5.x';
import {fill} from "@cloudinary/url-gen/actions/resize";
import { Cloudinary } from '@cloudinary/url-gen/index';

@Component({
  selector: 'app-social-media-home',
  standalone: true,
  imports: [],
  providers:[CloudinaryModule],
  templateUrl: './social-media-home.component.html',
  styleUrl: './social-media-home.component.css'
})
export class SocialMediaHomeComponent implements OnInit {
  img!:any
  ngOnInit(): void {
    const cld = new Cloudinary({cloud:{
      cloudName:'du1rqxwmr'
    }})
        // Instantiate a CloudinaryImage object for the image with the public ID, 'docs/models'.
        this.img = cld.image('jcol3a4vlqacqog5dltm').resize(fill().width(4001).height(4001));

        ;
    
  }
}
