import { Component, OnInit } from '@angular/core';
import { CloudinaryModule } from '@cloudinary/angular-5.x';
import {fill} from "@cloudinary/url-gen/actions/resize";
import { Cloudinary } from '@cloudinary/url-gen/index';

@Component({
  selector: 'app-produit',
  standalone: true,
  imports: [],
  providers:[CloudinaryModule],
  templateUrl: './produit.component.html',
  styleUrl: './produit.component.css'
})
export class ProduitComponent implements OnInit {
  ngOnInit(): void {
    const cld = new Cloudinary({
      cloud:{
        cloudName:'du1rqxwmr',
      },
    })
    
  }
}
